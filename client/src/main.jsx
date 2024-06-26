import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Homepage from './homepage/homepage.jsx';
import GamePage from './gameplay/gameplay.jsx';
import LeaderBoardPage from './leaderboard/leaderboard.jsx';
import EndPage from './endpage/endpage.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'></h1>,

    children: [
      {
        index: true,
        element: <Homepage />
      }, {
        index: true,
        path: '/play',
        element: <GamePage />
      }, 
      {
         index: true,
        path: '/leaderboard',
        element: <LeaderBoardPage />
      },
      {
        index: true,
       path: '/endpage',
       element: <EndPage />
     },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
