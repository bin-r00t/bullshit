function SearchBar(props) {
  return (
    <div className={props.className}>
      <input
        className={`p-1 px-5 rounded-full border w-64 outline-none focus:border-gray-400 text-gray-400 transition`}
        type="text"
        placeholder="Search"
      ></input>
    </div>
  );
}

export default SearchBar;
