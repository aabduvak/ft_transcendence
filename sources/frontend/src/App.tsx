import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import { Footer, Navbar } from './components';
import { About, Home, Forum, Team, Play, History, LeaderBoard, Users } from './pages';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/forum' element={<Forum />} />
                <Route path='/about' element={<About />} />
                <Route path='/team' element={<Team />} />
                <Route path='/play' element={<Play />}/>
                <Route path='/history' element={<History />}/>
                <Route path='/leader-board' element={<LeaderBoard />}/>
                <Route path='/users' element={<Users />}/>
            </Routes>
            <Footer />
        </div >
    );
}

export default App;