 import React from 'react';
import './kopi.css';

class Kopi extends React.Component {
  render() {
    const title =
    this.props.kopi.name + " coffee" +
    " - " +  this.props.kopi.origin;

    const style = {
      backgroundImage: `url('${this.props.kopi.imageUrl}')`
    };

    return (
      <div className="kopi">
        <div className="kopi-image" style={style}></div>
        <div className="kopi-title">
         {title}
        </div>
      </div>
    );
  }
}

export default Kopi;
