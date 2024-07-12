import React from 'react'

function Testimonial() {
  return (
    <section className='bg-grat-100 py-16'>
        <div className='container mx-auto text-center'>
            <h2 className='text-3xl font-semibold text-gray-800'>Testimonial</h2>
            <div className='flex flex-wrap justify-center mt-8'>
                <div className='.w-full.md:w-1/2 lg:w-1/3 px-4 mb-8'>
                <div className='bg-white p-6 rounded-lg shadow-md'>
                    <p className='text-gray-600'>Amazing</p>
                    <p className='text-gray-800 font-semibold mt-4'>john</p>
                </div>
                </div>
                    <div className='.w-full.md:w-1/2 lg:w-1/3 px-4 mb-8'>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <p className='text-gray-600'>Amazing</p>
                        <p className='text-gray-800 font-semibold mt-4'>john</p>
                    </div>
                    </div>
                    <div className='.w-full.md:w-1/2 lg:w-1/3 px-4 mb-8'>
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <p className='text-gray-600'>Amazing</p>
                        <p className='text-gray-800 font-semibold mt-4'>john</p>
                    </div>
                    </div>
            </div>
            
        </div>
        

    </section>
  )
}

export default Testimonial