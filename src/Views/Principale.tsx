import React, {useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from 'websocket'

const socketRead = new W3CWebSocket('ws://172.30.16.144:1790/GetVariables')

const Principale= ()=>{

    const [data, setData] = useState([{Id:0,Name:"",Value:""}]);

    useEffect(() => {        
        socketRead.onopen = function (){
			//console.log('open', e)
            socketRead.send("ready");
		}       

        socketRead.onmessage = function(e){
            setData(JSON.parse(e.data.toString()));
            
            }
      },[]);
         

      const returnName=(id:number)=>{

        const data1=data.find(d=>d.Id===id)
        return data1?.Name
      }

      const returnValue=(id:number)=>{

        const data1=data.find(d=>d.Id===id)
        return data1?.Value.toString()
      }

    return(
        <div className="containerPrincipale">
            <div className="principalePage">
                <label>{returnName(1)} : {returnValue(1)}</label>
                <label>{returnName(2)} : {returnValue(2)}</label>
                <label>{returnName(3)} : {returnValue(3)}</label>
                <label>{returnName(4)} : {returnValue(4)}</label>
                <label>{returnName(5)} : {returnValue(5)}</label>
                <label>{returnName(6)} : {returnValue(6)}</label>
                <label>{returnName(7)} : {returnValue(7)}</label>
                <label>{returnName(8)} : {returnValue(8)}</label>
                <label>{returnName(9)} : {returnValue(9)}</label>
                <label>{returnName(10)} : {returnValue(10)}</label>
                <label>{returnName(11)} : {returnValue(11)}</label>
                
                
            </div>
            
        </div>
    )}

export default Principale