import React from 'react'
import Link from "next/link"

const Home = () => {
  return (
    <div>
      Welcxome home
      <Link href="/about">About</Link>
      {/* IF we add replace attr in Link, istead of pushing it will replace in the histoty
       */}
    </div>
  )
}

export default Home
