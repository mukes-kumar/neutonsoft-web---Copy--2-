import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Transforming Ideas into Innovative Solutions",
  description: "This is Contact | Neutonsoft",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Our dedicated customer support team is ready to assist you with any questions or concerns. Feel free to reach out to us using the following methods."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
