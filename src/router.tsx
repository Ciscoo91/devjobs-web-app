import {createBrowserRouter} from "react-router-dom"
import App from "./pages/Home"
import JobDetail from "./pages/JobDetail"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/:jobId",
        element: <JobDetail />
    }
])