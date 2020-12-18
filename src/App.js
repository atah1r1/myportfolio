import React, { useEffect, useState } from 'react';
import Education from './Education';
import Navbar from "./Navbar";
import Body from "./Body";
import Competences from "./Competences";
import Projects from './Projects';
import Footer from './Footer';
import Copyright from './Copyright';
import { Route } from 'react-router';
import Login from './Login';
import axios from 'axios';
import Dashboard from './Dashboard';
function App() {
  const [info, setInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [competence, setCompetence] = useState([]);
  const [project, setProject] = useState([]);
  // const getData = async () => {
  //   try {
  // const userInfo = await axios.get("/api/")
      
  //       setInfo(userInfo.data.info);
  //       setEducation(userInfo.data.educations);
  //       setCompetence(userInfo.data.competences);
  //       setProject(userInfo.data.projects);
    
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };
  //   useEffect(()=>{
  //     getData()
  // }, [])
  return (
    <>
      <Route path="/login/" component={Login}/>
      <Route path="/dashboard/" component={Dashboard}/>
      <Route exact path="/" >
          <Navbar fullname ={info.full_name} />
          <Body github={info.github} twitter={info.twitter} linkedin={info.linkedin} about={info.mini_about} fullname ={info.full_name}/>
          <Education education={{...education}} />
          <Competences competence={{...competence}} />
          <Projects project={{...project}}/>
          <Footer info={info}/>
          <Copyright />
      </Route>
    </>
  )
}

export default App;
