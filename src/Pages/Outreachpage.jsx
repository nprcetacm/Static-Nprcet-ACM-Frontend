import React from 'react'
import Events from '../Component/Events'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import OutreachNew from '../Component/OutreachNew'
import Navbar from '../Component/Navbar';

function Outreachpage() {


  return (
    <>
    <Navbar/>
        <OutreachNew/>
    </>

  )
}

export default Outreachpage