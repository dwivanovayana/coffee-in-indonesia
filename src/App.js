import React from 'react';
import './App.css';
import Kopi from './components/kopi'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kopis: [],
      allKopis: [],
      search: ""
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/novatogatorop/coffee-in-indonesia/master/kopi-indonesia.json";
    fetch(url) //AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          kopis: data,
           allKopis: data
        })
      });
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      kopis: this.state.allKopis.filter((kopi) => new RegExp(event.target.value, "i").exec(kopi.name))
    });
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search coffee name ☕️..."
              value={this.state.search}
              onChange={this.handleSearch}
            />
          </div>
          <div className="kopis">
            {this.state.kopis.map((kopi) => {
              return <Kopi key={kopi.name} kopi={kopi} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
