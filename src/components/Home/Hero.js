import React from "react";
import "./Hero.css";
import Img from '../../assets/6933628.jpg';

export default function Hero() {
    return (
        <div className="hero container-fluid">
            <div className="opacity row">
                <div className="col-md-6 text">
                    <h1>Best Design of Furnitur</h1>
                    <p> It is a long established fact that a reader will bedistracted by the readable content of</p>
                    <div className="Hero-btn">
                      <button  className="btn1"> Contant Us</button>
                      <button  className="btn2"> Learn more</button>
                    </div>
                </div>
                <div className="col-md-6 img"></div>
            </div>
        </div>
    );
}
