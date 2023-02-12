import "./style.css"

const Header = ({title}) => (
    <header>
        <h1 className="mainHeader">{title.toUpperCase()}</h1>
    </header>
);

export default Header;