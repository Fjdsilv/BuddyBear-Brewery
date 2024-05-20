import { Link } from "react-router-dom"

const About = () => {
  return (
    <section>
      <div className="sm:container mx-auto px-4 mt-40">
      <h2 className="text-6xl">BuddyBear Brewery🤡</h2>
        <p className='mb-4 text-xl font-light pt-5'>
        A React app to search and Add Breweries. This is a dummy project. Thank you.
        </p>
        <Link to="/" className="btn btn-neutral" >Back Home</Link>
      </div>
    </section>
  )
}
export default About