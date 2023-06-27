import React from 'react'
import { app, db  } from '../../utils/firebase';
import { Form as AntdForm, Button } from 'antd'
import { useCollection,useDocument } from 'react-firebase-hooks/firestore';
import { doc,collection } from 'firebase/firestore';
import { Form } from 'react-hook-form';
import { TextBlock,MediaBlock, TextRow,RectShape,RoundShape } from 'react-placeholder/lib/placeholders';
import ReactPlaceholder from 'react-placeholder';
type Props = {}
const Profile = (props: Props) => {
  /*const [value, loading, error] = useCollection(
    collection(db, 'Users'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );*/
  const [value, loading, error] = useDocument(
    doc(db, 'Users', 'nBShXiRGFAhuiPfBaGpt'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      <ReactPlaceholder ready={!value || loading} type='text' > <Button >Button inside placeholder
      </Button></ReactPlaceholder>
      {value &&  <RoundShape color='#E4E2C2BF'/> }
    </div>
  )
}

export default Profile