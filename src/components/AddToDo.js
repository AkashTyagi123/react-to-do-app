import React,{Component} from 'react';
 class AddTodo extends Component{
    state ={
        title:''
    }
    onChange = (e)=>this.setState({
        [e.target.name]:e.target.value
    });

    onSubmit =(e)=>{
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({
            title:''
        });
    }
    render(){
        return(
            <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                <input type="text" 
                name="title"
                 placeholder="Add todo"
                 style={{flex:10,padding:"5px"}}
                 onChange={this.onChange}/>
                <input style={{flex:'1'}} type="submit" value="submit" className="btn" />
                 
            </form>
        );
    }
}
export default AddTodo;