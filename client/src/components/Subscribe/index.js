import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

class Subscribe extends React.Component {
        
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        //this.handleChange = this.handleChange.bind(this);
       //this.handleSubmit = this.handleSubmit.bind(this);
      }

        handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        
        if (this.state.email === '') {
            alert('Please enter an email');
        }
        if (this.state.email) {
        fetch(`/api/subscribe?email=${this.state.email}`)
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }
    };

        handleChange = (e) => {
        this.setState({ email: e.target.value.trim() });
        console.log(this.state.email);
    };

    render() {
        //const [email, setEmail] = useState('');
        const { placeholder, buttonText } = this.props;
        return (
        <div className="subscribe"
        style={{
            //fontFamily: 'Creamer',
            fontSize: '24px',
            textAlign: 'left',
            color: 'white',
        }}
        >
        <p>Subscribe to our newsletter</p>
        <form>
            <input type="email" placeholder={placeholder} value={this.state.email} onChange={this.handleChange} 
            style={{
                width: '100%',
                borderRadius: '5px',
                border: '1px solid white',
                padding: '10px',
                marginBottom: '10px',
                color: 'white',
            }}
            />
            <Button 
            style={{
                width: '100%'
            }}
            variant="outline-dark" type="submit" onSubmit={this.handleSubmit}>Subscribe</Button>
            
        </form>
        </div>
    )}
};
    
export default Subscribe;