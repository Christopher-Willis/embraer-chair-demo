import './App.css';

function App() {
  return (
    <div className="App">
      <div id='mainPage' style={{ margin: '20px', display: 'flex' }}>
        <div style={{ flexGrow: 1 }}>
          heroDiv
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
            </div>
            <div className='dropdown'>
              Color Palette
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
