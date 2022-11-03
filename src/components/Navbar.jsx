import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
        <h1>LAB - WikiCountries</h1>
          <Link className="navbar-brand" path="/">
            WikiCountries
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
