import CarrerPage from '@/components/Carrer'
import Breadcrumb from '@/components/Common/Breadcrumb'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "carrer | Transforming Ideas into Innovative Solutions",
  description: "This is Carrer at Neutonsoft",
  // other metadata
};
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