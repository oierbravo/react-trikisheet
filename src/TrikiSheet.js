import React from 'react';
import SheetInfo from './SheetInfo';
import SheetNotes from './SheetNotes';

class Sheet extends React.Component {
  render() {
    const song = {

      info: {
        title:"Gure super abestia"
      },
      notes: [{zenbakia:23,norabidea:'ireki',type:'nota'},{zenbakia:21,norabidea:'ireki',type:'nota'},{zenbakia:19,norabidea:'ireki',type:'nota'},{type:'silence'},{zenbakia:22,norabidea:'itxi',type:'nota'},{type:'silence'},{zenbakia:23,norabidea:'ireki',type:'nota'},{type:'silence'},{zenbakia:22,norabidea:'itxi',type:'nota'}]
    }
    return (
      <div className="sheet">
        <SheetInfo info={song.info}></SheetInfo>
        <SheetNotes notes={song.notes}></SheetNotes>
      </div>
    );
  }
}
export default Sheet
