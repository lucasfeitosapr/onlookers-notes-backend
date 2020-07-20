import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './api/api-service';
import UsersPostsControl from './components/users-posts-control';

export default function App() {
  const [allUsersPosts, setAllUsersPosts] = useState({});

  useEffect(() => {
    const getAllUsersPosts = async() => {
      const allUsersPostsResponse = await api.getAllUsersPosts();
      setAllUsersPosts(allUsersPostsResponse);
    }
    getAllUsersPosts();
    
  }, []);
  // const resultApi = async () => {
  //   const result = await api.getAllUsersPosts();

  //   console.log(result);
  // }

  // resultApi();
  
  const handleFindAll = () => {
    console.log('handle find all.')
  }

  return (
    <div className="App">
      <h1>Onlooker's Notes</h1>
      <input></input>
      <div>
        <button>Find All</button>
        <button>Find by user</button>
        <UsersPostsControl allUsersPosts={allUsersPosts} onFindAll={handleFindAll}/>
      </div>
    </div>
  );
}
