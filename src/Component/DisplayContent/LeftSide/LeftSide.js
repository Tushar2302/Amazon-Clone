import React from 'react'
import "./LeftSide.css";
function LeftSide(props) {
  return (
    <div className='LeftSide_main'>
      <div className='leftSide_header'>
        Brand
      </div>
      <div className='leftSide_Brand'>
        <label className='Brandname'>
            <input type="checkbox" value="Apple" />Apple
        </label>
        <label className='Brandname'>
            <input type="checkbox" value="Samsung" />Samsung
        </label>
        <label className='Brandname'>
            <input type="checkbox" value="RedMI" />RedMI
        </label>
        <label className='Brandname'>
            <input type="checkbox" value="Apple" />Techno
        </label>
        <label className='Brandname'>
            <input type="checkbox" value="Apple" />Microsoft
        </label>
        <label className='Brandname'>
            <input type="checkbox" value="Apple" />Google
        </label>
        <label className='Brandname'>
            <input type="checkbox" value="Apple" />Nokia
        </label>
        <label className='Brandname'>
            <input type="checkbox" value="Apple" />Oneplus
        </label>
        <label className='Brandname'>
            <input type="checkbox" value="Apple" />Nothing
        </label>
        <label className='Brandname'>
            <input type="checkbox" value="Apple" />Spigen
        </label>        <label className='Brandname'>
            <input type="checkbox" value="Apple" />ASUS
        </label>
        <label className='Brandname'>
            <input type="checkbox" value="Apple" />Maxelon
        </label>
      </div>
    </div>
  )
}

export default LeftSide

