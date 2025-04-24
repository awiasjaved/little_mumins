import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`mx-auto py-6 ${className}`}>{children}</div>
  )
}

export default Container