import React from 'react'

export default function FormWrapper({title, children}: {title: string, children: React.ReactNode}) {
  return (
    <div className='wrapper'>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
