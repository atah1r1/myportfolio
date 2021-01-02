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

const Dashboard = () => {
    const [connected, setConnected] = useState(true /*null*/);
    const [profile, setProfile] = useState({});
    const InputHandle = () => {
      setProfile({value: ""}) ////// Here !!!!!!
    }
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
    return (
        <>
        { true ? <main class="flex w-full h-screen">
<aside class="w-80 h-screen bg-gray shadow-md hidden sm:block">
  <div class="flex flex-col justify-between h-screen p-4 bg-gray-800">
      <div class="text-sm">
        <div class="bg-gray-900 text-white p-5 rounded">Dashboard</div>
        <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Profile</div>
        <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Projects</div>
        <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Competences</div>
        <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Experiences</div>
        <div class="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">Educations</div>
        <div class="bg-gray-900 flex justify-between items-center text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
          <span>Messages</span>
          <span class="w-4 h-4 bg-blue-600 rounded-full text-white text-center font-normal text-xs">5</span>
        </div>
      </div>

      <div class="flex p-3 text-white bg-red-500 rounded cursor-pointer text-center text-sm" onClick={logoutFunc}>
        <button class="rounded inline-flex items-center" >
          <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>
          <span class="font-semibold">Logout</span>
        </button>
      </div>
  </div>
</aside>
<div class="leading-loose flex-auto">
  <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
    <p class="text-gray-800 font-medium">Profile information</p>
    {
      Object.keys(profile).map(function(key) {
        return (
          <div class="">
          <label class="block text-sm text-black m-2">{key}</label>
            <input class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text" required="" onChange={InputHandle}></input>
          </div>
        )
      })
    }
    <div class="mt-4">
      <button class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">Submit</button>
    </div>
  </form>
</div>
</main> : <div>You are not allowed to see this page!</div>
        }
</>
    )
}

export default Dashboard;