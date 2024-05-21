import React, {useState, useEffect} from "react";
import Student from "./Student.jsx";

const Students = () => {

const [studentsTable, setStudentsTable] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('studentsList') !== null) {
            setStudentsTable(JSON.parse(localStorage.getItem('studentsList')))
        }
    }, []);

    const removeStudent = (id) => {
        const listItem = document.getElementById(`student-${id}`);
        const studentsList = JSON.parse(localStorage.getItem('studentsList'));
        const updatedStudentsList = studentsList.filter(student => student.id !== id);

        setStudentsTable(state => state.filter(student => student.id !== id))
        localStorage.setItem('studentsList', JSON.stringify(updatedStudentsList));

        // listItem.remove();
    }; // handler do usuwania studenta, przekazywany w propsach do komponentu Student

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


        setStudentsTable(state => [...state, updatedStudent])
        localStorage.setItem('studentsList', JSON.stringify([...studentsTable, updatedStudent]))


        //czyszczenie formularza
        e.target.children[0].value = '';
        e.target.children[1].value = '';
        e.target.children[2].value = '';
        e.target.children[3].value = '';
    };

    return (
        <div className='students'>
            <div className='students__box'>
                <h2>Lista uczniów</h2>
                <ul className='students__list'>
                    {((studentsTable) === [] || studentsTable.length === 0)
                    ? <li style={{textAlign: 'center'}}>Brak uczniów...</li>
                        : studentsTable.map(item => <Student key={item.id} item={item} removeStudent={removeStudent}/>)}
                </ul>
            </div>
            <button className='new-student-btn' onClick={switchHidden}>Nowy uczeń</button>
                <form className='students__form hidden' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Imię' value='Adam'/>
                    <input type="text" placeholder='Nazwisko' value='Małysz'/>
                    <input type="text" placeholder='Adres' value='Wisła 123'/>
                    <input type="tel" placeholder='Numer telefonu' value='743694637'/>
                    <button type='submit'>Zapisz</button>
                </form>
        </div>
    );
};
export default Students;