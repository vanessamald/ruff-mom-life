import React from 'react';
import aboutImage from '../../assets/images/about.webp';
import aboutImage2 from '../../assets/images/about2.jpg';

function About() {
    return (
        <div
            style= {{
                overflow: 'hidden',
                paddingBottom: '100px',
                borderBottom: '1px solid black',
                borderTop: '1px solid black',
                paddingTop: '100px',
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                flexWrap: 'wrap',
                position: 'relative',
               
            }}>
            <h3 className="about-title"
            style={{
                fontFamily: 'Creamer',
                position: 'absolute',
                color: 'white',
                fontSize: '48px',
                background: 'transparent',
                transform: 'rotate(-90deg)',
                marginLeft: '350px',
                marginTop: '50px',
                overflow: 'hidden',
                zIndex: '1',
            }}
            >About</h3>
            <img src={aboutImage} alt="about"
            style={{
                borderRadius: '100px',
                maxWidth: '300px',
                border: '1px solid black',
                marginLeft: '10px',
                marginRight: '50px',
                
            }}/>
              <img src={aboutImage2} alt="about"
            style={{
                borderRadius: '100px',
                maxWidth: '250px',
                border: '1px solid black',
                marginLeft: '200px',
                position: 'absolute',
                marginTop: '175px',
            }}/>
            
        <p style={{
            padding: '30px',
            fontSize: '20px',
            textAlign: 'right',
            color: '#715a45',
            position: 'relative',
            background: 'transparent',
            marginTop: '150px',
            
        }}>
            Hi! Glad you’re here! This shop started from the pure joy of wanting to create 
            clothing and accessories for all parents. I have two fur babies, Astro and Rocket, 
            both named after Houston teams of course. Many come to having a desire to becoming a parent. 
            I believe that whether you have little ones or have a fur baby, you are a parent who loves, 
            protects and cares for them. Hope you find something you like for you and your loved one and wear pridefully.
        </p>

        <button
        style={{
            fontSize: '20px',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            backgroundColor: 'rgb(113, 90, 69)',
            border: '1px solid black',
            borderRadius: '20px',
            padding: '10px',
            marginTop: '50px',
        }}
        >Get In Touch</button>
        </div>
    );
    }

export default About;