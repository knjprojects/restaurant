import React from 'react'

type Props = {}

const Minimap= (searchParams:any) => {
  return (
    <div>
      <iframe src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}&${searchParams}`} />
    </div>
  )
}

export default Minimap