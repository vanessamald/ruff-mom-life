import React from 'react';
import aboutImage from '../../assets/images/about.webp';

function About() {
    return (
        <div
            style= {{
                fontSize: '16px',
                borderBottom: '1px solid black',
            }}>
            <h3
            style={{
                fontFamily: 'Creamer',
                position: 'absolute',
                color: 'white',
                fontSize: '48px',
                background: 'transparent',
                transform: 'rotate(-90deg)',
                marginLeft: '275px',
                marginTop: '100px',
                overflow: 'hidden',
                
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
            
        <p style={{
            padding: '30px',
            fontSize: '20px',
            textAlign: 'right',
            color: 'white',
            position: 'relative',
            background: 'transparent',
            marginTop: '0px',
            marginBottom: '0px',
        }}>We are a family owned business that loves dogs!

            Hi! Glad you’re here! This shop started from the pure joy of wanting to create 
            clothing and accessories for all parents. I have two fur babies, Astro and Rocket, 
            both named after Houston teams of course. Many come to having a desire to becoming a parent. 
            I believe that whether you have little ones or have a fur baby, you are a parent who loves, 
            protects and cares for them. Hope you find something you like for you and your loved one and wear pridefully.
        </p>
        </div>
    );
    }

export default About;