import React, {useState, useEffect} from "react";
import File from "./File.jsx";
import UsefulSite from "./UsefulSite.jsx";

const Materials = () => {
    const [filesTable, setFilesTable] = useState([]);
    const [sitesTable, setSitesTable] = useState([]);
    const [fileErrorsArray, setFileErrorsArray] = useState([]);
    const [siteErrorsArray, setSiteErrorsArray] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('filesList') !== null) {
            setFilesTable(JSON.parse(localStorage.getItem('filesList')))
        }
        if (localStorage.getItem('sitesList') !== null) {
            setSitesTable(JSON.parse(localStorage.getItem('sitesList')))
        }
    }, []);

    const removeFile = (id) => {
        const filesList = JSON.parse(localStorage.getItem('filesList'));
        const updatedFilesList = filesList.filter(file => file.id !== id)

        setFilesTable(state => state.filter(file => file.is !== id));
        localStorage.setItem('filesList', JSON.stringify(updatedFilesList));
    }

    const removeSite = (id) => {
        const sitesList = JSON.parse(localStorage.getItem('sitesList'));
        const updatedSitesList = sitesList.filter(site => site.id !== id)

        setSitesTable(state => state.filter(site => site.is !== id));
        localStorage.setItem('sitesList', JSON.stringify(updatedSitesList));
    }


    // TU DODAC HANDLERy DO CHOWANIA OKIENKA DODAWANIA itp.
    const switchHiddenNewFile = () => {};

    const switchHiddenNewSite = () => {};

    const handleSubmitNewFile = () => {};

    const handleSubmitNewSite = () => {};

    const cancelNewSite = () => {};

    const cancelNewFile = () => {};

    return (
        <section className='materials'>
            <div className='materials__list'>
                <div className='materials__files'>
                    <h2>Pliki</h2>
                    <ul className='files-list'>
                        {(filesTable.length === 0)
                            ? <li style={{textAlign: 'center'}}>Brak plików...</li>// wyrenderowanie odpowiedniego 'li' gdy lista plików jest pusta
                            : filesTable.map(file => <File key={file.id} file={file} removeFile={removeFile}/>) //mapowanie listy plików
                        }
                    </ul>
                </div>
                <div className='materials__useful-sites'>
                    <h2>Przydatne strony</h2>
                    <ul className='useful-sites-list'>

                    </ul>
                </div>
            </div>
            <div className='new-file__box'>
                <button className='new-file-btn' onClick={switchHiddenNewFile}>Nowy plik</button>
                <form className='new-file-form' onSubmit={handleSubmitNewFile}>
                    <input type="text" placeholder='Nazwa' id='input-file-name'/>
                    <input type="url" placeholder='Adres URL' id='input-file-url'/>
                    <div>
                        <button type='submit'>Zapisz</button>
                        <span className='cancel-1' onClick={cancelNewFile}></span>
                        <span className='cancel-2' onClick={cancelNewFile}></span>
                    </div>
                </form>
            </div>
            <div className='new-site__box'>
                <button className='new-site-btn' onClick={switchHiddenNewSite}></button>
                <form className='new-site-form' onSubmit={handleSubmitNewSite}>
                    <input type="text" placeholder='Nazwa' id='input-site-name'/>
                    <input type="url" placeholder='Adres URL' id='input-site-url'/>
                    <div>
                        <button type='submit'>Zapisz</button>
                        <span className='cancel-1' onClick={cancelNewSite}></span>
                        <span className='cancel-2' onClick={cancelNewSite}></span>
                    </div>
                </form>
            </div>
        </section>
    );
};
export default Materials;