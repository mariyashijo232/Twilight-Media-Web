import { useState } from 'react';
import frontImage from './assets/front.jpg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="item">
        <img src={frontImage} alt="front" />
      </div>
      <div className="box">New Box</div> 
    </div>
  );
}

export default App;
