import React from 'react';
import './nota.css';


class Nota extends React.Component {
  render() {
    const cssArray = [this.props.type,this.props.norabidea,'circle']
    const cssClass =  cssArray.join(' ');  ;
    return (
      <div className={cssClass}>
        {this.props.zenbakia}
      </div>
    );
  }
}
export default Nota
