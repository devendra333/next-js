import React from 'react'

import { Metadata } from 'next'
export const generateMetadata = async ({params}: {params: Promise<{productId: string}>}) => {
    const productId = (await params).productId;
    return {
        title : "product " + productId
    }
}

const page = async ({params}: {params: Promise<{productId: string}>}) => {
   const productId = (await params).productId
  return (
    <div>
      Prouct details of {productId}
    </div>
  )
}

export default page
