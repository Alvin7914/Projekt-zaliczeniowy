import React, {useState, useEffect} from "react";
import File from "./File.jsx";
import UsefulSite from "./UsefulSite.jsx";
import NewFileValidationErrors from "./NewFileValidationErrors.jsx";
import NewSiteValidationErrors from "./NewSiteValidationErrors.jsx";

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

        setFilesTable(state => state.filter(file => file.id !== id));
        localStorage.setItem('filesList', JSON.stringify(updatedFilesList));
    }

    const removeSite = (id) => {
        const sitesList = JSON.parse(localStorage.getItem('sitesList'));
        const updatedSitesList = sitesList.filter(site => site.id !== id)

        setSitesTable(state => state.filter(site => site.id !== id));
        localStorage.setItem('sitesList', JSON.stringify(updatedSitesList));
    }


    // TU DODAC HANDLERy DO CHOWANIA OKIENKA DODAWANIA itp.

    const switchHidden = (e) => {
        e.preventDefault();

        const btnNewFile = document.querySelector('.new-file-btn');
        const btnNewSite = document.querySelector('.new-site-btn');
        btnNewFile.classList.toggle('hidden');
        btnNewSite.classList.toggle('hidden');
    };

    const switchHiddenNewFile = (e) => {
        switchHidden(e);

        const fileForm = document.querySelector('.new-file-form');
        fileForm.classList.toggle('hidden');
    };

    const switchHiddenNewSite = (e) => {
        switchHidden(e);

        const siteForm = document.querySelector('.new-site-form');
        siteForm.classList.toggle('hidden');
    };
    const cancelNewFile = (e) => {
        switchHiddenNewFile(e)

        setFileErrorsArray([]);

        e.target.parentElement.parentElement.children[0].value = '';
        e.target.parentElement.parentElement.children[1].value = '';
    };
    const cancelNewSite = (e) => {
        switchHiddenNewSite(e);

        setSiteErrorsArray([]);

        e.target.parentElement.parentElement.children[0].value = '';
        e.target.parentElement.parentElement.children[1].value = '';
    };


    const handleSubmitNewFile = (e) => {
        e.preventDefault();
        const inputFileName = document.querySelector('#input-file-name').value;
        const inputFileURL = document.querySelector('#input-file-url').value;

        setFileErrorsArray([]);
        let errors = [];

        // niepomyślna walidacja
        if (!inputFileName || !inputFileURL) {
            const error1 = 'Wszystkie pola muszą być uzupełnione';
            setFileErrorsArray(state => [...state, error1]);
            errors.push(error1);
        }
        if (inputFileName.length < 4 || inputFileName.length > 30) {
            const error2 = 'Nazwa pliku musi składać się z co najmniej 4 i co najwyżej 30 znaków';
            setFileErrorsArray(state => [...state, error2]);
            errors.push(error2);
        }
        if (!inputFileURL.startsWith('http')) {
            const error3 = 'Adres URL pliku musi zaczynać się od "http"';
            setFileErrorsArray(state => [...state, error3]);
            errors.push(error3);
        }

        //pomyślna walidacja
        if (errors.length === 0) {
            switchHiddenNewFile(e);

            const updatedFile = {
                id: (localStorage.getItem('filesList') === null || JSON.parse(localStorage.getItem('filesList')).length === 0)
                    ? 1
                    : JSON.parse(localStorage.getItem('filesList'))[JSON.parse(localStorage.getItem('filesList')).length - 1].id + 1,
                name: `${e.target.children[0].value}`,
                link: `${e.target.children[1].value}`,
            }

            setFilesTable(state => [...state, updatedFile])
            localStorage.setItem('filesList', JSON.stringify([...filesTable, updatedFile]))

            e.target.children[0].value = '';
            e.target.children[1].value = '';
        }
    };

    const handleSubmitNewSite = (e) => {
        e.preventDefault();
        const inputSiteName = document.querySelector('#input-site-name').value;
        const inputSiteURL = document.querySelector('#input-site-url').value;

        setSiteErrorsArray([]);
        let errors = [];

        //niepomyślna walidacja
        if (!inputSiteName || !inputSiteURL) {
            const error1 = 'Wszystkie pola muszą być uzupełnione';
            setSiteErrorsArray(state => [...state, error1]);
            errors.push(error1);
        }
        if (inputSiteName.length < 4 || inputSiteName.length > 30) {
            const error2 = 'Nazwa strony musi składać się z co najmniej 4 i co najwyżej 30 znaków';
            setSiteErrorsArray(state => [...state, error2]);
            errors.push(error2);
        }
        if (!inputSiteURL.startsWith('http')) {
            const error3 = 'Adres URL strony musi zaczynać się od "http"';
            setSiteErrorsArray(state => [...state, error3]);
            errors.push(error3);
        }

        //pomyślna walidacja
        if (errors.length === 0) {
            switchHiddenNewSite(e);

            const updatedSite = {
                id: (localStorage.getItem('sitesList') === null || JSON.parse(localStorage.getItem('sitesList')).length === 0)
                    ? 1
                    : JSON.parse(localStorage.getItem('sitesList'))[JSON.parse(localStorage.getItem('sitesList')).length - 1].id + 1,
                name: `${e.target.children[0].value}`,
                link: `${e.target.children[1].value}`,
            }

            setSitesTable(state => [...state, updatedSite])
            localStorage.setItem('sitesList', JSON.stringify([...sitesTable, updatedSite]))

            e.target.children[0].value = '';
            e.target.children[1].value = '';
        }


    };


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
                        {(sitesTable.length === 0)
                            ? <li style={{textAlign: 'center'}}>Brak stron...</li>// wyrenderowanie odpowiedniego 'li' gdy lista stron jest pusta
                            : sitesTable.map(site => <UsefulSite key={site.id} site={site} removeSite={removeSite}/>) //mapowanie listy stron
                        }
                    </ul>
                </div>
            </div>
            <button className='new-file-btn' onClick={switchHiddenNewFile}>Nowy plik</button>
            <form className='new-file-form hidden' onSubmit={handleSubmitNewFile}>
                <input type="text" placeholder='Nazwa pliku' id='input-file-name'/>
                <input type="url" placeholder='Adres URL pliku' id='input-file-url'/>
                <div>
                    <button type='submit'>Zapisz</button>
                    <span className='cancel-1' onClick={cancelNewFile}></span>
                    <span className='cancel-2' onClick={cancelNewFile}></span>
                </div>
                <NewFileValidationErrors fileErrorsArray={fileErrorsArray}/>
            </form>
            <button className='new-site-btn' onClick={switchHiddenNewSite}>Nowa strona</button>
            <form className='new-site-form hidden' onSubmit={handleSubmitNewSite}>
                <input type="text" placeholder='Nazwa strony' id='input-site-name'/>
                <input type="url" placeholder='Adres URL strony' id='input-site-url'/>
                <div>
                    <button type='submit'>Zapisz</button>
                    <span className='cancel-1' onClick={cancelNewSite}></span>
                    <span className='cancel-2' onClick={cancelNewSite}></span>
                </div>
                <NewSiteValidationErrors siteErrorsArray={siteErrorsArray}/>
            </form>
        </section>
    );
};
export default Materials;