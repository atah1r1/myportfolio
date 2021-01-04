import React, { useState, useEffect } from 'react';
import axios from 'axios';
/* 
  "full_name": null,
    "avatar": null,
    "mini_about": null,
    "about": null,
    "born_date": null,
    "address": null,
    "phone": null,
    "email": null,
    "github": null,
    "linkedin": null,
    "facebook": null,
    "twitter": null,
    "instagram": null
*/
var form_data = new FormData();

const Dashboard = () => {
    const [connected, setConnected] = useState(true /*null*/);
    const [profile, setProfile] = useState({});
    const [avatarstate, setAvatarState] = useState(false);
    const logoutFunc = () => {
      axios({
        url: '/api/logout/',
        method: "post",
      }).then(
        response => {
          if (response.status === 200){
            window.location.href = '/login';
          }
        })
      }
      useEffect(() => {
        axios({
          url: '/api/login/',
          method: "get",
        }).then(
          response => setConnected(response.data.authenticate)
          )
        }, [])
        useEffect(() => {
          axios({
            url: '/api/profile',
            method: 'get',
          }).then(
            response => setProfile(response.data),
            )
          }, [])
      const HandleSubmit = (e) => {
          e.preventDefault();
          for ( var key in profile ) {
            if (key === 'avatar' && !avatarstate){
              continue;
            }
            else {
              form_data.append(key, profile[key])
            }
            }
          axios({
            url: '/api/profile/',
            method: 'put',
            data: form_data
          }).then(response => { 
            console.log(response)
          })
          .catch(error => {
              console.log(error.response)
          });
        }
    return (
        <>
        { true ? <main className="flex w-full h-screen">
<aside className="w-80 h-screen bg-gray shadow-md hidden sm:block">
  <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
      <div className="text-sm">
        <div className="bg-gray-900 text-white p-5 rounded">Dashboard</div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Profile</div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Projects</div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Competences</div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Experiences</div>
        <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Educations</div>
        <div className="bg-gray-900 flex justify-between items-center text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
          <span>Messages</span>
          <span className="w-4 h-4 bg-blue-600 rounded-full text-white text-center font-normal text-xs">5</span>
        </div>
      </div>

      <div className="flex p-3 text-white bg-red-500 rounded cursor-pointer text-center text-sm" onClick={logoutFunc}>
        <button className="rounded inline-flex items-center" >
          <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
          <span className="font-semibold">Logout</span>
        </button>
      </div>
  </div>
</aside>
<div className="leading-loose flex-auto">
  <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl" encType="multipart/form-data">
    <p className="text-gray-800 font-medium">Profile information</p>
    {
      Object.keys(profile).map(function(key) {
        if (key === 'id') return;
        if (key === 'avatar') return (
          <div className="" key={key}>
          <label className="block text-sm text-black m-2">{key}</label>
            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="file" onChange={(e) => {setProfile({ ...profile,[key]: e.target.files[0]}); setAvatarState(true)}}></input>
            <img src={profile[key]}></img>
          </div>
        )
        return (
          <div className="" key={key}>
          <label className="block text-sm text-black m-2">{key}</label>
            <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" onChange={(e) => {setProfile({ ...profile,[key]: e.target.value})}} value={profile[key]}></input>
          </div>
        )
      })
    }
    <div className="mt-4">
      <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" onClick={HandleSubmit}>Submit</button>
    </div>
  </form>
</div>
</main> : <div>You are not allowed to see this page!</div>
        }
    
</>
    )
}

export default Dashboard;