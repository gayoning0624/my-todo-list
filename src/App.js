import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      todos: [{
        id:1,
        text: 'Cook dinner'
      },{
        id:2,
        text: 'practice coding javascript'
      },{
        id:3,
        text: 'watch netflix series'
      },{
        id:4,
        text: 'Go to sleep before mid-night'
      }],
      todoInputValue: ''
    }

  }

  handleTodoInputChange = (e)=>{
    this.setState({todoInputValue:e.target.value})

  }
  handleAddtodoClick = (e)=>{
    e.preventDefault()
    var todo = {
      id:Date.now(),
      text:this.state.todoInputValue
    }
    var newTodos = [todo, ...this.state.todos]
    this.setState({
      todos:newTodos,
      todoInputValue: ''
    })
  }
  handleTodoDelet = (e)=>{
    var todoIdtoDelet = e.target.id
    var todo = this.state.todos
    var filteredTodos = todo.filter((item)=>{
      return item.id != todoIdtoDelet
    })
    this.setState({todos:filteredTodos})
  }


  render(){
    return (
      <div className="wrap">

      <div className="container">
          <div className="heading">
              <div className="icons">
                  <i className="fas fa-bars"></i><i className="fas fa-cog"></i>
              </div>
              <h1>MY TO DO LIST</h1>
              <p>Friday, 24 July</p>
          </div>
          <div className="todos">
            {
              this.state.todos.map((todo)=>{
                return (
                  <div className="todo" key={todo.id}>
                    <div className="todo-body">
                        <div className="todo-text">
                            {todo.text}
                        </div>
                        <div className="iconbox">
                          <i className="fas fa-edit"></i><i id={todo.id} className="fas fa-trash-alt" onClick={this.handleTodoDelet}></i>
                        </div>
                    </div>
                  </div> 
                )
              })
            }

          </div>
          <div className="todos new-todo">
                <form className="todo-input">
                    <div className="form-group">
      
                      <input type="text" placeholder="Enter your note" className="form-control" id="todo-input" value={this.state.todoInputValue} onChange={this.handleTodoInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleAddtodoClick}>SAVE</button>
                </form>
            </div>
          
      </div>

    </div>
    )
  }
}


export default App;
