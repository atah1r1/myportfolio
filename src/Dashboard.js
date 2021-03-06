import React, { useState } from 'react';

function Dashboard () {
  const [user, setUser] = useState({})
  const handleClick = (e) => {
    e.preventDefault();
    // API goes here
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
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
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
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 atah1r1. All rights reserved.
          </p>
        </div>
      </div>
        </>
    )
}

export default Dashboard;