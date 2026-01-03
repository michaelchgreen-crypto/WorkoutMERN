import {Link} from 'react-router-dom';

 function Navigation() {
    return (
    <nav className="app-navigation">
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      
    </nav>
    );

}

export default Navigation;