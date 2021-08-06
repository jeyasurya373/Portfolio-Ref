import "./menu.scss";

export default function Menu({ menuOpen, SetMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>

            <ul>
                <li onClick={() => SetMenuOpen(false)}>
                    <a href="#intro">Home</a>

                </li>

                <li onClick={() => SetMenuOpen(false)}>
                    <a href="#aboutme">About me</a>

                </li>
                <li onClick={() => SetMenuOpen(false)}>
                    <a href="#projects">Projects</a>

                </li>
                <li onClick={() => SetMenuOpen(false)}>
                    <a href="#skills">Skills</a>

                </li>
                <li onClick={() => SetMenuOpen(false)}>
                    <a href="#contact">Contact</a>

                </li>
            </ul>

        </div>
    )
}
