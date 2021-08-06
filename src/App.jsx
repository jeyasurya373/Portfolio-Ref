import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/testimonial";
import Topbar from "./components/topbar/Topbar";
import Contact from './components/contact/contact';
import "./app.scss";
import { useState } from 'react';
import Menu from "./components/menu/Menu";
import Projects from './components/works/works';



export default function App() {
    const [menuOpen, SetMenuOpen] = useState(false)
    return (
        <div className="app">
            <Topbar menuOpen={menuOpen} SetMenuOpen={SetMenuOpen} />
            <Menu menuOpen={menuOpen} SetMenuOpen={SetMenuOpen} />
            <div className="sections">
                <Intro />
                <Portfolio />
                <Projects />
                <Testimonial />
                <Contact />

            </div>

        </div>
    );
}





