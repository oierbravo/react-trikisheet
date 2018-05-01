import React from 'react';
import SheetInfo from './SheetInfo';
import SheetNotes from './SheetNotes';

class TrikiSheet extends React.Component {
  constructor(props) {
    super(props);
    if(typeof props.sheet === 'undefined'){
      this.sheet = {
        info: {
          title:"Gure super abestia"
        },
        notes: [{zenbakia:23,norabidea:'ireki',type:'nota'},{zenbakia:21,norabidea:'ireki',type:'nota'},{zenbakia:19,norabidea:'ireki',type:'nota'},{type:'silence'},{zenbakia:22,norabidea:'itxi',type:'nota'},{type:'silence'},{zenbakia:23,norabidea:'ireki',type:'nota'},{type:'silence'},{zenbakia:22,norabidea:'itxi',type:'nota'}]
      }
    }
  }

  render() {
    return (
      <div className="sheet">
        <SheetInfo info={this.sheet.info}></SheetInfo>
        <SheetNotes notes={this.sheet.notes}></SheetNotes>
      </div>
    );
  }
}
export default TrikiSheet
