
"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import "./styles.css"


const LINKS = [
    "/forgot-password/userId",
    "/login"
]

interface propsInterface {
    children: React.ReactNode
}

const layout = (props: propsInterface) => {
    const pathName = usePathname();
  return (

    <div>
        {LINKS.map(link => {
            const isActive = pathName === link;
            return <Link href={link} key={link} className={isActive ?  'text-white mr-4': 'text-red-200 mr-4'}>{link.slice(1)}</Link>
        })}
      {props.children}
    </div>
  )
}

export default layout
