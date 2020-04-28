import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Logo from './../../images/logo.png'


export default function Brand (){
return(<>
   <Navbar>
    <navbarbrand >
      <img
        href="#home"
        src={Logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt="gifDump logo"
      />{' '}
      gifDump
    </navbarbrand>
  </Navbar>
  <br />
</>)}