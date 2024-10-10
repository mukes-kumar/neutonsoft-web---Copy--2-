import React from 'react'

function CarrerPage() {
  return (
    <>
      <div className='mt-20 text-3xl text-blue-800 font-bold text-center'>Carrer Page</div>

      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-md animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Open Positions</h2>
            <ul className="list-disc">
              <li>Software Engineer</li>
              <li>UI/UX Designer</li>
              <li>Project Manager</li>
            </ul>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Why Work Here</h2>
            <ul className="list-disc">
              <li>Competitive Salary</li>
              <li>Flexible Work Arrangements</li>
              <li>Growth Opportunities</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Apply Now
          </button>
        </div>
      </div>
    </>
  )
}

export default CarrerPage