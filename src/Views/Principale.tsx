import React, {useEffect, useMemo, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from 'websocket'

const socketRead = new W3CWebSocket('ws://172.16.30.125:1790/GetVariables')
//const socketRead = new W3CWebSocket('ws://localhost:1790/GetVariables')

const Principale= ()=>{

    const [data, setData] = useState([{Id:0,Name:"",Value:""}]);

    useMemo(()=>{
        socketRead.onopen = function (){
			//console.log('open', e)
            socketRead.send("ready");
		}       

        socketRead.onmessage = function(e){
            setData(JSON.parse(e.data.toString()));
            
            }
      },[])

      const returnName=(id:number)=>{

        const data1=data.find(d=>d.Id===id)
        return data1?.Name
      }

      const returnValue=(id:number)=>{

        const data1=data.find(d=>d.Id===id)
        return data1?.Value.toString()
      }

    return(
        <div>
            <div className="principalePage">
                <div className="grid-item1">
                <img className="imgGrid1" src="/layoutCooker1.png" alt="Plan du cooker" />

                {/* cuiseur 1 */}
                <label className="btnGrid1Label" style={{top:'40%',left:'90%'}}>Setpoint</label>
                <label className="btnGrid1Label" style={{top:'45%',left:'91%'}}>{returnValue(5)} °F</label>
                <label className="btnGrid1Label" style={{top:'65%',left:'58%'}}>Cuiseur 1</label>
                <label className="btnGrid1Label" style={{top:'70%',left:'59%'}}>{returnValue(7)} °F</label>
                <label className="btnGrid1Label" style={{top:'75%',left:'59%'}}>0 Kg</label>
                <label className="btnGrid1Label" style={{top:'90%',left:'70%'}}>Pompe 1</label>
                <label className="btnGrid1Label" style={{top:'94%',left:'71%'}}>Vitesse :{returnValue(3)} %</label>

                <label className="btnGrid1Label" style={{top:'88%',left:'83%'}}>Brix</label>
                <label className="btnGrid1Label" style={{top:'92%',left:'83%'}}>{returnValue(6)} %</label>
                

                {/* cuiseur 2 */}
                <label className="btnGrid1Label" style={{top:'50%',left:'7%'}}>Setpoint</label>
                <label className="btnGrid1Label" style={{top:'55%',left:'8%'}}>{returnValue(5)} °F</label>
                <label className="btnGrid1Label" style={{top:'65%',left:'33%'}}>Cuiseur 2</label>
                <label className="btnGrid1Label" style={{top:'70%',left:'34%'}}>{returnValue(10)} °F</label>              
                <label className="btnGrid1Label" style={{top:'90%',left:'21%'}}>Pompe 2</label>                
                <label className="btnGrid1Label" style={{top:'94%',left:'22%'}}>Vitesse :{returnValue(8)} %</label> 
                
                </div>
               
            </div>
            
        </div>
    )}

export default Principale