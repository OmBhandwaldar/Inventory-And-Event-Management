import React, { useState } from 'react'
import AppDrawer from "./AppDrawer"
import InventoryItems from "./InventoryItems"
import ListBar from './ListBar'
import RequestItems from './RequestItems';

export default function Inventory() {

    const options = ["availableItems", "makeRequest"];
    const [option , setOption] = useState(options[0]);

    

  return (
    <div style={{display: "flex"}}>
        {/* <div>
        <AppDrawer/>
        </div>
        <div style={{display: "flex", gap:20}}>
        <InventoryItems/>
        <InventoryItems/>
        </div> */}
        
        <RequestItems/>

      </div>
  )
}


