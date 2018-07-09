import React from 'react';
import SheetInfo from './SheetInfo';
import SheetNotes from './SheetNotes';

class TrikiSheet extends React.Component {
  constructor(props) {
    super(props);
    if(typeof props.tune === 'undefined'){
      this.tune = "BbEb";
    }
    if(typeof props.sheet === 'undefined'){
      this.sheet = {
        info: {
          title:"Gure super abestia"
        },
        notes: [{zenbakia:23,norabidea:'Ireki',type:'nota'},{zenbakia:21,norabidea:'Ireki',type:'nota'},{zenbakia:19,norabidea:'Ireki',type:'nota'},{type:'silence'},{zenbakia:22,norabidea:'Itxi',type:'nota'},{type:'silence'},{zenbakia:23,norabidea:'Ireki',type:'nota'},{type:'silence'},{zenbakia:22,norabidea:'Itxi',type:'nota'}]
      }
    }
  }

  render() {
    return (
      <div className="sheet">
        <SheetInfo info={this.sheet.info}></SheetInfo>
        <SheetNotes notes={this.sheet.notes} tune={this.tune}></SheetNotes>
      </div>
    );
  }
}
export default TrikiSheet
