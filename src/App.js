import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router';
import Posts from './pages/Posts';
import AboutMe from './pages/AboutMe';
import User from './pages/User';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </div>
    );
}

export default App;
