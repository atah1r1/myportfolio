import React from 'react';
import {PathProject} from './paths_svg/paths';
import ReactHtmlParser from 'react-html-parser';

function ProjectCard({title, description, img, tools, github}) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
	return (
		<>
			       
          <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col max-w-sm mx-auto">
  <div className="bg-gray-300 h-2/6 w-full rounded-lg shadow-md bg-cover bg-center"><img alt="images" className="h-w_full w-full justify-center" src={"/media/" + img}></img></div>

            <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              
              <div className="header-content inline-flex">
                <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                  <div className="h-2 w-2 rounded-full m-1 bg-blue-500 " ></div>
                </div>
                <div className="category-title flex-3 text-sm"> {tools}</div>
              </div>
              <div className="title-post font-bold">{title}</div>

              <div className="summary-post text-base text-justify">{ReactHtmlParser(description.slice(0, 150)+ "...")}
  <button onClick={() => openInNewTab(github)} className=" text-black-500 mt-4 block rounded p-2 text-sm "><svg className="fill-current w-10 h-10 mr-2" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><PathProject /></svg></button>
              </div>
             
            </div>
          </div>
		</>
	);
}

function Projects({project}) {
	return (
		<>
				<section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" id="projects">
		Projects
        </h1>
        <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
		  <section className="blog text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
	  		<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
			{Object.keys(project).map(function (key, i) {
        return (
          <ProjectCard key={i} title={project[key].title} description={project[key].description} img={project[key].image} tools={project[key].tools} github={project[key].github}/>
        )
      })}
		</div>
      </div>
    </section>
        </div>
      </div>
    </section>
		</>
	);
}


export default Projects;