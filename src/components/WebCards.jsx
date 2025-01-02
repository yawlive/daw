import React from 'react'
import Card from './Card'

const WebCards = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">


         <Card bg='bg-slate-100'>
         <h2 className="text-2xl font-bold">For Students</h2>
          <p className="mt-2 mb-4">
            Choose your project theme today !
          </p>
          {/* link pls work*/}
          <a
            href="/login"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Register as a Student
          </a>
          


            </Card>



        
            <Card bg='bg-slate-200'>
            <h2 className="text-2xl font-bold">For teachers</h2>
          <p className="mt-2 mb-4">
            List your topics and design your perfect group 
          </p>
          <a
            href="/login"
            className="inline-block bg-slate-600 text-white rounded-lg px-4 py-2 hover:bg-slate-700"
          >
            Register as a Teacher
          </a>
            </Card>

         
        {/* </div> */}
      </div>
    </div>
  </section>
  );
}

export default WebCards