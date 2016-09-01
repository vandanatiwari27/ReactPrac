 import React from 'react';

class AppStateFul2 extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      header:"header value",
      "content": "content value"
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.header}</h1>
        <h1>{this.state.content}</h1>
      </div>
    );
  }
}
export default AppStateFul2;
