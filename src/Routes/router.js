import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/home';
import RomainEasy from '../pages/Romain/romainEasy';
import App from '../App';
import Flo from '../pages/Flo/flo';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            }, 
            {
                path: "/RomainEasy",
                element: <RomainEasy />
            },
            {
                path: "/FLo",
                element: <Flo />
            }
        ]
    }
])