import React,{forwardRef} from 'react'

type Props = {}

const About = ({description,ref}:any) => {
  return (
    <div className='flex' id="second">
        <div className='text-center'>
          <p href={ref}></p>
        </div>
        <div className='w-4/5 h-11 items-center align-middle'>
            <div className='mt-3 flex flex-row self-center'>
                <p className='text-white font-bold text-md'>About description here</p>
            </div>
        </div>
    </div>

  )
}

export default About