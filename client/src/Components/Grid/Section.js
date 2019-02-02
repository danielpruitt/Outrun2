import React from "react";
import MyParticles from "../Particles/Particles";

const Section = ({ children }) => (
    <div>
        <MyParticles />
        <div className="section">
            {children}


        </div>

    </div>

);

export default Section;