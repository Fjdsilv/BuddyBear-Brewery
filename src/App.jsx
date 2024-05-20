import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {  
  HomeLayout,
  Landing,
  NewBrewery,
  About,
  NoPage,

} from "./pages";

const App = () => { 
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
          // errorElement: <NoPage />,
        },
        {
          path: '/about',
          element: <About />,
          // errorElement: <NoPage />,
        },
        {
          path: '/newBrewery',
          element: <NewBrewery />,
          // errorElement: <NoPage />,
        },
        {
          path: '*',
          element: <NoPage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}
export default App
