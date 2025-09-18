import { useState } from 'react';
import './App.css';

function HeaderLeft() {
  return <div className="headerleft">{}</div>;
}

function HeaderCenter1({ name }) {
  return <div className="headercenter1">{name}</div>;
}

function HeaderCenter2({ name }) {
  return <div className="headercenter2">{name}</div>;
}

function HeaderCenterInner() {
  return (
    <div className="headercenter-inner">
      <HeaderCenter1 name="JUNO" />
      <HeaderCenter2 name="ALONZO" />
    </div>
  );
}

function HeaderCenter() {
  return (
    <div className="headercenter">
      <HeaderCenterInner />
    </div>
  );
}

function HeaderRight() {
  return <div className="headerright">{}</div>;
}

function Header() {
  return (
    <div className="headermain">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </div>
  );
}


function LeftContainer() {
  return <div className="leftcontainer">{}</div>;
}

function RightContainer1() {
  return <div className="rightcontainer1">{}</div>;
}

function RightContainer2() {
  return <div className="rightcontainer2">{}</div>;
}

function RightContainer() {
  return (
    <div className="rightcontainer">
      <RightContainer1 />
      <RightContainer2 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="contentmain">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

function FooterLeft() {
  return <div className="footerleft">{}</div>;
}

function FooterCenter1({course}) {
  return <div className="footercenter1">{course}</div>;
}

function FooterCenter2({course}) {
  return <div className="footercenter2">{course}</div>;
}

function FooterRight() {
  return <div className="footerright">{}</div>;
}

function Footer() {
  return (
    <div className="footermain">
      <FooterLeft />
      <FooterCenter1 course={"C-PCIT9"}/>
      <FooterCenter2 course={"IT3A"}/>
      <FooterRight />
    </div>
  );
}

function App() {
  return (
    <div className="maincontainer">
      <Header/>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;