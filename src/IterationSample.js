import React, { Component } from 'react'

class IterationSample extends Component {
  state = {
    names: ['눈사람', '얼음', '눈', '바람'],
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleInsert = () => {
    this.setState({
      names: this.state.names.concat(this.state.name),
      name: ''
    })
    this.input.focus()
  }

  handleRemove = (index) => {
    const { names }= this.state

    this.setState({
      names: [
        ...names.slice(0, index),
        ...names.slice(index + 1, names.length)
      ]
    })

    this.input.focus()
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') this.handleInsert()
  }

  render() {
    const nameList = this.state.names.map((name, index) => (
      <li
        onDoubleClick={() => this.handleRemove(index)}
        key={index}
      >{name}</li>
    ))

    return (
      <div>
        <input
          onKeyPress={this.handleKeyPress}
          ref={ref => this.input = ref}
          onChange={this.handleChange}
          value={this.state.name}
        />
        <button onClick={this.handleInsert}>추가</button>
        <ul>
          {nameList}
        </ul>
      </div>
    )
  }
}

export default IterationSample