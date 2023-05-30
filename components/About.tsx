import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex' id="second">
        <div className='text-center'>About</div>
        <div className='w-4/5 h-11 items-center align-middle'>
            <div className='mt-3 flex flex-row self-center'>
                <p className='text-white font-bold text-md'>About description here</p>
            </div>
        </div>
    </div>

  )
}

export default About