import React from 'react'

export default function Login() {
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-10 lg:py-32 lg:pr-10'>
          <div className='lg:col-span2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm'>
              <div className='text 2xl'>Dang ky</div>
              <div className="mt-8">
                <input
                  type='email'
                  name='email'
                  className='p-3 w-full border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm'
                  placeholder='Email'
                />
                <div className='mt-1 text-red-600 min-h-[1rem]'>Email ko hop le</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
