import {createBrowserRouter} from "react-router-dom"
import App from "./pages/home/Home"
import JobDetail from "./pages/jobdetail/JobDetail"
import NotFound from "./pages/notFound/NotFound"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "jobs/:jobId",
        element: <JobDetail />,
    },
    {
        path: "*",
        element: <NotFound/>
    }
])