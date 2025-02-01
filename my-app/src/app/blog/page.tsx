import { useRouter } from 'next/router'
import React from 'react'

const getRandom = () =>  {
    return Math.floor(Math.random()*6)
}

const page = async () => {
    const random = getRandom();
    console.log("random", random);
    if(random % 2 === 0) {
        throw new Error("Something went wrong!!")
    }
//   await new Promise((res, rej) => setTimeout(res, 2000));

  return (
    <div>
      Blog
    </div>
  )
}

export default page
