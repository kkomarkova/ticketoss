import React from 'react';

//Function to check if the user is logged by an access Tokeen 
//stored by LocalStorage. 

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
    } else {
        return {};
    }
}
export default authHeader;