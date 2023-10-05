
import SearchBar from '../searchBar/SearchBar';

function Nav({onSearch}) {
  
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button onClick={() => onSearch('random')}>Aleatorio</button>
    </div>
  );
}

export default Nav;