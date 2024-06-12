import css from './SearchBox.module.css';
const SearchBox = ({ search, setSearch }) => {
  return (
      <div>
          <label className={css['label']} htmlFor="search">Find contact by Name</label>
      <input className={css['input']}
        type="text"
        name="search"
        id="search"
        placeholder='search ...'
        value={search}
      onChange={e => {setSearch(e.target.value)}}/>
    </div>
  )
}

export default SearchBox