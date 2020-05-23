import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import About from './components/pages/About'; 
import axios from 'axios';

class App extends Component {
  state = {
    
    todos:[
      
    ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todos:res.data}))
    ;
  }
//Toggle the list item
   markHandler =(id)=>{
   this.setState(
     {
       todos:this.state.todos.map(todo=>{
         if(todo.id === id)
         todo.completed=!todo.completed;
         return todo;
       })
     }
   );
  }

  delHandler = (id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  );
  }
  addToDoHandler = (title)=>{
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  }
  render() {
    return (
     <Router>
        <div className="App">
        <div className="container">
        <Header />
        <Route exact path="/"
         render={props=>(
           <React.Fragment>
              <AddToDo addToDo={this.addToDoHandler}/>
              <Todos todos={this.state.todos} delItem={this.delHandler} markComplete={this.markHandler} />

           </React.Fragment>
         )}
        />
        <Route path="/about" component={About}/>
        </div>
        
      </div>
     </Router>
    );
  }
}

export default App;
