import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      default revenue Page
      <Link href="/dashboard/archieved">Go to archirved page</Link>
    </div>
  )
}

export default page
