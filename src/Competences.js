import React, { useState } from 'react';
// import html from './images/html.png';
// import aws from './images/aws.png';
// import c from './images/c.png';
// import docker from './images/docker.png';
// import git from './images/git.png';
// import javascript from './images/javascript.png';
// import kubernetes from './images/kubernetes.png';
// import network from './images/network.png';
// import windows from './images/windows.png';
// import reactjs from './images/react.png';
// import bug from './images/bug.png';
// import node from './images/node.png';

function Cards({img, title, description}) {
	const [stateHere, setStateHere] = useState(false);
	return (
		<>
		{stateHere ? (
			<>
<div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setStateHere(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setStateHere(false)}
                  >
                    <span className="text-black">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-gray-600 text-lg leading-relaxed">
                    {description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setStateHere(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
	  ) : null}
	<div className="h-40 w-40 relative cursor-pointer mb-2" onClick={() => setStateHere(true)}>
			<div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
			<div className="absolute inset-0 transform  hover:scale-75 transition duration-300 p-2">
			<div className="h-full w-full bg-white rounded-lg shadow-1xl">
			<img className="w-full object-contain sm:h-24" alt="home" src={"/media/"+img} />
				<h1 className="text-center font-bold text-gray-800">{title}</h1>
			</div>
			</div>
		</div>
		</>
	)
}

function Competences({competence}) {
	return (
		<>
	<section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" id="competences">
		Competences
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
		 <div className="flex flex-wrap">
			{Object.keys(competence).map(function (key, i) {
        return(
          <Cards key={i} img={competence[key].image} title={competence[key].title} description={competence[key].description} />
        )
      })}
        	</div>
      </div>
    </section>
		</>
		)
}

export default Competences;