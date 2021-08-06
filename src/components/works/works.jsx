import "./work.scss";
import { useState } from 'react';

import { GitHub } from "@material-ui/icons";



export default function Projects() {



    const [currentSlide, setCurrentSlide] = useState(0)



    const data = [
        {
            id: "1",
            icon: "https://i.pinimg.com/originals/e3/2a/f3/e32af3d4345547359eec343179bae6b7.png",
            title: "Admin Dashboard",
            desc:
                "https://pedantic-euclid-58e93a.netlify.app",
            img:
                "./assets/bigdash.png",





        },
        {
            id: "2",
            icon: "https://www.kindpng.com/picc/m/193-1936884_ecommerce-websites-ecommerce-icon-hd-png-download.png",
            title: "Ecommerce Page",
            desc:
                "jfioef ifhuifwo9f oiufwhfbghowf uhwdoihofbofweo9",
            img:
                "https://www.najmc.com/wp-content/uploads/2020/08/ecommerce-marketing.jpg"
        },
        {
            id: "3",
            icon: "https://cdn4.iconfinder.com/data/icons/layout-2-1/48/79-512.png",
            title: "Price Table",
            desc:
                "https://pensive-lumiere-7adc2d.netlify.app/",
            img:
                "https://colorlib.com/wp/wp-content/uploads/sites/2/free-pricing-table-plugins.jpg"

        },
        {
            id: "4",
            icon: "././assets/mobile.pn.png",
            title: "WHRA",



        }
    ]


    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    }



    return (
        <div className="works" id="projects">





            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>


                {data.map(d => (



                    <div className="container">


                        <div className="iteam">
                            <div className="left">
                                <div className="leftcontainer">
                                    <div className="imgcontainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>
                                        {d.title}

                                    </h2>
                                    <p>
                                        <GitHub />

                                        <a href={d.desc}>Link For This Project</a>
                                    </p>
                                    <span>

                                    </span>

                                </div>
                            </div>
                            <div className="right">

                                <img src={d.img} alt="" />




                            </div>


                        </div>

                    </div>
                ))}
            </div>
            <img src="assets/right-arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src="assets/right-arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
        </div>
    );
}
