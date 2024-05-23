import React, {useEffect, useState} from "react";

const Schedules = () => {
    const [classesTable, setClassesTable] = useState([]);
    const [studentsList, setStudentsList] = useState([]);

    useEffect(() => {
        const savedClasses = JSON.parse(localStorage.getItem('classesList')) || [];
        setClassesTable(savedClasses);

        const savedStudents = JSON.parse(localStorage.getItem('studentsList')) || [];
        setStudentsList(savedStudents);
    }, []);

    const switchHidden = (e) => {
        e.preventDefault();

        const button = document.querySelector('.new-entry-btn');
        const form = document.querySelector('.schedules__form');

        button.classList.toggle('hidden');
        form.classList.toggle('hidden');
    };

    const renderTableCell = (day, time) => {
        const classForCell = classesTable.find(classEntry => classEntry.day === day && classEntry.time === time);
        return classForCell ? `${classForCell.student.name}, ${classForCell.student.address}` : '';
    };

    const handleCellClick = (day, time) => {
        setClassesTable(state => {
            const updatedClasses = state.filter(classEntry => !(classEntry.day === day && classEntry.time === time));
            localStorage.setItem('classesList', JSON.stringify(updatedClasses));
            return updatedClasses;
        });
    };

    const cancelNewEntry = (e) => {
        const button = document.querySelector('.new-entry-btn');
        const form = document.querySelector('.schedules__form');

        //chowanie okna dodawania wpisu
        button.classList.toggle('hidden');
        form.classList.toggle('hidden');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectStudentId = document.querySelector('#students').value;
        const selectDay = document.querySelector('#day').value;
        const selectTime = document.querySelector('#time').value;

        const selectedStudent = studentsList.find(student => student.id === parseInt(selectStudentId));

        if (!selectedStudent) {
            alert('Nie znaleziono ucznia');
            return;
        }

        switchHidden(e);

        const newClass = {
            id: (localStorage.getItem('classesList') === null || JSON.parse(localStorage.getItem('classesList')).length === 0)
                ? 1
                : JSON.parse(localStorage.getItem('classesList'))[JSON.parse(localStorage.getItem('classesList')).length - 1].id + 1,
            student: selectedStudent,
            day: selectDay,
            time: selectTime,
        }


        setClassesTable(state => [...state, newClass])
        localStorage.setItem('classesList', JSON.stringify([...classesTable, newClass]))
    };

    return (
        <section className='schedules__box'>
            <table className='schedules__table'>
                <caption>
                    Tygodniowy plan zajęć
                </caption>
                <thead>
                <tr>
                    <th>Godziny</th>
                    <th>Poniedziałek</th>
                    <th>Wtorek</th>
                    <th>Środa</th>
                    <th>Czwartek</th>
                    <th>Piątek</th>
                    <th>Sobota</th>
                    <th>Niedziela</th>
                </tr>
                </thead>
                <tbody>
                {['16.00-17.00', '17.00-18.00', '18.00-19.00', '19.00-20.00'].map(time => (
                    <tr key={time}>
                        <td>{time.replace('-', ' - ')}</td>
                        {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => (
                            <td key={day} onClick={() => handleCellClick(day, time)}>{renderTableCell(day, time)}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <button className='new-entry-btn' onClick={switchHidden}>Dodaj zajęcia</button>
            <form className='schedules__form hidden' onSubmit={handleSubmit}>
                <div className='schedules__form-column'>
                    <label htmlFor="students">Wybierz ucznia</label>
                    <select name="students" id="students">
                        {studentsList.map((student) => (
                            <option key={student.id} value={student.id}>
                                {student.name} {student.surname}, {student.address}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='schedules__form-column'>
                    <label htmlFor="day">Wybierz dzień</label>
                    <select name="day" id="day">
                        <option value="monday">Poniedziałek</option>
                        <option value="tuesday">Wtorek</option>
                        <option value="wednesday">Środa</option>
                        <option value="thursday">Czwartek</option>
                        <option value="friday">Piątek</option>
                        <option value="saturday">Sobota</option>
                        <option value="sunday">Niedziela</option>
                    </select>
                </div>
                <div className='schedules__form-column'>
                    <label htmlFor="time">Wybierz godzinę</label>
                    <select name="time" id="time">
                        <option value="16.00-17.00">16.00 - 17.00</option>
                        <option value="17.00-18.00">17.00 - 18.00</option>
                        <option value="18.00-19.00">18.00 - 19.00</option>
                        <option value="19.00-20.00">19.00 - 20.00</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Zapisz</button>
                    <span className='cancel-1' onClick={cancelNewEntry}></span>
                    <span className='cancel-2' onClick={cancelNewEntry}></span>
                </div>
            </form>
        </section>
    );
};

export default Schedules;