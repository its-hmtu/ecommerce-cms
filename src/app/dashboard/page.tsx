import BreadcrumbCommon from '@/components/common/breadcrumb-common'
import Sidebar from '@/components/ui/dashboard/sidebar'
import { ILinks } from '@/types'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard page',
}

const breadcrumbs: ILinks[] = [
  {
    label: 'Dashboard',
    href: '/dashboard'
  }
]

const Page = () => {
  return (
    <>
      <BreadcrumbCommon content={breadcrumbs} />
      <div className='flex flex-row'>
        <div className='flex-grow p-4'>
          <h1 className='text-2xl font-bold'>Dashboard</h1>
          
        </div>
      </div>
    </>
  )
}

export default Page
