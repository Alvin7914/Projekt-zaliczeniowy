import React, {useState, useEffect} from "react";
import Student from "./Student.jsx";
import NewStudentValidationErrors from "./NewStudentValidationErrors.jsx";

const Students = () => {
// stany do aktualizacji listy uczniów i errorów walidacji formularza nowego ucznia
const [studentsTable, setStudentsTable] = useState([]);
const [errorsArray, setErrorsArray] = useState([])

    //sprawdzenie czy lista studentów już istnieje
    useEffect(() => {
        if (localStorage.getItem('studentsList') !== null) {
            setStudentsTable(JSON.parse(localStorage.getItem('studentsList')))
        }
    }, []);

// funkcja sprawdzająca czy string składa się tylko z liter lun myślników
    function isAlphabetic(str) {
        return /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż-]+$/.test(str);
    }

    // funkcja sprawdzająca czy string składa się wyłącznie z cyfr
    function containsNumbers(str) {
        return /^[0-9]*$/.test(str);
    }

    // handler do usuwania ucznia, przekazywany w propsach do komponentu Student
    const removeStudent = (id) => {
        const listItem = document.getElementById(`student-${id}`);
        const studentsList = JSON.parse(localStorage.getItem('studentsList'));
        const updatedStudentsList = studentsList.filter(student => student.id !== id);

        setStudentsTable(state => state.filter(student => student.id !== id))
        localStorage.setItem('studentsList', JSON.stringify(updatedStudentsList));
    };

    // handler do ukrywania przycisku dodawania studenta i pokazywania okna z formularzem
    const switchHidden = (e) => {
        e.preventDefault();

        const button = document.querySelector('.new-student-btn');
        const form = document.querySelector('.students__form');

        button.classList.toggle('hidden');
        form.classList.toggle('hidden');
    };

    // handler do anulowania dodawania nowego ucznia
    const cancelNewStudent = (e) => {
        const button = document.querySelector('.new-student-btn');
        const form = document.querySelector('.students__form');

        //chowanie okna dodawania ucznia
        button.classList.toggle('hidden');
        form.classList.toggle('hidden');

        // czyszczenie listy errorów walidacji
        setErrorsArray([]);

        // czyszczenie inputów
        e.target.parentElement.parentElement.children[0].value = '';
        e.target.parentElement.parentElement.children[1].value = '';
        e.target.parentElement.parentElement.children[2].value = '';
        e.target.parentElement.parentElement.children[3].value = '';
    };

    // handler submitujący formularz dodawania ucznia z walidacją
    const handleSubmit = (e) => {
        e.preventDefault();
        const inputName = document.querySelector('#input-name').value;
        const inputSurname = document.querySelector('#input-surname').value;
        const inputAddress = document.querySelector('#input-address').value;
        const inputPhone = document.querySelector('#input-phone').value;

        setErrorsArray([]);
        let errors = [];

        // niepomyślna walidacja
        if (!inputName || !inputSurname || !inputAddress || !inputPhone) {
            const error1 = 'Wszystkie pola muszą być uzupełnione';
            setErrorsArray(state => [...state, error1]);
            errors.push(error1);
        }
        if (inputName.length < 4 || inputName.length > 16) {
            const error2 = 'Imię musi składać się z co najmniej 4 oraz co najwyżej 16 liter'
            setErrorsArray(state => [...state, error2])
            errors.push(error2)
        }
        if (!isAlphabetic(inputName)) {
            const error3 = "Imię nie może zawierać znaków innych niż litery lub myślnik";
            setErrorsArray(state => [...state, error3]);
            errors.push(error3);
        }
        if (!isAlphabetic(inputSurname)) {
            const error4 = "Nazwisko nie może zawierać znaków innych niż litery lub myślnik";
            setErrorsArray(state => [...state, error4]);
            errors.push(error4);
        }
        if (inputPhone.length !== 9 || !containsNumbers(inputPhone)) {
            const error5 = 'Numer telefonu musi składać się wyłącznie z 9 cyfr'
            setErrorsArray(state => [...state, error5])
            errors.push(error5)
        }

        // pomyślna walidacja
        if (errors.length === 0) {
            switchHidden(e); //ukrycie okna dodawania ucznia

            const updatedStudent = {
                id: (localStorage.getItem('studentsList') === null || JSON.parse(localStorage.getItem('studentsList')).length === 0)
                    ? 1
                    : JSON.parse(localStorage.getItem('studentsList'))[JSON.parse(localStorage.getItem('studentsList')).length - 1].id + 1,
                name: `${e.target.children[0].value}`,
                surname: `${e.target.children[1].value}`,
                address: `${e.target.children[2].value}`,
                phone: parseInt(e.target.children[3].value),
            }; // sczytanie danych z odpowiednich pól formularza i przypisanie ich do kluczy w obiekcie ucznia


            setStudentsTable(state => [...state, updatedStudent])// aktualizacja stanu i localStorage
            localStorage.setItem('studentsList', JSON.stringify([...studentsTable, updatedStudent]))


            //czyszczenie formularza
            e.target.children[0].value = '';
            e.target.children[1].value = '';
            e.target.children[2].value = '';
            e.target.children[3].value = '';
        }

    };

    return (
        <div className='students'>
            <div className='students__box'>
                <h2>Lista uczniów</h2>
                <ul className='students__list'>
                    {(studentsTable.length === 0)
                    ? <li style={{textAlign: 'center'}}>Brak uczniów...</li>// wyrenderowanie odpowiedniego 'li' gdy lista uczniów jest pusta
                        : studentsTable.map(item => <Student key={item.id} item={item} removeStudent={removeStudent}/>) //mapowanie listy uczniów
                        }
                </ul>
            </div>
            <button className='new-student-btn' onClick={switchHidden}>Nowy uczeń</button>
                <form className='students__form hidden' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Imię' id='input-name'/>
                    <input type="text" placeholder='Nazwisko' id='input-surname'/>
                    <input type="text" placeholder='Adres' id='input-address'/>
                    <input type="tel" min='0' placeholder='Numer telefonu' id='input-phone'/>
                    <div>
                        <button type='submit'>Zapisz</button>
                        <span className='cancel-1' onClick={cancelNewStudent}></span>
                        <span className='cancel-2' onClick={cancelNewStudent}></span>
                    </div>
                    <NewStudentValidationErrors errorsArray={errorsArray} />
                </form>
        </div>
    );
};
export default Students;