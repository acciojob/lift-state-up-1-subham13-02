import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleButtonClick = () => {
    this.setState({
      showModal: true
    });
  };

  render() {
    return (
      <div className="parent">
        <h1>Parent Component</h1>
        <Child showModal={this.state.showModal} onButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <div className="child">
        <h2>Child Component</h2>
        <button onClick={this.props.onButtonClick}>Show Modal</button>
        {this.props.showModal && <div><h3>Model Component</h3><p>This is model component.</p></div>}
      </div>
    );
  }
}

export default Modal