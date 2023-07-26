import userSearchAPI from '../api/userSearch'
import { SearchBar } from '../components/view/SearchBar/SearchBar'

function handleSearchSubmit(searchText) {
  if (searchText.length >= 3) {
    userSearchAPI.search(searchText).then(res => console.log(res))
  }
}

export default function SearchController() {
  return <SearchBar handleSearchSubmit={handleSearchSubmit} />
}
