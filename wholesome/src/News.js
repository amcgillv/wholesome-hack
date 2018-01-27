import React, { Component } from 'react';
import './App.css';




Array.prototype.clone = function() {
  return this.slice(0);
}

class News extends Component {

   constructor(props) {
       super(props);
        this.state = {
          filter: "all",
          sort: "none",
        };       
   }

   



  render() {

       return (

      <div>

        <button class = "myButton" onClick={() => this.setState({ filter: "all" }) } > Puppies! </button>
        <button class = "myButton" onClick={() => this.setState({ filter: "all" }) } > Proposals! </button>
        <button class = "myButton" onClick={() => this.setState({ filter: "all" }) } > Acts of Kindness! </button>
        <button class = "myButton" onClick={() => this.setState({ filter: "all" }) } > Even More Wholesome Things! </button>


      </div>

        );

  }



}

export default News;