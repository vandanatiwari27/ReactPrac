import React from 'react';

class App extends React.Component {
   render() {
   /*var myStyle = {
    fontSize:100,
    color: '#FF0000'
   }
      return (
         <div>
            <h1 style = {myStyle}>Hello World!!!</h1>
         </div>
      );*/
      return(
        <div>
          <Header/>
          <Content/>
        </div>
      );
   }
}

class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

class Content extends React.Component{
  render(){
    return(
      <div>
        <h1>Content</h1>
        <p>Content text</p>
      </div>
    );
  }
}

export default App;
