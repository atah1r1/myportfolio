import React from 'react';
import axios from 'axios';

const Dashboard = () => {
    const logoutFunc = () => {
        axios({
            url: '/api/logout/',
            method: "post",
          }).then(
            response => {
                if (response.status === 200){
                    window.location.href = '/login/';
                }
            })
    }
    return (
        <button onClick={logoutFunc}>Logout</button>
    )
}

export default Dashboard;