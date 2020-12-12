import React from 'react';
import { PathEducation } from './paths_svg/paths';

function Education({education}) {
	return (
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" id="education">
            Education
          </h1>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
      {Object.keys(education).map(function (key , i) {
        return (
          <div className="flex flex-wrap" key={i}>
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                {education[key].the_year} : {education[key].title}
              </h3>
              <p className="text-gray-600 mb-8">
              {education[key].description}
                <br />
                <br />
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <svg className="w-full sm:h-64 mx-auto" viewBox="0 0 1177 598.5" xmlns="http://www.w3.org/2000/svg">
                <title>education 1</title>
                <PathEducation key={i}/>
              </svg>
            </div>
          </div>
          )}
      )}
           </div>
         </section>
  )
  
}

export default Education;