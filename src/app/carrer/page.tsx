import CarrerPage from '@/components/Carrer'
import Breadcrumb from '@/components/Common/Breadcrumb'
import React from 'react'

function page() {
  return (
    <>
    <Breadcrumb
        pageName="Carrer at NeutonSoft"
        description="Our dedicated customer support team is ready to assist you with any questions or concerns. Feel free to reach out to us using the following methods."
      />
        <CarrerPage />

    </>
  )
}

export default page