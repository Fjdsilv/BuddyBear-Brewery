import { useEffect } from "react";
import BreweryItem from "./BreweryItem";
import { useGlobalContext } from "../context/Context";

const BreweryList = ({ query }) => {
  const { items } = useGlobalContext();
  return (
    <section>
      <div className="sm:container mx-auto px-4 mt-10">
        <h3 className="text-center text-3xl pb-10 font-bold text-primary">🍻Total Breweries: {items.length}</h3>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {
            items
              .filter((item) => item.name.toLowerCase().includes(query))
              .map(item => {
                return (
                  <BreweryItem key={item.id} {...item}/>
                );
              })
          }
        </div>
      </div>
    </section>
  )
}
export default BreweryList