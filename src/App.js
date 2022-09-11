import { useEffect, useState } from 'react';
import './App.css';
// premiums with arms
import LPA from './images/Lauderdale_Premium_Arms.png'
import MPA from './images/Mist_Premium_Arms.png'
import PPA from './images/Praeterra_Premium_Arms.png'
import SPA from './images/Stellar_Premium_Arms.png'
import TPA from './images/Tribeca_Premium_Arms.png'
// standard with arms
import LSA from './images/Lauderdale_Standard_Arms.png'
import MSA from './images/Mist_Standard_Arms.png'
import PSA from './images/Praeterra_Standard_Arms.png'
import SSA from './images/Stellar_Standard_Arms.png'
import TSA from './images/Tribeca_Standard_Arms.png'
// premiums with no arms
import LPN from './images/Lauderdale_Premium_No_Arms.png'
import MPN from './images/Mist_Premium_No_Arms.png'
import PPN from './images/Praeterra_Premium_No_Arms.png'
import SPN from './images/Stellar_Premium_No_Arms.png'
import TPN from './images/Tribeca_Premium_No_Arms.png'
// standard with no arms
import LSN from './images/Lauderdale_Standard_No_Arms.png'
import MSN from './images/Mist_Standard_No_Arms.png'
import PSN from './images/Praeterra_Standard_No_Arms.png'
import SSN from './images/Stellar_Standard_No_Arms.png'
import TSN from './images/Tribeca_Standard_No_Arms.png'
import "@fontsource/poppins"
import logo from './images/logo.png'

function App() {
  // file name stuff
  const [style, setStyle] = useState('Lauderdale');
  const [version, setVersion] = useState('Premium');
  const [trim, setTrim] = useState('Arms');
  // dropdown controllers 

  const imageMap = {
    'LauderdalePremiumArms': LPA,
    'MistPremiumArms': MPA,
    'PraeterraPremiumArms': PPA,
    'StellarPremiumArms': SPA,
    'TribecaPremiumArms': TPA,
    'LauderdaleStandardArms': LSA,
    'MistStandardArms': MSA,
    'PraeterraStandardArms': PSA,
    'StellarStandardArms': SSA,
    'TribecaStandardArms': TSA,
    'LauderdalePremiumNoArms': LPN,
    'MistPremiumNoArms': MPN,
    'PraeterraPremiumNoArms': PPN,
    'StellarPremiumNoArms': SPN,
    'TribecaPremiumNoArms': TPN,
    'LauderdaleStandardNoArms': LSN,
    'MistStandardNoArms': MSN,
    'PraeterraStandardNoArms': PSN,
    'StellarStandardNoArms': SSN,
    'TribecaStandardNoArms': TSN,
  };

  const [styleDropdown, setStyleDropdown] = useState('')
  const [versionDropdown, setVersionDropdown] = useState('')
  const [trimDropdown, setTrimDropdown] = useState('')

  useEffect(() => {
    document.title = "Demo Page";  
  }, []);

  return (
    <div className="App">
      <div id='mainPage' style={{ margin: '20px', display: 'flex' }}>
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', maxHeight: '100vh', position: 'relative' }}>
          {imageMap[`${style}${version}${trim}`] && 
            <img 
              src={imageMap[`${style}${version}${trim}`]} 
              alt="thingy" 
              style={{ height: 'auto' }}
            />}
            <div id="wrap">
              <img class="fake" src={logo} />
              <div id="img_wrap">
                  <img class="normal" src={logo} />
              </div>
            </div>
            {/* <img  
              src={logo} 
              alt="thingy" 
              style={{ left: '40px', top: '50px', position: 'absolute' }}
            /> */}
        </div>
        <div 
          id='sideBar' 
          style={
            { 
              width: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              padding: '70px 100px 0px 100px'
            }}>
          <div id='information'>
            <h3 className='title'>
              PARADIGMA CHAIR
            </h3>
            <div class='infoBox'>
            The {style} {version} {trim ==='NoArms' ? '' : 'with arms'} features an anodized aluminum base with a cross-stitched 
            leather seat and graphene-reinforced carbon fiber backing.
            </div>
            <div class='infoBoxSmall'>
              Cost - {`${style} ${version} ${trim}`} 
            </div>
            <div class='infoBoxSmall'>
                Estimated Delivery
            </div>
          </div>
          <div id='controls'>
            <div id='style' 
              className={`dropdown ${styleDropdown}`} 
              onClick={() => setStyleDropdown(styleDropdown === 'active' ? '' : 'active')}
              onMouseLeave={() => setStyleDropdown('')}
            >
              {style}
              <div className={`dropdownlist dropdown_menu--animated`}>
                <ul>
                    <li onClick={() => setStyle('Lauderdale')}>
                      Lauderdale
                    </li>
                    <li onClick={() => setStyle('Mist')}>
                      Mist
                    </li>
                    <li onClick={() => setStyle('Praeterra')}>
                      Praeterra
                    </li>
                    <li onClick={() => setStyle('Stellar')}>
                      Stellar
                    </li>
                    <li onClick={() => setStyle('Tribeca')}>
                      Tribeca
                    </li>
                  </ul>
              </div>
            </div>
            <div 
              className={`dropdown ${versionDropdown}`} 
              onClick={() => setVersionDropdown(versionDropdown === 'active' ? '' : 'active')}
              onMouseLeave={() => setVersionDropdown('')}
              >
              {version}
              <div className='dropdownlist'>
                <ul>
                    <li onClick={() => setVersion('Premium')}>
                      Premium
                    </li>
                    <li onClick={() => setVersion('Standard')}>
                      Standard
                    </li>
                  </ul>
              </div>
            </div>
            <div 
              className={`dropdown ${trimDropdown}`} 
              onClick={() => setTrimDropdown(trimDropdown === 'active' ? '' : 'active')}
              onMouseLeave={() => setTrimDropdown('')}
              >
              {trim}
              <div className='dropdownlist'>
                <ul>
                    <li onClick={() => setTrim('Arms')}>
                      Arms
                    </li>
                    <li onClick={() => setTrim('NoArms')}>
                      No Arms
                    </li>
                  </ul>
              </div>
            </div>
            <div className='button'>
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
  //trigger rebuild
}

export default App;
