import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './Pages/Project';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function PathRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/project' element={<Project />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default PathRoute