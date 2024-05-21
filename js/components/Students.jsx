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
});  // pusty obiekt z danymi nowego ucznia

const studentsTable = (localStorage.getItem('studentsList') === null) ? [] : JSON.parse(localStorage.getItem('studentsList')); // ustawienie tablicy wykorzystaywanej w local storage na pustą lub, w przypadku gdy zmienna 'studentsList' już istniała w localStorage, na tą z localStorage

    const switchHidden = (e) => {
        e.preventDefault();

        const button = document.querySelector('.new-student-btn');
        const form = document.querySelector('.students__form');

        button.classList.toggle('hidden');
        form.classList.toggle('hidden');
    }; // handler do ukrywania przycisku dodawania studenta i pokazywania okna z formularzem

    const handleSubmit = (e) => {
        switchHidden(e);

        const updatedStudent = {
            id: (localStorage.getItem('studentsList') === null || JSON.parse(localStorage.getItem('studentsList')).length === 0)
            ? 1
            : JSON.parse(localStorage.getItem('studentsList'))[JSON.parse(localStorage.getItem('studentsList')).length - 1].id + 1,
            name: `${e.target.children[0].value}`,
            surname: `${e.target.children[1].value}`,
            address: `${e.target.children[2].value}`,
            phone: parseInt(e.target.children[3].value),
        }; // sczytanie danych z odpowiednich pól formularza i przypisanie ich do kluczy w obiekcie ucznia

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
                        : JSON.parse(localStorage.getItem('studentsList')).map(item => <Student key={item.id} item={item}/>)}
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