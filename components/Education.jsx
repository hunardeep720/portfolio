import React from 'react'

function Education() {
  return (
    <div id='education' className='text-center max-w-screen-xl mx-auto m-10 gap-5 text-black grid sm:grid-cols-3 grid-cols-1 px-6 bg-white pt-24 sm:pt-40 justify-center items-center'>
        <p className='col-span-full text-3xl font-extrabold w-1/2 border-black border-b-2 mx-auto mb-10'>Education</p>
        <p className='font-bold text-2xl col-span-2'>SOUTHERN ALBERTA INSTITUTE OF TECHNOLOGY (SAIT)</p>
        <p className='text-xl font-bold'>2022-2024</p>
        <div className='col-span-full'>
            <div className='grid-cols-2'>
                <p>Courses</p>
                <p></p>
            </div>
        </div>
        <iframe src='https://xyz-online-store-iq2a.vercel.app/' className='col-span-full' width='100%' height="600px"/>
    </div>
  )
}

export default Education