import "./Topbar.scss";

import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, SetMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Js</a>
                    <div className="iteamcontainer">
                        <Person className="icon" />
                        <span>+91 9894376891</span>

                    </div>
                    <div className="iteamcontainer">
                        <Mail className="icon" />
                        <span>Jeyasurya383@gmail.com</span>

                    </div>

                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => SetMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>

                </div>
            </div>

        </div>

    )
}
