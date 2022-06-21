/* A Simple ToDo List app with limited functionalities
ADD and REMOVE. The app starts with an empty list until 
items are added to the list by the user.
*/

import * as React from 'react';
import './App.css';
import {  makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Table, TableHead, TableRow, TableCell} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
  button:{
    backgroundColor:'#97F9FC',
    margin: '10px',
  },
  id:{
    color:'blue',
  },
  div:{
    width:'30%',
    border:'1px solid black',
    marginLeft: '20px',
    borderRadius: '5px',
  },
}));





function App() {
  
  const handleChange = (event) =>{
    setVal(event.target.value);
  }

  const [val, setVal] = React.useState('');
  const classes = useStyles();
  const [list, setList] = React.useState([]);

  const handleAdd = () =>{
    console.log(val);
    const newList = list.concat({val,  id: uuidv4()});
    setList(newList);
  }

  const handleRemove = () =>{
    //Filter out the deleted item from the list.
    setList(todos => todos.filter((item) => item.val !== val));
  }

  return (
    <>
      <div className="App">
      <TextField onChange={handleChange}></TextField>
      <br></br><Button className={classes.button} onClick={handleAdd}>Add</Button> 
        <Button className={classes.button} onClick={handleRemove}>Remove</Button>
      
    </div>
    <div className={classes.div}>
      
      <ul>
        <Table>
        <TableHead><h2>To do List</h2></TableHead>
          {list.map(function(item){
            return <TableRow>
              <TableCell><li key={item.id}>{item.val } <span className={classes.id}></span></li></TableCell></TableRow>;
          })}
        
        
        </Table>
        </ul>
    </div>
    </>
    
  ); 
}

export default App;
