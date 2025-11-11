import { Link } from 'react-router-dom';
export default function Header(){
    return <header>
    <h1>Aidan Perkins' Amazing Penguin || ITIS 3135</h1>
    <nav className="content">
    <Link to="/home">Home</Link>
    ||
    <Link to="/Introduction">Introduction</Link>
    ||
    <Link to="/contract">Contract</Link>
    </nav>
    </header>;
}