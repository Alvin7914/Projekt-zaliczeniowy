import React from "react";

const NewStudentValidationErrors = ({errorsArray}) => {

    return (
        <div className='errors-box'>
            {errorsArray.map((error, index) => <p
                className='error-message'
                key={index}
                style={{color: "red"}}>{error}</p>)}
        </div>
    );
};

export default NewStudentValidationErrors;