import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./js/mainlayout/MainLayout.jsx";
import Schedules from "./js/components/Schedules.jsx";
import Students from "./js/components/Students.jsx";
import Materials from "./js/components/Materials.jsx";
import Curriculum from "./js/components/Curriculum.jsx";
import Notes from "./js/components/Notes.jsx";
import MainPage from "./js/components/MainPage.jsx";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route path='/' element={<MainPage />} />
                    <Route path='schedule' element={<Schedules />} />
                    <Route path='students' element={<Students />} />
                    <Route path='materials' element={<Materials />} />
                    <Route path='curriculum' element={<Curriculum />} />
                    <Route path='notes' element={<Notes />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);