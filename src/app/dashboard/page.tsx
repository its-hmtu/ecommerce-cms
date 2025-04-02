import BreadcrumbCommon from '@/components/common/breadcrumb-common'
import { ILinks } from '@/types'
import React from 'react'

const breadcrumbs: ILinks[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Dashboard',
    href: '/dashboard'
  }
]

const Page = () => {
  return (
    <BreadcrumbCommon content={breadcrumbs} />
  )
}

export default Page
