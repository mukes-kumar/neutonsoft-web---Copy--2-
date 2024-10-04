import Breadcrumb from '@/components/Common/Breadcrumb'
import Pricing from '@/components/Pricing'
import React from 'react'

function page() {
  return (
    <>
    <Breadcrumb
        pageName="Pricing Page"
        description="Our dedicated customer support team is ready to assist you with any questions or concerns. Feel free to reach out to us using the following methods. Pricing is less"
      />
        <Pricing />
    </>
  )
}

export default page