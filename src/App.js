import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router';
import Posts from './components/Posts';
import AboutMe from './components/AboutMe';
import User from './components/User';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </div>
    );
}

export default App;