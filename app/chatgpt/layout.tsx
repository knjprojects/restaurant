import React from 'react'

type Props = {}

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <> <html>
        <head></head>
        <body>
            {children}
        </body>
    </html></>
   
  )
}

export default layout