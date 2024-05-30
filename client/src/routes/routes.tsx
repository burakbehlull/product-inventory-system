import { useRoutes } from "react-router-dom";

import {Home} from "../components/index";

function Routes(){
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        }
    ])

    return routes
}

export default Routes