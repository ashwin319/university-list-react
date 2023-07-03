import './Header.css'

function Header() {

    console.log(process.env)
    const logoUrl = 'https://i.etsystatic.com/35910008/r/il/0d5951/4610620328/il_1588xN.4610620328_euug.jpg'

    return (
        <header className="uniHeader">
            <span><img className="headerLogo" src={logoUrl} alt="logo" /></span>
            <span>{process.env.REACT_APP_TITLE}</span>
        </header>
    )
}

export default Header;