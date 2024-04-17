import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import Administrator from "../views/Administrator";
import UsersView from "../views/UsersView/UsersView";
import CareerView from "../views/CareerView";
import DepartmentView from "../views/DepartmentView";
import DepartmentiByIdView from "../views/DepartmentiByIdView";
import GroupView from "../views/GroupView";
import SubjectView from "../views/SubjectView";
import SemesterView from "../views/SemesterView";
import SignInView from "../views/SignInView";
import CarreerByIdView from "../views/CarreerByIdView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "signin",
        element: <SignInView />,
    },
    {
        path: "administrator",
        element: <Administrator />,
        children: [
            {
                path: "users",
                element: <UsersView />
            },
            {
                path: "career",
                element: <CareerView />
            },
            {
                path: "career/:id",
                element: <CarreerByIdView />
            },
            {
                path: "department",
                element: <DepartmentView />,
            },
            {
                path: "department/:id",
                element: <DepartmentiByIdView />
            },
            {
                path: "department/:id/:id",
                element: <CarreerByIdView />
            },
            {
                path: "group",
                element: <GroupView />
            },
            {
                path: "subject",
                element: <SubjectView />
            },
            {
                path: "semester",
                element: <SemesterView />,
            }
        ]
    }
]);


export default router;