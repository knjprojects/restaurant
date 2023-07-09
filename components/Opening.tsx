import React from 'react'

type Props = {}

const Opening = (props: Props) => {
    const dateTime = [
        { day: 'Saturday', time: '11:am' },
        { day: 'Sunday', time: 'Closed' },
        { day: 'Monday', time: 'Closed' },
        { day: 'Tuesday', time: '11am -6pm' },
        { day: 'Wednesday', time: '11am - 6pm' },
        { day: 'Thursday', time: '11am - 6 pm' },
        { day: 'Friday', time: '11 am - 8 pm' },
    ]

  return (
      <div className='themed'>
          <h1 className='text text-center'>
              Opening Hours
          </h1>
          <div className='m-6'>   {
              dateTime?.map((opening: any) => { 
                  return (
                      <div  className='flex flex-row' key={opening}>
                          <p className='text'>{opening?.date}</p>
                          <p className='text'>{ opening?.time}</p>
                      </div>
                  );
              })
          }</div>
       
        
    </div>
  )
}

export default Opening