import Home from "../HomeComponent/Home"
import Faculty from "../Faculties/Faculty.jsx"
import Course from "../CourseComponent/Course"
import About from "../AboutComponent/About"
import Contact from "../ContactComponent/Contact"
import Science from "../Faculties/FacultyDetails/Science"
import Agriculture from '../Faculties/FacultyDetails/Agriculture';
import Commerce from "../Faculties/FacultyDetails/Commerce"
import Gallery from "../Gallery/Gallery"

const AllCompFileD = [
    {
        id: 1,
        path: "",
        link: <Home />
    },
    {
        id: 2,
        path: "faculty",
        link: <Faculty />
    },
    {
        id: 3,
        path: "course",
        link: <Course />
    },
    {
        id: 4,
        path: "about",
        link: <About />
    },

    {
        id: 5,
        path: "contact",
        link: <Contact />
    },
    {
        id: 6,
        path: "science",
        link: <Science />
    },
    {
        id: 7,
        path: "agriculture",
        link: <Agriculture />
    },
    {
        id: 8,
        path: "Commerce",
        link: <Commerce />
    },
    {
        id: 9,
        path: "gallery",
        link: <Gallery />
    },

]
export default AllCompFileD;