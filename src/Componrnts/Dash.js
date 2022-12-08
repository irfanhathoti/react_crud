import React, { Component } from 'react'
import AddBook from './AddBook'

class Dash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      BookList: [{
        "Book": "Book1"
      }],
      flag: true
    }
  }
  AddBook = (List) => {
    let newState = [...this.state.BookList, List]
    console.log(newState);
    this.setState({
      BookList: newState
    })
  }
  
  render() {
    return (
      <div>

        <ul>
          {
            this.state.BookList.map((List, index) => {
              return (
                <li key={index}>
                  {List.Book}
                </li>
              )
            })
          }
        </ul>
        <AddBook AddBook={this.AddBook} />
        <br />
        <button onClick={this.HandleToggle} >Back</button>
      </div>
    )
  }
}
export default Dash
