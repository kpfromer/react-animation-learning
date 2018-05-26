// Libs
import React, { Component } from 'react';
// CSS
import './css/style.css';

// Component
class GuestList extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      names: [
        { name: 'Joel' },
        { name: 'Alena' },
        { name: 'Andrew' },
        { name: 'Thera' }
      ]
    }
  }

  handleChange(event) {
    if (event.key === 'Enter') {
      const newName = { name: event.target.value };
      const newNames = this.state.names.concat(newName);
      event.target.value = '';
      this.setState({ names: newNames });
    }
  }

  handleRemove(i) {
    const newNames = this.state.names;
    newNames.splice(i, 1);
    this.setState({ names: newNames });
  }

  render() {
    let guests = this.state.names.map((name, i) => (
      <li key={name.name}>
        {name.name}
        <button onClick={this.handleRemove.bind(this, i)}>Remove</button>
      </li>
    ));

    return (
      <div className="guest-list">
        <h1>Guest List</h1>
        <input type="text" placeholder="Invite Someone" value={this.state.newName}
               onKeyDown={this.handleChange.bind(this)}/>
        <ul>

          {guests}

        </ul>
      </div>
    );
  }
}