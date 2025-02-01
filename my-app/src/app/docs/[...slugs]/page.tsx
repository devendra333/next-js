import React from 'react'

const page = async ({params}: {params: Promise<{slugs: string[]}> }) => {
  const {slugs} = await params;
  console.log("strings", slugs)// strinmgs separatyed by / after the docs
  return (
    <div>
      This is  a catch all pagen for anything starting swith Docs
    </div>
  )
}

export default page
