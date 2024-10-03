"use client"
// import { motion } from 'framer-motion';

import React from 'react';
interface DownloadPdfButtonProps {
  pdfUrl: string;
}
function DownloadPdfButton(){
  
  return (
    <button 
    
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      <a href="\images\portfolio\Neutonsoft-Profile.pdf" download="NeutonSoft Profile">Download Profile</a>
    </button>
  );
}

export default DownloadPdfButton;