import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Main.jsx"
import Index from "../pages/Apps/Index.jsx"
import Sistemas from "../pages/Apps/SistemasEmpresas.jsx"
import MobileApp from "../pages/Apps/WebApp.jsx"
import WebApp from "../pages/Apps/WebApp.jsx"

const routes = createBrowserRouter([
    {path: "/", element: <Layout/>, children: [
        {path: "/", element: <Index/>},
        {path: "/sistemas", element: <Sistemas/>},
        {path: "/mobileApp", element: <MobileApp/>},
        {path: "/webApp", element: <WebApp/>},

    ]},
])

export default routes