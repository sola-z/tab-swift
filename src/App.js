import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        // 格式：字符串的形式要保持一致，比如统一使用单引号
        {id: 0, name: "A", body: 'A', active: true},
        {id: 1, name: "B", body: 'B', active: false},
        {id: 2, name: "C", body: 'C', active: false}
     ]
  }}


  render() {
    var items = this.state.items;

    // 根据下面的代码，可以先过滤出要显示的item，然后jsx中就不需要使用map来循环了。
    // 如果不了解find，可以尝试在 MDN 中查找数组的几个常用方法，有
    // map, filter, find, findIndex 等， 先简单了解下，后面用到一个积累一个。
    var activeItem = items.find(item => item.active);

    return (
      <div className="App">
        {
          /* 尝试给选中的按扭加个不同的样式？ */
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

    // 这里的数据处理可以更精简，比如
    /*
    items.forEach(item => {
      item.active = item.id === id;
    });

    // 此外也可以尝试将选中项的索引定义为一个state
    this.state = {
      items: ...
      selectIndex: 0     // 直接这个状态就不用处理 items 里面的数据了
    }
    */

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
