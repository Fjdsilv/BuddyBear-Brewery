import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral">
      <div className="sm:container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link to="/"><h1 className="text-3xl text-neutral-content">🐻BuddyBear Brewery🍺</h1></Link>
          <div className="flex items-center gap-3">
            <Link to="/newBrewery" className="btn btn-accent">Add Brewery</Link>
            <Link to="/about" className="btn btn-secondary">About</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header