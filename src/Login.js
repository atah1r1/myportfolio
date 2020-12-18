import React, { useState, useEffect } from 'react';
import axios from 'axios';

var bodyFormData = new FormData();

function Login () {
  const [user, setUser] = useState({})
  const [errormessage, setErrorMessage] = useState("");
  useEffect(() => {
    axios("/api/login/").then(
        response => {
            if (response.data.authenticate){
                window.location.href = '/admin';
            }
        }
    )
  }, [])
  const handleClick = (e) => {
    e.preventDefault();
    bodyFormData.set("username", user.username);
    bodyFormData.set("password", user.password);
    axios({
      url: '/api/login/',
      method: "post",
      data: bodyFormData
    }
      ).then(response => {
        if (response.status === 200){
            window.location.href = '/admin';
        }
      }).catch(error => {
        if (error.response.status === 401) {
          setErrorMessage(error.response.data.message)
         }
    });
  }
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value
    })
  }

    return (
        <>
        <div className="flex items-center justify-center mt-96">
        <div className="w-full max-w-md">
          <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            <div
              className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
              Dashboard Login
            </div>
              <h1 className="text-red-700">{errormessage}</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                onClick={() => setErrorMessage("")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                autoFocus
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                required
                autoComplete="current-password"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" onClick={handleClick}>Sign In</button>
            </div>
          </form>
          <p className="text-center text-black text-xs">
            &copy;2020 atah1r1. All rights reserved.
          </p>
        </div>
      </div>
        </>
    )
}

export default Login;