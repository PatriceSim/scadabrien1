import './App.css';
import {SidebarComponent} from '@syncfusion/ej2-react-navigations';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {useRef} from 'react';
import MainPage from './Views/MainPage';
import Principale from './Views/Principale';
import Historique from './Views/Historique';

export default function App() {
  const dockBar:any=useRef() ;
   
    const toggleClickMenu=(event:any)=>{
     //console.log(event)
     dockBar.current.toggle()         
    }
      const toggleClickPrincipale=()=>{
        window.location.pathname = "/principale"
      }

      const toggleClickInfo=()=>{
        window.location.pathname = "/historique"    
      }      

  return (
    <div >
      <SidebarComponent id="dockSidebar" ref={dockBar} enableDock={true} dockSize="60px" width="220px" position='Left'>
                         <div className="dock">
                            <ul>
                                <li className="sidebar-item" id="toggle" onClick={toggleClickMenu}>
                                    <span className="e-icons expand"/>
                                    <span className="e-text" title="menu">Menu</span>
                                </li>
                                <li className="sidebar-item" onClick={toggleClickPrincipale}>
                                    <span className="e-icons product"/>
                                    <span className="e-text" title="principale">Principale</span>
                                </li>
                                <li className="sidebar-item" onClick={toggleClickInfo}>
                                    <span className="e-icons info"/>
                                    <span className="e-text" title="info">Historique</span>
                                </li>                                
                            </ul>
                        </div>
                    </SidebarComponent>
        
        <Router>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/principale" element={<Principale/>}/>
            <Route path="/historique" element={<Historique/>}/>
          </Routes>      
        </Router>                    
    </div>    
  );
}
