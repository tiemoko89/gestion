
import { useMemo } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import ListClient from './Composants/ListClient';
import Formulaire from './Composants/formulaire';


function App() {
  const routers = useMemo(() =>createBrowserRouter([
    {
      path:'/',
      element:<ListClient/>
    },
    {
      path:'/creer-client',
      element:<Formulaire />
    }

 
  ]), [])

  return (
    <div>
      <RouterProvider router = {routers}/>
    </div>
  );
}

export default App;
