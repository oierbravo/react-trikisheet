import React from 'react';
import Nota from './Nota'
import './sheetnotes.css';

class SheetNotes extends React.Component {
  render() {
    const listNotes = this.props.notes.map((val,index) =>
      <Nota zenbakia={val.zenbakia} type={val.type} norabidea={val.norabidea} key={index}/>
      );
    return (
      <div className="sheet-notes">
        {listNotes}
      </div>
    );
  }
}

export default SheetNotes
