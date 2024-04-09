import React, { useEffect }  from 'react';
import logo from '/images/Lethal_Company.webp'; 


function TerminalScreen() {

  return (
    <div className="terminal">
        <div className="logo-container">
        <img src={logo} alt="Lethal Company Logo" className="company-logo" />
      </div>
      <div className="terminal-content">
      <p> BG IG, A System-Act Ally</p>
      <p>Copyright (c) 2084 2108, Halden Electronics Inc.</p>
      </div>
      <p>-----------------------------------------------------------------------------</p>
      <div className="system-info">
        <p>CPU Type : BORSON 300 CPU at 2500 MHz</p>
        <p>Memory test : 4521586K OK</p>
        <p> </p>
        <p> </p>
        <p> </p>
        <p>Boot Distributoner Application v0.04</p>
        <p>Copyright (C) 2107 Distributoner</p>
        <div className="terminal-content1">
        <p>Detecting Sting X ROM</p>
        <p>Detecting Web LNV Extender</p>
        <p>Detecting Heartbeats OK</p>
        </div> 
      </div>
      <p>-----------------------------------------------------------------------------</p>
      <div className="device-list">
        <p>UTGF Device Listening...</p>
        <div className="table">
          <div className="table-header">
            <span>Body</span>
            <span>ID</span>
            <span>Neural</span>
            <span>Device Class</span>
          </div>

          <div className="table-row">
            <span>2</span>
            <span>52</span>
            <span>Jo152</span>
            <span>H515</span>
          </div>

          <div className="table-row">
            <span>2</span>
            <span>52</span>
            <span>Sa5155</span>
            <span>H515</span>
          </div>

        <div className="table-row">
            <span>2</span>
            <span>52</span>
            <span>Bo75</span>
            <span>H515</span>
          </div>

        <div className="table-row">
            <span>2</span>
            <span>52</span>
            <span>Ell510</span>
            <span>H515</span>
          </div>

        <div className="table-row">
            <span>1</span>
            <span>36</span>
            <span>Ell567</span>
            <span>H515</span>
          </div>
        
        <div className="table-row">
            <span>1</span>
            <span>36</span>
            <span>Jos912</span>
            <span>H515</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default TerminalScreen;
