import React from 'react'

type Props = {
    image:string,
    text:string
}

const TextHover = (props: Props) => {
  return (
    <div className='w-42 h-32'>
        <img className="absolute inset-0 object-cover
                                w-full h-full group-hover:opacity-50"
                        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png" />
                    <div className="relative p-5">
                        <div className="mt-40"></div>
           <div className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0">
                                <div className="p-2">
                                    <p className="text-lg text-white">
                          { props.text}.
                                    </p>
                                    <button className="px-4 py-2 text-sm
                                            text-white bg-green-600">
                                        Visit site
                                    </button>
                                </div>
                            </div>
                            </div>
                            <>
            <center>
                <h1 className="text-green-600 text-4xl">
                    {props.text}
                </h1>
                <h2 className="text-black text-2xl">
                      Description? 
                </h2>
            </center>
            <div className="flex items-center justify-center mt-12">
                <a className="relative block w-1/4 h-64
                      bg-gray-900 group" href="##">
                    <div className="absolute bg-green-500 inset-0
                            w-full h-64 group-hover:opacity-50">
                    </div>
                    <div className="relative p-10">
                        <div className="mt-2">
                            {/* Hidden content */}
                            <div className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0">
                                <div className="p-2">
                                    <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png"
                                        alt="logo"
                                        width={100}
                                        className="rounded-full" />
                                    <p className="text-xl text-white">
                                          { props.text}
                                    </p>
                                    <button className="px-4 py-2 text-sm
                                            text-white bg-green-600">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                            {/* End of hidden content */}
                        </div>
                    </div>
                </a>
            </div>
        </>
                            </div>
                            
    
  )
}

export default TextHover