import React from 'react';
class SheetInfo extends React.Component {
  render() {
    return (
      <div className="sheet-info">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
export default SheetInfo
