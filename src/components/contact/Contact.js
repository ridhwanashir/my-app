import React from 'react'
import './ContactStyles.css'
import { BsEmojiSmile } from 'react-icons/bs'
import Video from '../../assets/about.mp4'

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

function Contact() {
  return (
    <div className='contact'>
        <video autoPlay loop muted id='video'>
            <source src={Video} type='video/mp4' />
        </video>
        <div className="overlay"></div>
        <div className="content">
            <div className='left'>
                <h2>
                    About Me
                </h2>
                <p>
                    I am Ridhwan Nashir, a computer science graduate that loves data, 
                    machine learning, and design. I always seek for new stuffs and experience
                    because I crave for knowledge <BsEmojiSmile></BsEmojiSmile>. This website is the showcase of my arts with
                    creativity that I poured into it {'\u2728'}.
                </p>
            </div>
            <div className="right">
                <NameForm />
            </div>
        </div>
        
    </div>
  )
}

export default Contact