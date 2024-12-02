import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Order from '../pages/Order';
import Admin from '../pages/Admin';
import AddBook from '../component/AddBook';
import EditBook from '../component/EditBook';
import ManagBook from '../component/ManagBook';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/book')
    },
    {
        path: '/order',
        element: <Order></Order>
    },
    {
        path: '/admin',
        element: <Admin></Admin>,
        children: [
          {
            index: true, // Default route
            element: <ManagBook></ManagBook>,
            loader: () => fetch('http://localhost:5000/book'),
        },
          {
            path: '/admin/manageBook',
            element: <ManagBook></ManagBook>,
            loader: () => fetch('http://localhost:5000/book')

          },
          {
            path: '/admin/addbook',
            element: <AddBook></AddBook>
          },
          {
            path: '/admin/manageBook/editbook/:id',
            element: <EditBook></EditBook>,
            loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
          }
        ]
      
    },
    
    
  ]);

export default router;