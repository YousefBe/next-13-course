import React from 'react'

export const  metadata = {
  title: 'About Page Title',
  description: 'React is a JavaScript library for building user interfaces.'
}

const layout = ({children}) => {
  return (
    <div>
      <p>About Page Layout</p>
      {children}
    </div>
  )
}

export default layout