import React from "react";

const Schedules = () => {
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
                <tr>
                    <td>16.00 - 17.00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>17.00 - 18.00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>18.00 - 19.00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>19.00 - 20.00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Schedules;