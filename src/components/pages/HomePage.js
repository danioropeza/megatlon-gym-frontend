import React from 'react'; 

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import powerlifting from "../../images/powerlifting.jpg";
import trx from "../../images/trx.jpg";
import kranking from "../../images/kranking.jpg";
import zumba from "../../images/zumba.jpg";
import core360 from "../../images/core360.jpg";
import spinning from "../../images/spinning.jpg";
import bodycombat from "../../images/bodycombat.jpg";
import strongzumba from "../../images/strongzumba.jpg";
import powerjump from "../../images/powerjump.jpg";
import cardio from "../../images/cardio.jpg";
import bodyattack from "../../images/bodyattack.jpg";
import machines from "../../images/kranking.jpg";



class  HomePage  extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <div>
                        <img src={powerlifting} alt=""/>
                        <p className="legend">Power Lifting</p>
                    </div>
                    <div>
                        <img src={trx} alt=""/>
                        <p className="legend">TRX</p>
                    </div>
                    <div>
                        <img src={kranking} alt=""/>
                        <p className="legend">Kranking</p>
                    </div>
                    <div>
                        <img src={zumba} alt=""/>
                        <p className="legend">Zumba</p>
                    </div>
                    <div>
                        <img src={core360} alt=""/>
                        <p className="legend">Core 360</p>
                    </div>
                    <div>
                        <img src={spinning} alt=""/>
                        <p className="legend">Spinning</p>
                    </div>
                    <div>
                        <img src={bodycombat} alt=""/>
                        <p className="legend">Body Combat</p>
                    </div>
                    <div>
                        <img src={strongzumba} alt=""/>
                        <p className="legend">Strong Zumba</p>
                    </div>
                    <div>
                        <img src={powerjump} alt=""/>
                        <p className="legend">Power Jump</p>
                    </div>
                    <div>
                        <img src={cardio} alt=""/>
                        <p className="legend">Cardio</p>
                    </div>
                    <div>
                        <img src={bodyattack} alt=""/>
                        <p className="legend">Body Attack</p>
                    </div>
                    <div>
                        <img src={machines} alt=""/>
                        <p className="legend">Machines</p>
                    </div>
                </Carousel>
            </div>
        )
    }

}
export  default  HomePage;
