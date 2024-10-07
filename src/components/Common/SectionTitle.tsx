"use client"
import { motion } from 'framer-motion';

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };
  return (
    <>
      <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-1 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </motion.div>
    </>
  );
};

export default SectionTitle;
