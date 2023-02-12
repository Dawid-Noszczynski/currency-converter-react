import "./style.css"

const Footer = ({ title }) => (
    <footer>
        <h2 className="mainFooter">{title.toUpperCase()}</h2>
    </footer>
);

export default Footer; 