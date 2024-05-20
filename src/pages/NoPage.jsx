import { Link } from "react-router-dom"

const NoPage = () => {
  return (
    <section>
      <div className="sm:container mx-auto px-4 mt-40">
      <h2 className="text-6xl">Error 404😰</h2>
      <h3 className="mt-4 text-3xl font-light">Ohh!</h3>
        <p className='mb-4 text-xl font-light pt-4'>
        We can't seem to find page you are looking for.
        </p>
        <Link to="/" className="btn btn-neutral" >Back Home</Link>
      </div>
    </section>
  )
}
export default NoPage
