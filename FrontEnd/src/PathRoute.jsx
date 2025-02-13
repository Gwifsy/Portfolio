import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './Pages/Project';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProjectDetail from './Pages/ProjectDetail';
function PathRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/project' element={<Project />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/ProjectDetail/:id" element={<ProjectDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PathRoute