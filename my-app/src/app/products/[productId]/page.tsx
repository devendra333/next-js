import React from 'react'

const page = async ({params}: {params: Promise<{productId: string}>}) => {
   const productId = (await params).productId
  return (
    <div>
      Prouct details of {productId}
    </div>
  )
}

export default page
