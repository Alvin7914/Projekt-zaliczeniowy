import React from "react";

const NewSiteValidationErrors = ({siteErrorsArray}) => {
    return (
        <div className='errors-box'>
            {siteErrorsArray.map((error, index) => <p
                className='error-message'
                key={index}
                style={{color: "red", maxWidth: '200px', marginBottom: '10px'}}>{error}</p>)}
        </div>
    );
};

export default NewSiteValidationErrors;