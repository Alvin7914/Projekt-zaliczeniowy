import React from "react";

const NewFileValidationErrors = ({fileErrorsArray}) => {
    return (
        <div className='errors-box'>
            {fileErrorsArray.map((error, index) => <p
                className='error-message'
                key={index}
                style={{color: "red", maxWidth: '200px', marginBottom: '10px'}}>{error}</p>)}
        </div>
    );
};

export default NewFileValidationErrors;