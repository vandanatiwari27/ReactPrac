 import React from 'react';

class ImmutableProps1 extends React.Component {
  render(){
    return(
      <div>
        <h2>{this.props.headerProp}</h2>
        <h2>{this.props.contentProp}</h2>
      </div>
    );
  }
}

export default ImmutableProps1;
