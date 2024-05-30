import { useRoutes } from "react-router-dom";

import {Home, NotFound} from "../components/index";

function Routes(){
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '*',
            element: <NotFound />
        }
    ])

    return routes
}

export default Routes