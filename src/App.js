import { useState } from 'react';
import './index.css';

// arrows
import up from "./imgs/up.svg"
import right from "./imgs/right.svg"
import down from "./imgs/down.svg"
import left from "./imgs/left.svg"

// main images
import one from "./imgs/two.jpg"
import artTwo from "./imgs/artTwo.jpg"
import three from "./imgs/three.jpg"
import artThree from "./imgs/one.jpg"


function App() {
  const [status, setStatus] = useState(1);

  return (
    <div className="App">
      <img src={up} alt="" onClick={() => setStatus(1)} className='arrowUp'/>
      <img src={right} alt="" onClick={() => setStatus(2)} className='arrowRight'/>
      <img src={down} alt="" onClick={() => setStatus(3)} className='arrowDown'/>
      <img src={left} alt="" onClick={() => setStatus(4)} className='arrowLeft'/>

      {
        status === 1? <><h1 className='first'>SANJEEV</h1> <h1 className='second'>MIDDA</h1><img src={one} alt="buildingOne" className='buildingOne'/> </> : null
      }

      {
        status === 2? <><h1 className='vertical'>ABOUT</h1> <img src={artTwo} alt="buildingTwo" className='buildingTwo'/></> : null
      }

      {
        status === 3? <><h1 className='vertical'>PROJECTS</h1> <img src={three} alt="buildingThree" className='buildingThree'/></> : null
      }

      {
        status === 4? <><h1 className='vertical'>CONTACT</h1> <img src={artThree} alt="kyoto" className='kyoto'/></> : null
      }
    </div>
  );
}

export default App;
