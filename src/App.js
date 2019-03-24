import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 0, name: "A", body: 'A', active: true},
        {id: 1, name: "B", body: 'B', active: false},
        {id: 2, name: "C", body: 'C', active: false}
     ]
  }}


  render() {
    var items = this.state.items;

    return (
      <div className="App">
        {
          items.map((item) => (
          <button type="button" className="btn btn-light" onClick={()=>this.changeBody(item.id)}>item {item.name}</button>
          ))
        }
        {
           items.map((item) => (
             item.active ? <input type="text" class="form-control" size='32' value={item.body} readonly></input>: null
           )
           )
        }
      </div>
    );
  }

  changeBody(id) {
    var items = this.state.items;

    items.map((item)=>(item.active=false));

    if (id === 0) {
      items[0].active = true;
    } else if (id === 1) {
      items[1].active = true;
    } else if (id === 2) {
      items[2].active = true;
    } 

    this.setState({items: items});
    
  }
}


export default App;
