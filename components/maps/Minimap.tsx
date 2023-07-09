import React from 'react'


const Minimap = (searchParams: any) => {
  //<iframe src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}&${searchParams}`} />
  const apiKey='AIzaSyAjz4GHb3CrChQ-AQcIXkK7QIO6wZ5_8LU'
  return (
    <div className='h-20 '>
      <iframe src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=${apiKey}&${searchParams}`} />
    </div>
  )
}

export default Minimap