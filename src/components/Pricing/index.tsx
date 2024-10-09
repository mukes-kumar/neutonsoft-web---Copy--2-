"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-10 lg:pb-20">
      <div className="container">
        <SectionTitle
          title="Start Free Trial -change to - Choose Plan"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        {/* <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-8">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
                } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${isMonthly ? "" : "translate-x-full"
                    } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
                } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            button="Basic Plan"
            packageName="Basic"
            price={isMonthly ? "1800" : "2400"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="For startups needing to simple      solutions:"
          >
            {/* <OfferList text="All UI Components" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Commercial Use" status="active" />
            <OfferList text="Email Support" status="active" />
            <OfferList text="Lifetime Access" status="inactive" />
            <OfferList text="Free Lifetime Updates" status="inactive" /> */}
            <OfferList text="Custom Consultation & Requirement Analysis" status="active" />
            <OfferList text="Static Website (Single Page)" status="active" />
            <OfferList text="4-page Mobile Application Development" status="active" />
            <OfferList text="Basic UI/UX Design" status="active" />
            <OfferList text="Basic API Integration" status="active" />
            <OfferList text="Standard Security Implementation" status="active" />
            <OfferList text="10 Hours of Post-launch Support" status="active" />
            <OfferList text="1 Revision Cycle" status="active" />
            <OfferList text="Email & Chat Support" status="active" />

          </PricingBox>
          <PricingBox
            button="Professional Plan"
            packageName="plan"
            price={isMonthly ? "4000" : "5000"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="For businesses requiring dynamic solutions:"
          >
            <OfferList text="Full Business Consultation & Requirement Analysis" status="active" />
            <OfferList text="Dynamic Website Development" status="active" />
            <OfferList text="- 4-page Mobile Application Development" status="active" />
            <OfferList text="Advanced UI/UX Design" status="active" />
            <OfferList text="3 API Integrations" status="active" />
            <OfferList text="Enhanced Security Features" status="active" />
            <OfferList text="20 Hours of Post-launch Support" status="active" />
            <OfferList text="2 Revision Cycles" status="inactive" />
            <OfferList text="Email, Chat & Phone Suppor" status="active" />



          </PricingBox>
          <PricingBox
            button="Enterprise Plan"
            packageName="Custom Pricing"
            price={isMonthly ? "1000" : ""}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Custom solutions for large enterprises solutions:"
          >
            <OfferList text="End-to-End Consultation & Strategy" status="active" />
            <OfferList text="Web, Mobile & Cloud-based App Development" status="active" />
            <OfferList text="Advanced UI/UX Design & Custom Branding" status="active" />
            <OfferList text="Unlimited API Integrations" status="active" />
            <OfferList text="High-level Security & Compliance" status="active" />
            <OfferList text="Dedicated Project Manager" status="active" />
            <OfferList text="50 Hours of Post-launch Support" status="active" />
            <OfferList text="Unlimited Revisions" status="active" />
            <OfferList text="24/7 Priority Support" status="active" />

          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
