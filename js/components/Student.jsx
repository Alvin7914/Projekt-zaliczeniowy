import React from "react";

const Student = ({item: {id, name, surname, address, phone}}) => {
    return (
        <li className='margin-bottom20'>
            <div className='student__item'>
                <p>{name}</p>
                <p>{surname}</p>
                <p>{address}</p>
                <p>tel. {phone}</p>
            </div>
        </li>
    );
};

export default Student;