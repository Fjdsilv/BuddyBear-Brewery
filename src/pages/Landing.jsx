import { useState } from "react"
import BreweryList from "../components/BreweryList"
import SearchForm from "../components/SearchForm"

const Landing = () => {
 const [query, setQuery] = useState("");
  return (
    <section>
      <div className="sm:container mx-auto px-4 mt-10">
        <div>
        {/* search form */}
        <SearchForm
          query={query}
          setQuery={setQuery}
        />
        </div>
        <div>
        <BreweryList 
          query={query}
        />
        </div>
      </div>
    </section>
  )
}
export default Landing