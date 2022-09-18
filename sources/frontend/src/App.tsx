import React, { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import {
    Footer,
    Navbar
} from './components';
import { AuthContext } from './components/context/auth-context';

import {
    About,
    Home,
    Forum,
    Team,
    Play,
    History,
    LeaderBoard,
    Users,
    Http404,
    Profile
} from './pages';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <div className="App">
            <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
                <Navbar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/forum' element={<Forum />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/play' element={<Play />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/leader-board' element={<LeaderBoard />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/users/:userId' element={<Profile />} />
                    <Route path='*' element={<Http404 />} />
                </Routes>
                <Footer />
            </AuthContext.Provider>
        </div >
    );
}

export default App;