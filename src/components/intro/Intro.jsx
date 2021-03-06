import "./intro.scss";
import { ArrowDownward } from "@material-ui/icons";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {

        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,

            strings: ["Problem Solver", "Coder", "Software Engineer", "Web Developer", "Going to be a Full Stack Developer"]

        })


    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgcontainer">
                    <img src="assets/surya.png.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Jeya Surya</h1>
                    <h3>And I'm <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#aboutme">
                    <ArrowDownward />

                </a>
            </div>


        </div>
    )
}

