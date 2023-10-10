import { Link } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';

function Nav({onSearch}) {
  
  return (
    <div>
     
      
      <Link to="/about">
        <button>About</button>
      </Link>
      <Link to="/home">
        <button>Home</button>
      </Link>
      
      <SearchBar onSearch={onSearch} />
      <button onClick={() => onSearch('random')}>Personaje Random</button>


    </div>
  );
}

export default Nav;