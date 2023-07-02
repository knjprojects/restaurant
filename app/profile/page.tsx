'use client'
import React,{useState} from 'react'
//form
import { Form as AntdForm,Input, Button, Upload } from 'antd'
import { Form } from 'react-hook-form';

//firebase
import { useCollection,useDocument } from 'react-firebase-hooks/firestore';
import { doc,collection } from 'firebase/firestore';
import { db } from '../../utils/firebase';
//shimmer
import { TextBlock,MediaBlock, TextRow,RectShape,RoundShape } from 'react-placeholder/lib/placeholders';
import ReactPlaceholder from 'react-placeholder';

import Lottie from "lottie-react";
import animationData from "../../public/assets/lottie/profile.json";
import { MyUser } from '../../typings';
import { Tab } from '@headlessui/react';
import UploadImageToStorage from '../../components/Upload';
  type Props = {}
const Profile = (props: Props) => {

 
  const [value, loading, error] = useDocument(
    doc(db, 'Users', 'nBShXiRGFAhuiPfBaGpt'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}
  const user: any = value?.data()
  let [categories] = useState({
    Security: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Feedback: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Analytics: [
      {
        id: 1,
        title: 'Lets take a look at your activities.',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
    Cart: [
      
    ]
  })

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <div>
      <div className='flex flex-col bg-gray-300 rounded-md hover:scale-105 hover:animate-pulse'>
        <p>Lets upload to firebase storage</p>
        
        <UploadImageToStorage />
      </div>
      {/*<ReactPlaceholder ready={!value || loading} type='text' > <Button >Button inside placeholder
      </Button></ReactPlaceholder>*/}
      {user?
        <p>{ JSON.stringify(user?.name)}</p>:<></>
      }
      {value && <RoundShape color='#E4E2C2BF' />}
      {user && 
        <p>{ user.age}</p>
      }
    </div>
    </div>
  )
  
 
}

export default Profile