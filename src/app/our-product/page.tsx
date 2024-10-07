import Breadcrumb from '@/components/Common/Breadcrumb'
import OurProductPage from '@/components/Our-Product'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "our-product | Transforming Ideas into Innovative Solutions",
  description: "This is our-product for Neutonsoft",
  // other metadata
};
function page() {
  return (
    <>
    <Breadcrumb
        pageName="Our Product Page"
        description="Our dedicated customer support team is ready to assist you with any questions or concerns. Feel free to reach out to us using the following methods."
      />

      <OurProductPage />
    </>
  )
}

export default page