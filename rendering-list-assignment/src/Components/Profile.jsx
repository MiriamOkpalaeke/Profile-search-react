import React from 'react'
import { useState } from 'react';
import { userDatas } from './Data'

const Profile = () => {
 
  const [searchProfile, setSearchKeyword] = useState("");

  //change state to the value entered in the textbox
  const handleChangeKeyword = (event) => {
    setSearchKeyword(event.target.value);
    }

    //Filter user profile to match search keyword in textbox
   const filteredUsers = userDatas.filter((user) => 
    user.firstName.toLowerCase().includes(searchProfile.toLowerCase())
    );


  //loop through the filtered profiles and return matched profiles
  const displayFilteredUsers = filteredUsers.map((user) => { return (
      <div>
      <li className="card-wrapper">
    <div className="image">
    <img src={user.picture} />
    </div>
  
  <div className="text">
  <p>{user.id}</p>
  <p className="details">
  <span>{user.title}. </span>
  <span>{user.firstName} </span>
  <span>{user.lastName}</span>
  </p>
  </div>         
  </li>
  </div>
     )
    }
  )


  return (
    <div>
      <input type="text"
      className="search-bar"
      id="textbox"
      placeholder='Search by name'
      value={searchProfile}
      onChange={handleChangeKeyword}
      />
      <div className="flexible-container">
      {displayFilteredUsers}
      </div>
      
      
    </div>
  )
}

export default Profile