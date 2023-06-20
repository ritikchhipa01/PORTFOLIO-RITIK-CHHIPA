import React from 'react'
import Layout from './Layout'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark text-dark dark:text-light dark:border-light'>
    <Layout className='py-6 flex items-center justify-between'>
       <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
       <div className='flex items-center'>
        Build with <span className='text-primary  dark:text-primaryDark text-2xl px-1'> &#9825;</span><Link href="/" className='underline underline-offset-2'> by Ritik chhipa</Link>
       </div>
       <Link href="/" >Say Hello</Link>
    </Layout>
    
    </footer>
  )
}

export default Footer
