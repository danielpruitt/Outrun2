import React from "react";
import MyParticles from "../Particles/Particles";

const Section = ({ children }) => (
    <div>
        <MyParticles />
        <div className="section">
            {children}

            <MyParticles />
        </div>

    </div>

);

export default Section;