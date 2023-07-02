import React from 'react'

type Props = {
    sanityContentType: string
    sanityContentId: string
}

const SanityComponentLoader = (props: Props) => {
    if (props.sanityContentType == 'dish') {
        
          return (
            <div>

            </div>
        )
     }
      
    else { 
        return (
            
        <div></div>        )
    }
}

export default SanityComponentLoader