### Routes
            A Route in React is a way to define a path in a web application and connect it to a specific component that should be rendered when that path is accessed.

- it's simply the **link/path** on the browser that takes us to a certain page.

### Routing: 
      Routing in React is the process of navigating between different pages or views within a single-page application (SPA) without reloading the page.


### installation and other steps:
- run on terminal
  - npm i react-router-dom
- import
  - import { createBrowserRouter } from "react-router-dom";
- creat routers
  - const router = createBrowserRouter()
- createBrowserRouter will store an array off all routes
  - createBrowserRouter([])
- the array will consist of all routes in {}
  - [ {}, {}, {} ]
- in {} there will be two field:
  - path & element
  - { path: "/", element: <Home/> }
- import RouterProvider
  - import { RouterProvider } from "react-router-dom";
- provide the routers to the rounter provider
  -  <RouterProvider router={router} />


### path: "*"
- It will be considered for any other route/URL except for those that are already defined.


### Link adding process
- using <a href=""> </a>
  - it reloads the page, so usage is not recommended
- using <Link to=""> </Link>
  - it prevents the reloading of a page while changing the routes
  - import { Link } from "react-router-dom"
- using <NavLink> </NavLink>
  - **Recommended** to use
  - an active class it attachted with it **(benefit)**
  - it provides isActive class
  - whichever route/link we will at, the class will be active i.e isActive==true
  - import { NavLink } from "react-router-dom"


### Route Parameters or useParams() 
- const {id} = useParams();
  - "/student/:id"
  - we can get the parameter or **:id** from the URL as {id}

### useNavigate() Hook
- it takes to the path without page reloading
- const navigate = useNavigate();
  - navigate("/path");


### Nested Routing:
- written under **Children** feild
- path:"courses"
  - not "/courses"
  - **/** is not alowed
- <Outlet>
  - An <Outlet> should be used in parent route elements to render their child route elements.
  - <Outlet> will be added jus before ending the parent component/element