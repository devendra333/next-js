import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <p>Here is the layout</p>
      {children}
    </div>
  )
}

export default layout
