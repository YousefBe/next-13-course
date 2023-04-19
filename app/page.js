import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Link className='mb-4' href={'/about'}>
        about
      </Link>
    </div>
  )
}

export default HomePage