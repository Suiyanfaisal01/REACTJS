import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  let input = prompt("Enter your name")
  return (
    <div style={{ textAlign: 'center', padding: '20px' , backgroundColor: "pink"}}>
      <h1>Welcome to {input} World</h1>
      <h1>Today is your day</h1>
      <p>"Thank you for visiting! Goodbye and take care!".</p>
      <></>
      <img
        src="https://c1.wallpaperflare.com/preview/849/616/935/desk-tech-setup-web-development.jpg"
        style={{ width: '500px', borderRadius: '10px', margin: '20px 0' }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
 export default App