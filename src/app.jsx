import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./mainlayout/MainLayout.jsx";
import Schedules from "./components/Schedules.jsx";
import Students from "./components/Students.jsx";
import Materials from "./components/Materials.jsx";
import Curriculum from "./components/Curriculum.jsx";
import Notes from "./components/Notes.jsx";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
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