import React from 'react';

//Function to check if the user is logged by an access Tokeen 
//stored in by LocalStorage. 

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}
export default authHeader;