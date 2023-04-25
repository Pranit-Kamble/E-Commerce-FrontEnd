import React from 'react'
import './Footer.css'
import ishop from '../Images/iSHOP Logo.svg'
import facebook from '../Images/facebook.svg'
import twitter from '../Images/twitter.svg'
import visa1 from '../Images/visa.svg'
import visa2 from '../Images/Western_union.svg'
import visa3 from '../Images/master_card.svg'
import visa4 from '../Images/Paypal.svg'

const Footer = () => {
    
  return (
    <div className='footcon'>
        <hr style={{width:'100%'}} />
        <div className='footbox'>
            <div className="footitem">
                <img style={{height:'30px'}} src={ishop} alt="" />
                <div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias repudiandae enim laudantium consequatur non ero tenetur, natus maxime maiores placea?</div>
            </div>
            <div className="footitem">
                <h3>Follow Us</h3>
                <div> Lorem ipsum dolor sit amet, me maiores placea.</div>
                <div><img src={facebook} alt="" /><img style={{marginLeft:'40px'}} src={twitter} alt="" /></div>
            </div>
            <div className="footitem">
                <h3>Contact Us</h3>
                <div><div>iShop: address @building 124</div> <div>Call us now: 0123-456-789</div> Email: support@whatever.com <div>iShop: address @building 124</div><div>iShop: address @building 124</div></div>
            </div>
        </div>
        <hr style={{width:'82%'}} />
        <div className='footbox'>
            <div className="footitem2">
                <h3>Information</h3>
                <div>About Us</div>
                <div>Information</div>
                <div>Privacy Policy</div>
                <div>Term & Conditions</div>
            </div>
            <div className="footitem2">
                <h3>Services</h3>
                <div>About Us</div>
                <div>Information</div>
                <div>Privacy Policy</div>
                <div>Term & Conditions</div>
            </div>
            <div className="footitem2">
                <h3>Extras</h3>
                <div>About Us</div>
                <div>Information</div>
                <div>Privacy Policy</div>
                <div>Term & Conditions</div>
            </div>
            <div className="footitem2">
                <h3>My Account</h3>
                <div>About Us</div>
                <div>Information</div>
                <div>Privacy Policy</div>
                <div>Term & Conditions</div>
            </div>
            <div className="footitem2">
                <h3>Useful Links</h3>
                <div>About Us</div>
                <div>Information</div>
                <div>Privacy Policy</div>
                <div>Term & Conditions</div>
            </div>
            <div className="footitem2">
                <h3>our Offers</h3>
                <div>About Us</div>
                <div>Information</div>
                <div>Privacy Policy</div>
                <div>Term & Conditions</div>
            </div>
        </div>
           <hr style={{width:'100%'}} />
        <div className='visa'>
            <img style={{marginLeft:'20px'}} src={visa1} alt="" />
            <img style={{marginLeft:'20px'}} src={visa2} alt="" />
            <img style={{marginLeft:'20px'}} src={visa3} alt="" />
            <img style={{marginLeft:'20px'}} src={visa4} alt="" />
        </div>
        
    </div>
  )
}

export default Footer