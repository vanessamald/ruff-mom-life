import React from 'react';
import { useState } from 'react';
import { renderMatches } from 'react-router-dom';


class Subscribe extends React.Component {
        
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        <div className="subscribe">
        <h2>Subscribe</h2>
        <p>Subscribe to our newsletter</p>
        <form>
            <input type="email" placeholder={placeholder} value={this.state.email} onChange={this.handleChange} />
            <button type="submit" onSubmit={this.handleSubmit}>Subscribe</button>
        </form>
        </div>
    )}
};
    
export default Subscribe;