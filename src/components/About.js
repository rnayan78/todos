import React from 'react';


export const About = () => {
    let aboutStyle ={
        minHeight:"70vh",
        margin: "40px auto"
    }
    return (
        <div style= {aboutStyle}>
            
            <p>This is a todo list built as side fun project, helped me brushup my knowledge of react router :)</p>
        </div>
    )
}

export default About;
