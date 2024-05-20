import React, {useState} from "react";
import Student from "./Student.jsx";

const Students = () => {

const [studentsList, setStudentsList] = useState([]);
const [newStudent, setNewStudent] = useState({
    id: 0,
    name: ``,
    surname: ``,
    address: ``,
    phone: 0
});

const studentsTable = (localStorage.getItem('studentsList') === null) ? [] : JSON.parse(localStorage.getItem('studentsList'));
    console.log(studentsTable)
    const switchHidden = (e) => {
        e.preventDefault();

        const button = document.querySelector('.new-student-btn');
        const form = document.querySelector('.students__form');

        button.classList.toggle('hidden');
        form.classList.toggle('hidden');
    };

    const handleSubmit = (e) => {
        switchHidden(e);

        const updatedStudent = {
            id: 0,
            name: `${e.target.children[0].value}`,
            surname: `${e.target.children[1].value}`,
            address: `${e.target.children[2].value}`,
            phone: parseInt(e.target.children[3].value),
        };

        // setStudentsList(state => [...state, newStudent])
        // setStudentsList(state => [...state, updatedStudent])
        studentsTable.push(updatedStudent);
        localStorage.setItem('studentsList', JSON.stringify(studentsTable))
        location.reload();
    };

    return (
        <div className='students'>
            <div className='students__box'>
                <h2>Lista uczniów</h2>
                <ul className='students__list'>
                    {(localStorage.getItem('studentsList') === null)
                    ? <li>Brak uczniów...</li>
                        : JSON.parse(localStorage.getItem('studentsList')).map(item => <Student item={item}/>)}
                </ul>
            </div>
            <button className='new-student-btn' onClick={switchHidden}>Nowy uczeń</button>
                <form className='students__form hidden' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Imię'/>
                    <input type="text" placeholder='Nazwisko'/>
                    <input type="text" placeholder='Adres'/>
                    <input type="tel" placeholder='Numer telefonu'/>
                    <button type='submit'>Zapisz</button>
                </form>
        </div>
    );
};
export default Students;