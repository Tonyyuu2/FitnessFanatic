import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <header className='flex items-center justify-between bg-indigo-500 w-full h-20'>
      <div>
        <nav>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              {/* add links here */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
