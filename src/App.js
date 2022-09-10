import { useEffect, useState } from 'react';
import './App.css';
import imageThingy from './images/Lauderdale_Premium_Arms.png'


function App() {
  const [style, setStyle] = useState('_Premium_Arms');
  const [color, setColor] = useState('Lauderdale_Premium_Arms');

  const [imageName, setImageName] = useState(`./images/${color}${style}.png`);



  useEffect(() => {
    document.title = "Demo Page";  
  }, []);

  return (
    <div className="App">
      <div id='mainPage' style={{ margin: '20px', display: 'flex' }}>
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {imageName && <img src={imageThingy} alt="thingy" style={{ height: '100vh' }}/>}
        </div>
        <div id='sideBar' style={{ width: 'fit-content', display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
          <div id='information'>
            <h3 className='title'>
              PARADIGMA CHAIR
            </h3>
            <div class='infoBox'>
                Lots of information about the style and other stuff too, Lots of information about the style and other stuff too
            </div>
            <div class='infoBoxSmall'>
                Cost
            </div>
            <div class='infoBoxSmall'>
                Estimated Delivery
            </div>
          </div>
          <div id='controls'>
            <div className='dropdown'>
              Style
              <div className='dropdownlist'>
                style menu
              </div>
            </div>
            <div className='dropdown'>
              Color Palette
              <div className='dropdownlist'>
                <ul>
                    <li>
                      Lauderdale
                    </li>
                    <li>
                      Mist
                    </li>
                    <li>
                      Praeterra
                    </li>
                    <li>
                      Stellar
                    </li>
                    <li>
                      Tribeca
                    </li>
                  </ul>
              </div>
            </div>
            <div className='dropdown'>
              Quantity
            </div>
            <div className='button'>
              Continue To Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
