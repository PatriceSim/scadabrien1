import './App.css';
import {SidebarComponent} from '@syncfusion/ej2-react-navigations';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {useRef} from 'react';
import MainPage from './Views/MainPage';
import Principale from './Views/Principale';
import Historique from './Views/Historique';
import Graphique from './Views/Graphique';
import Tank from './Views/Tank';

export default function App() {
  const dockBar:any=useRef() ;
   
    const toggleClickMenu=(event:any)=>{
     //console.log(event)
     dockBar.current.toggle()         
    }
      const toggleClickPrincipale=()=>{
        window.location.pathname = "/principale"
      }

      const toggleClickHistorique=()=>{
        window.location.pathname = "/historique"    
      }

      const toggleClickGraphique=()=>{
        window.location.pathname = "/graphique"    
      }
      
      const toggleClickTank=()=>{
        window.location.pathname = "/tank"    
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
                                    <span className="e-icons principale"/>
                                    <span className="e-text" title="principale">Principale</span>
                                </li>
                                <li className="sidebar-item" onClick={toggleClickHistorique}>
                                    <span className="e-icons historique"/>
                                    <span className="e-text" title="historique">Historique</span>
                                </li>
                                <li className="sidebar-item" onClick={toggleClickGraphique}>
                                    <span className="e-icons graphique"/>
                                    <span className="e-text" title="graphique">Graphique</span>
                                </li>
                                <li className="sidebar-item" onClick={toggleClickTank}>
                                    <span className="e-icons tank"/>
                                    <span className="e-text" title="tank">Réservoir</span>
                                </li>                                  
                            </ul>
                        </div>
                    </SidebarComponent>
        
        <Router>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/principale" element={<Principale/>}/>
            <Route path="/historique" element={<Historique/>}/>
            <Route path="/graphique" element={<Graphique/>}/>
            <Route path="/tank" element={<Tank/>}/>
          </Routes>      
        </Router>                    
    </div>    
  );
}
