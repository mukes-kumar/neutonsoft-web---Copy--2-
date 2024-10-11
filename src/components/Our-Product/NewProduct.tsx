import Image from 'next/image'
import React from 'react'

function NewProduct() {
  return (
    <>
       <section className="py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* <!-- Card 1 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-2">Card Title 1</h2>
        <p className="text-gray-600">This is a description for card one. It includes a hover effect.</p>
      </div>
      {/* <!-- Card 2 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-2">Card Title 2</h2>
        <p className="text-gray-600">This is a description for card two. It also has a hover effect.</p>
      </div>
      {/* <!-- Card 3 --> */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
        <h2 className="text-2xl font-bold mb-2">Card Title 3</h2>
        <p className="text-gray-600">This is a description for card three with a cool hover effect.</p>
      </div>
    </div>
  </section>


    </>
  )
}

export default NewProduct