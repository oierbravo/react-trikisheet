import React from 'react';
class SheetInfo extends React.Component {
  render() {
    console.log(this);
    return (
      <div className="sheet-info">
        <h1>{this.props.info.title}</h1>
      </div>
    );
  }
}
export default SheetInfo
