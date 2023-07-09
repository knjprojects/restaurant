//import { Button, Card, Input, List, message, Image, Progress } from 'antd'
'use client'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import React, { useState } from 'react'
import { storage } from '../utils/firebase'
import { ToastContainer,toast } from 'react-toastify'
import Toast from './Toast'
import'react-toastify/dist/ReactToastify.css';
import { Form,useForm } from 'react-hook-form'
import Input from 'antd/es/input/Input'
import Image from 'next/image'
const UploadImageToStorage = () => {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      example: "",
      exampleRequired: ""
    }
  });

  const [imageFile, setImageFile] = useState<File>()
  const [downloadURL, setDownloadURL] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [progressUpload, setProgressUpload] = useState(0)
  

  const UpdateSettings = (id:string,name:string,age:number,address:string,propic:string) => { 
    if (propic) { 
      
    }
  }
  const handleSelectedFile = (files: any) => {
    if (files && files[0].size < 10000000) {
      setImageFile(files[0])

      console.log(files[0])
    } else {
      Toast('success','ayy','random')
    }
  }

  const handleUploadFile = () => {
    if (imageFile) {
      const name = imageFile.name
      const storageRef = ref(storage, `image/${name}`)
      const uploadTask = uploadBytesResumable(storageRef, imageFile)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          setProgressUpload(progress) // to show progress upload

          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          Toast('success',error.message,'random')
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            setDownloadURL(url)
            UpdateSettings('', '', 0, '', url);

          })
        },
      )
    } else {
      Toast('success','file not found','random')
     // message.error('File not found')
    }
  }

  const handleRemoveFile = () => setImageFile(undefined)

  return (
    <div className="toast-container"><ToastContainer limit={2} />
      <div className="mt-5 bg-gray-300 text-white">
      <p className='text-white font-bold'>yo</p>
      <div className="col-lg-8 offset-lg-2">
        <Input
          type="file"
          placeholder="Select file to upload"
          accept="image/png"
          onChange={(files:any) => handleSelectedFile(files.target.files)}
        />

          <div className="mt-5">
            {
              <div>
                {imageFile && (
                  <div>
                    <div className='rounded-md w-full h-full themed'>
                      <h1 className='justify-center text'>{imageFile.name}</h1>
                      
                    </div>
                    <div className='flex flex-row'>
                      <button className='justify-center text'
                        onClick={handleRemoveFile} >Remove file</button>
                      <div className='flex flex-row'>
                        {
                          progressUpload >= 1 ?
                            <p className='animate-spin text-blue-300'>o</p> : <></>
                        }
                        <button className='justify-center text'
                          onClick={handleUploadFile}>Upload</button></div>
                      
                    </div>

                  </div>
                )}
              </div>
            }
             {downloadURL && (
              <>
                <Image
                  src={downloadURL}
                  alt={downloadURL}
                  width={200} height={ 200}
                 
                />
                <p>{downloadURL}</p>
              </>
            )}
          </div>
            
      </div>
    </div>
    </div>
    
  )
}

export default UploadImageToStorage