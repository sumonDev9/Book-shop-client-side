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
      element: <Home></Home>
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
            path: '/admin/manageBook',
            element: <ManagBook></ManagBook>
          },
          {
            path: '/admin/addbook',
            element: <AddBook></AddBook>
          },
          {
            path: '/admin/editbook',
            element: <EditBook></EditBook>
          }
        ]
    },
    
  ]);

export default router;