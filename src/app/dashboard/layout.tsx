import Sidebar from '@/components/ui/dashboard/sidebar'
import React from 'react'

const DashboardLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className='flex flex-row h-screen'>
      <Sidebar />
      <main className='flex-grow p-4'>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout