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

  const [quantity, setQuantity] = useState('1');
  const [paymentScreen, setPaymentScreen] = useState(false);
  const [modalOpen, setModal] = useState(false);

  useEffect(() => {
    document.title = "Demo Page";  
  }, []);

  const handleDropDownChange = (e) => {
    setStyle(e.target.value)
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const totalCost = () => {
    return quantity * (25000 + (trim === 'Arms' ? 0 : 0) + (version === 'Premium' ? 10000 : 0))
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
                maxHeight: '100%',
                marginTop: '-40px'
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
              overflowY: 'scroll',
              flexShrink: 0
            }}>
          <div id='information' style={{ position: 'relative'}}>
            {paymentScreen && (
              <>
                <p className='arrowDaddy' onClick={() => setPaymentScreen(false)}>
                  <div style={{ width: '20px', height: '20px', backgroundColor: '#f2f2f2', display: 'relative', borderRadius: '4px' }} >
                    <i class="arrow up"></i>
                  </div>
                </p>
                <p onClick={() => setPaymentScreen(false)} style={{ position: 'absolute', left: '30px', top: '5px', cursor: 'pointer' }}>
                  Edit Selection
                </p>
              </>
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
            <div class='summary'>
              <span style={{ fontWeight: '700' }}>SUMMARY</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <p> {`${quantity} ${style} ${trim === 'Premium' ? 'PREM' : 'STD'}`} </p>
                <p> {`$${totalCost().toLocaleString("en-US")}`}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <p> {`Shipping / Freight `} </p>
                <p> {`TBD`}</p>
              </div>
              <hr/>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <p style={{ fontWeight: '700' }}>DEPOSIT DUE TODAY</p>
                <p style={{ fontWeight: '700' }}>{`$${(totalCost()/2).toLocaleString("en-US")}`}</p>
              </div>
            </div>
            )}
          </div>
          { !paymentScreen && (
          <div id='controls'>
            <div className='select-wrapper' style={{ width: '100%' }}>
              <label>Style</label>
              <select className='minimal' onChange={(e) => handleDropDownChange(e)} name="style" id="style">
                <option value="Lauderdale">Lauderdale</option>
                <option value="Mist">Mist</option>
                <option value="Praeterra">Praeterra</option>
                <option value="Stellar">Stellar</option>
                <option value="Tribeca">Tribeca</option>
              </select>
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
            <div className='select-wrapper' style={{ width: '100%' }}>
              <label>Quantity</label>
              <select className='minimal' onChange={(e) => handleQuantityChange(e)} name="quantity" id="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
              </select>                            
            </div>
            <div className='button payment' onClick={() => setModal(true)}>
              Continue to Order Form
            </div>
            <div style={{ textAlign: 'left' }} className='infoBoxSmall'>
              *Cost exclusive of shipping
            </div>
          </div>
          )}
          {paymentScreen && 
          (
          <div >
            <div className='infoBoxSmall'>
              <a href=''>ORDER AGREEMENT</a> 
            </div>
            <div className='button payment' onClick={() => setModal(true)} >
              Pay with Card
            </div>
          </div>
          )}
        </div>
        {modalOpen && (
          <div className='modal'>
            <div 
              className='modalContents' 
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.9)',
                height: 'fit-content', minWidth: '300px', 
                display: 'flex', alignItems: 'center', 
                flexDirection: 'column', 
                padding: '2em', 
                position: 'relative' ,
                border: '1px solid black',
                borderRadius: '4px',
                height: '80vh',
                overflowY: 'scroll'
              }}>
              <div class="close" onClick={() => setModal(false)} ></div>
              <p className='arrowDaddy2' onClick={() => setModal(false)}>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#f2f2f2', display: 'relative', borderRadius: '4px' }} >
                  <i class="arrow up"></i>
                </div>
              </p>
              <p onClick={() => setModal(false)} style={{ position: 'absolute', left: '50px', top: '0px', cursor: 'pointer' }}>
                Edit Selection
              </p>
              <div className='titleSummaryContainer'>
                <h3 className='title' style={{ paddingTop: '0px', margin: '0px', lineHeight: '1em'}}>
                  PARADIGMA CHAIR
                </h3>
                <h3 className='subTitle' style={{ paddingTop: '0px', marginTop: '0px'}}>
                  ORDER FORM
                </h3>
                <div className='summaryContainer' style={{ textAlign: 'left', padding: '20px 10px 0 0px', minWidth: '320'}}>
                  <span style={{ fontWeight: '700' }}>SUMMARY</span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '23px' }}>
                    <p> {`${quantity} ${style} ${trim === 'Premium' ? 'PREM' : 'STD'}`} </p>
                    <p> {`$${totalCost().toLocaleString("en-US")}`}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '23px' }}>
                    <p> {`Shipping / Freight `} </p>
                    <p> {`TBD`}</p>
                  </div>
                  <hr/>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <p style={{ fontWeight: '700', marginTop: '5px' }}>DEPOSIT DUE</p>
                    <p style={{ fontWeight: '700', marginTop: '5px' }}>{`$${(totalCost()/2).toLocaleString("en-US")}`}</p>
                  </div>
                </div>
              </div>
              <div className='addressOuterWrapper'>
                <div className='addressInnerWrapper'>
                  <div className='inputContainer'>
                    <label for="fname">FIRST NAME</label>
                    <input type="text" id="fname" name="fname" style={{ width: 'auto'}} />
                  </div>
                </div>
                <div className='addressInnerWrapper'>
                  <div className='inputContainer'>
                    <label for="lname">LAST NAME</label>
                    <input type="text" id="lname" name="lname" style={{ width: 'auto'}} />
                  </div>
                </div>
              </div>
              <div style={{ paddingTop: '0px' }} className='addressOuterWrapper'>
                <div className='addressInnerWrapper'>
                  <p>
                    BILLING ADDRESS
                  </p>
                  <div className='inputContainerVert' style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <label for="billingStreet"> STREET</label>
                    <input type="text" id="billingStreet" name="billingStreet" style={{ width: 'auto', margin: '0'}} />
                  </div>
                  <div style={{ display: 'flex', width: '100%', gap: '10px' }}>
                    <div style={{ width: 'calc(50% - 5px)', display: 'flex', flexDirection: 'column'}}>
                      <label for="billingState"> STATE</label>
                      <input type="text" id="billingState" name="billingState" style={{ width: 'auto', margin: '0'}} />
                    </div>
                    <div style={{ width: 'calc(50% - 5px)', display: 'flex', flexDirection: 'column'}}>
                      <label for="billingZip"> ZIP</label>
                      <input type="text" id="billingZip" name="billingZip" style={{ width: 'auto', margin: '0'}} />
                    </div>
                  </div>
                </div>
                <div className='addressInnerWrapper'>
                  <p>
                    SHIPPING ADDRESS
                  </p>
                  <div className='inputContainerVert' style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <label for="shippingStreet"> STREET</label>
                    <input type="text" id="shippingStreet" name="shippingStreet" style={{ width: 'auto', margin: '0'}} />
                  </div>
                  <div style={{ display: 'flex', width: '100%', gap: '10px' }}>
                    <div style={{ width: 'calc(50% - 5px)', display: 'flex', flexDirection: 'column'}}>
                      <label for="shippingState"> STATE</label>
                      <input type="text" id="shippingState" name="shippingState" style={{ width: 'auto', margin: '0'}} />
                    </div>
                    <div style={{ width: 'calc(50% - 5px)', display: 'flex', flexDirection: 'column'}}>
                      <label for="shippingZip"> ZIP</label>
                      <input type="text" id="shippingZip" name="shippingZip" style={{ width: 'auto', margin: '0'}} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='addressOuterWrapper'>
                <div className='addressInnerWrapper'>
                  <div className='inputContainer'>
                    <label for="email">EMAIL</label>
                    <input type="email" id="email" name="email" style={{ width: 'auto'}} />
                  </div>
                </div>
                <div className='addressInnerWrapper'>
                  <div className='inputContainer'>
                    <label for="phone">PHONE NUMBER</label>
                    <input type="tel" id="email" name="email" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" style={{ width: 'auto'}} />
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: 'flex-start'}} className='button payment' onClick={() => setModal(true)}>
                SUBMIT ORDER
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  //trigger rebuild
}

export default App;
