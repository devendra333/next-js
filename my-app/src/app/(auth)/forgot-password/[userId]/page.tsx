"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { use } from 'react'


interface propsInterface {
  params: Promise<{userId: string}>
  searchParams: Promise<{lang?: string}>
}

const page =  (props: propsInterface) => {
  const params = use(props.params); // use hook is laternative to astync wait in client hook
  const searchParams = use(props.searchParams);
  const router = useRouter(); // Onlu on client components 

  console.log("params", params, searchParams)
  const handleClick = () => {
    router.push("/about")
  }
  return (
    <div>
      Forgot password page
      <Link href={`/forgot-password/${params.userId}?lang=fr`}>Switch to french</Link>
      <Link href={`/forgot-password/${params.userId}?lang=en`}>Switch to ebglisg</Link>

      <button onClick={handleClick}>Go to home page</button>

    </div>
  )
}

export default page
