import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
         <div className="container d-flex justify-content-center align-item-center text-center w-1 h-1">
              <img
                   src="https://media.tenor.com/DPEfCqnChk0AAAAi/loading-slow-net.gif"
                   alt="loading..."
                   className ="w-1 h-1"
              />
         </div>
    );
  }
}
