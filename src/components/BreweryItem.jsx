import { useGlobalContext } from "../context/Context"

const BreweryItem = ({ id, name, brewery_type, state_province, address_1, phone }) => {
  const { deleteItem } = useGlobalContext()
  return (
    <article className="mx-auto">
      <div className="card w-72 bg-base-200 shadow-xl h-80">
        <div className="card-body">
          <h2 className="card-title text-lg text-primary font-bold">{name}</h2>
          <p><span className="font-bold">Type:</span> {brewery_type}</p>
          <p><span className="font-bold">State:</span> {state_province}</p>
          <p><span className="font-bold">Address:</span> {address_1}</p>
          <p><span className="font-bold">Phone:</span> {phone}</p>
          <div className="card-actions justify-center pt-2">
            <button 
              className="btn btn-error"
              onClick={() => deleteItem(id)}
              >Delete</button>
          </div>
        </div>
      </div>
    </article>
  )
}
export default BreweryItem