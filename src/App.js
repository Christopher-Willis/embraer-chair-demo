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

  const [styleDropdown, setStyleDropdown] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [paymentScreen, setPaymentScreen] = useState(false); 

  useEffect(() => {
    document.title = "Demo Page";  
  }, []);

  const handleOnChange = (e) => {
    setQuantity(e.target.value )
  }

  const totalCost = () => {
    return quantity * (25000 + (trim === 'Arms' ? 500 : 0) + (version === 'Premium' ? 5000 : 0))
  }

  return (
    <div className="App">
      <div id='mainPage' style={{ marginLeft: '20px', marginRight: '50px', display: 'flex', maxHeight: '100vh', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', minWidth: 0, alignItems: 'center', flexGrow: 1 }}>
          {imageMap[`${style}${version}${trim}`] && 
            <img 
              src={imageMap[`${style}${version}${trim}`]} 
              alt="thingy" 
              style={{ 
                maxWidth: '100%',
                height: 'fit-content',
                maxHeight: '100%'
              }}
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
              width: '320px',
              display: 'flex',
              flexDirection: 'column',
              // margin: '50px 50px 0px 50px',
              alignItems: 'center',
              overflow: 'scroll',
              flexShrink: 0
            }}>
          <div id='information'>
            {paymentScreen && (
              <p className='arrowDaddy' onClick={() => setPaymentScreen(false)}><i class="arrow up"></i>{`  Return to Customizer`}</p>
            )}
            <h3 className='title'>
              PARADIGMA CHAIR
            </h3>
            <div class='infoBoxSmall'>
              Est. Delivery: Dec 2022
            </div>
            <div class='infoBox'>
            The {style} {version} {trim ==='NoArms' ? '' : 'with arms'} features an anodized aluminum base with a cross-stitched 
            leather seat and graphene-reinforced carbon fiber backing.
            </div>
            { !paymentScreen && (
              <div class='infoBoxSmall'>
                Cost - {`$${totalCost().toLocaleString("en-US")}*`}
              </div>
            )}
            { paymentScreen && (
            <div class='infoBoxSmall'>
              <span style={{ fontWeight: '700' }}>Order SUMMERY</span>
              <p> {`${quantity} ${style} ${trim === 'Premium' ? 'PREM' : 'STD'}: $${totalCost().toLocaleString("en-US")}`.toUpperCase()} </p>
              <p> {`Shipping/Fright: TBD`.toUpperCase()} </p>
              <span style={{ fontWeight: '700' }}>DEPOSIT DUE TODAY: {`$${(totalCost()/2).toLocaleString("en-US")}`}</span>
            </div>
            )}
          </div>
          { !paymentScreen && (
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
            <div className='toggleWrapper'>
              <div className={`toggleItem ${version === 'Premium' ? 'active' : ''}`} onClick={() => setVersion('Premium')}>
                Premium
              </div>
              <div className={`toggleItem ${version === 'Standard' ? 'active' : ''}`} onClick={() => setVersion('Standard')}>
                Standard
              </div>
            </div>
            <div className='toggleWrapper'>
              <div className={`toggleItem ${trim === 'Arms' ? 'active' : ''}`} onClick={() => setTrim('Arms')}>
                Arms
              </div>
              <div className={`toggleItem ${trim === 'NoArms' ? 'active' : ''}`} onClick={() => setTrim('NoArms')}>
                No Arms
              </div>
            </div>
            <div className='button'>
              <label for="quantity">Quantity</label>
              <input type="number" id="quantity" name="quantity" placeholder="1" onChange={ (e) => handleOnChange(e)} />
            </div>
            <div className='button' onClick={() => setPaymentScreen(true)}>
              Continue To Payment
            </div>
          </div>
          )}
          {paymentScreen && 
          (
          <div id='controls'>
            <div className='button'>
              <span style={{ fontWeight: '700' }}>ORDER AGREEMENT</span> 
            </div>
            <div className='button'>
              Pay
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
  //trigger rebuild
}

export default App;
