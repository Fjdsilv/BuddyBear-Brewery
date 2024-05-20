const SearchForm = ({ query, setQuery }) => {
  return (
    <section>
      <div className="sm:container mx-auto px-4 mt-10 text-center py-10">
        <div>
            <h2 className="py-5 mb-3 text-4xl text-center font-bold">Search a Brewing</h2>
            <input 
              className="input input-bordered w-full max-w-lg input-primary" 
              placeholder="Search..." 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
        </div>
      </div>
    </section>
  )
}
export default SearchForm