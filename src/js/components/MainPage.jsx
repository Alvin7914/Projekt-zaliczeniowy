import React, {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../api/constants.jsx";

const MainPage = () => {
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        const date = new Date;
        const todayName = getDayNameEng(date); //przypisanie dzisiejszego dnia tygodnia

        const classesList = JSON.parse(localStorage.getItem('classesList')) || [];
        const todaySchedule = classesList.filter(classItem => classItem.day === todayName) // wyfiltrowanie uczniow ktorzy maja dzis zajecia

        setSchedule(todaySchedule)
    }, []);

//funkcja zwracająca polską nazwę dnia tygodnia w <th>, przyjmująca datę
    const getDayNamePl = (date) => {
        const daysOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
        return <th>{daysOfWeek[date.getDay()]}</th>;
    }

    // funkcja zwracająca angielską nazwę dnia tyogodnia (dla spojnosci z localStorage), przyjmuje datę
    const getDayNameEng = (date) => {
        const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        return daysOfWeek[date.getDay()];
    }

    const timeSlots = ['16.00-17.00', '17.00-18.00', '18.00-19.00', '19.00-20.00'];

    // usuniecie duplikatów z listy
    const uniqueStudents = Array.from(new Set(schedule.map(classItem => classItem.student.id))).map(studentId => {
        return schedule.find(classItem => classItem.student.id === studentId);
    });

    return (
        <section className='main-page__box'>
            <table>
                <caption>
                    Dzisiejszy plan zajęć
                </caption>
                <thead>
                <tr>
                    <th>Godziny</th>
                    {getDayNamePl(new Date())}
                </tr>
                </thead>
                <tbody>
                {timeSlots.map(time => {
                    const classAtThisTime = schedule.find(classItem => classItem.time === time);
                    return (
                        <tr key={time}>
                            <td>{time.replace('-', ' - ')}</td>
                            <td>
                                {classAtThisTime ? `${classAtThisTime.student.name}, ${classAtThisTime.student.address}` : ''}
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <div className='main-page__students'>
                <h2>Uczniowie na dziś</h2>
                <ul>
                    {uniqueStudents.map(classItem => <li key={classItem.student.id}>
                        <div className='main-page__student'>
                            <p>{classItem.student.name}</p>
                            <p>{classItem.student.surname}</p>
                            <p>{classItem.student.address}</p>
                            <p>tel. {classItem.student.phone}</p>
                        </div>
                    </li>)}
                </ul>
            </div>
            <aside className='main-page__jokes'>

            </aside>
        </section>
    )
};

export default MainPage;