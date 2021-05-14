
import { PolarArea } from "react-chartjs-2";
import BarGraph from "./components/BarGraph";
import BubbleGraph from "./components/BubbleGraph";
import Navigation from "./components/Navigation";
import PolarAreaGraph from "./components/PolarAreaGraph";


function App() {
  return (
    <div className="App">

      <div className="container-fluid row">
           <Navigation/>
           <div className="mainSection">
             <div className="half1">
               <div className="card1">
               <h2 className="header">Current funding vs target</h2>
                 <h3 className="subheading">- Which charities need funding -</h3>
                 <BarGraph/></div>
               <div className="card1" style={{marginLeft: "3%"}}></div>
               <div className="card1" style={{marginLeft: "3%"}}>
               <h2 className="header">Donation breakdown</h2>
                 <h3 className="subheading">- What we need to reach our goal -</h3>
                 <PolarAreaGraph/>
                 </div>
             </div>
             <div className="half2">
               <div className="card2"></div>
               <div className="card3" style={{marginLeft: "3%"}}></div>
               <div className="card3" style={{marginLeft: "3%"}}></div>
             </div>
           </div>
       

      </div>
   
  
    </div>
  );
}

export default App;
