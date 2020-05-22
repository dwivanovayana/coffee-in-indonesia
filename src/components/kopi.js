 import React from 'react';
import './kopi.css';

class Kopi extends React.Component {
  handleClick = () => {
    // Call the parent methos selectedFlat
    this.props.selectedKopi(this.props.kopi)
  }
  render() {
    const title =
    "Kopi " + this.props.kopi.name +
    " - " +  this.props.kopi.origin;

    const style = {
      backgroundImage: `url('${this.props.kopi.imageUrl}')`
    };

    return (
      <div className="kopi" onClick={this.handleClick}>
        <div className="kopi-image" style={style}></div>
        <div className="kopi-title">
         {title}
        </div>
      </div>
    );
  }
}

export default Kopi;
