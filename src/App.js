
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className='mx-auto md:max-w-[1240px]'>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
