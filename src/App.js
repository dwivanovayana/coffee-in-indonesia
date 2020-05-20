import React from 'react';
// import GoogleMapReact from 'google-map-react';
import './App.css';
import Kopi from './components/kopi'
import Marker from './components/marker'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kopis: [],
      allKopis: [],
      selectedKopi : null,
      search: ""
    };
  }

  componentDidMount() {
    const url = "";
    fetch(url) //AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          kopis: data,
           allKopis: data
        })
      });
  }

  selectedKopi = (kopi) => {
    console.log(kopi)
    this.setState({
      selectedKopi: kopi
    })
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
      kopis: this.state.allKopis.filter((kopi) => new RegExp(event.target.value, "i").exec(kopi.name))
    });
  }

  render() {
    let center = {
      lat: 52.5200,
      lng: 13.4050
    }

    if (this.setState.selectedKopi) {
      center = {
        lat: this.setState.selectedKopi.lan,
        lng: this.setState.selectedKopi.lng
      }
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch}
            />
          </div>
          <div className="kopis">
            {this.state.kopis.map((kopi) => {
              return <Kopi key={kopi.name} kopi={kopi} selectedKopi={this.selectedKopi}/>
            })}
          </div>
        </div>
        {/* <div className="map">
          <GoogleMapReact
            defaultCenter={center}
            defaultZoom={14}
          >
          {this.state.kopis.map((kopi) => {
              return <Marker
                        key={kopi.name}
                        lat={kopi.lat}
                        lng={kopi.lng}
                        text={kopi.price}
                        selected={kopi === this.state.selectedKopi}
                      />
            })}
          </GoogleMapReact>
        </div> */}
      </div>
    )
  }
}

export default App;
