 import React from 'react';

class DefaultProps1 extends React.Component {
  render(){
    return(
      <div>
        <h2>{this.props.headerProp}</h2>
        <h2>{this.props.contentProp}</h2>
      </div>
    );
  }
}
DefaultProps1.defaultProps ={
  headerProp: "header from default props",
  contentProp: "content from default props"
}
export default DefaultProps1;
