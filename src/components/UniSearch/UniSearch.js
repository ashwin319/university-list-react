import './UniSearch.css'
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function UniSearch({ search, updateSearch }) {
    const {t, i18n} = useTranslation();

    const onSearchChange = (event) => {
        updateSearch(event.target.value)
    }

    useEffect(() => {
        i18n.changeLanguage('en')
    }, [])

    const changeLanguage = (evt) => {
        const language = evt.target.value;
        i18n.changeLanguage(language);
    }

    return (
        <div className="uni-search">
            <select onChange={changeLanguage}>
                <option value="en">English</option>
                <option value="es">Espanol</option>
            </select>

            {t('uniSearch.search.label')}: 
            <input 
                onChange={onSearchChange}
                value={search}
                placeholder={t('uniSearch.search.placeholder')}
            />
        </div>
    )
}

export default UniSearch