import Breadcrumb from '@/components/Common/Breadcrumb'
import OurProductPage from '@/components/Our-Product'
import React from 'react'

import { Metadata } from "next";
import NewProduct from '@/components/Our-Product/NewProduct';

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
        description="Business Process Outsourcing Solutions can improve the efficiency of your organization by allowing you to focus on your core competencies. Our team of experts can handle all of your administrative and support needs, allowing you to reduce costs and improve margins. Let us show you how we can help streamline your operations and improve your bottom line."

      />

      {/* <OurProductPage /> */}
      <NewProduct/>
    </>
  )
}

export default page