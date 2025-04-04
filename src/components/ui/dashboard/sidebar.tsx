import React from 'react'
import NavLinks from './nav-links'

function Sidebar() {
  return (
    <aside className='bg-gray-100 p-4 w-1/5 m-4 rounded-lg'>
      <nav className='flex flex-col space-y-2'>
        <NavLinks />
      </nav>
    </aside>
  )
}

export default Sidebar