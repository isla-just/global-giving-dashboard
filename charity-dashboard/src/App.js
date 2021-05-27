

import BarGraph from "./components/BarGraph";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import PolarAreaGraph from "./components/PolarAreaGraph";
import RadarGraph from "./components/RadarChart";
import LineGraph from "./components/LineGraph";
import MapComponent from "./components/Map";
import Preloader from "./components/Preloader";
import BubbleGraph from "./components/BubbleGraph";


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
                  <BarGraph/>
                 </div>

               <div className="card1" style={{marginLeft: "3%"}}>
               <h2 className="header">Featured project funding</h2>
                 <h3 className="subheading">- How are the featured charities doing? -</h3>
                 {/* <RadarGraph/> */}
                 <BubbleGraph/>
               </div>

               <div className="card1" style={{marginLeft: "3%"}}>
               <h2 className="header">Organisation comparison</h2>
                 <h3 className="subheading">- Donations per project -</h3>
                 <LineGraph/>
                 </div>
             </div>

             <div className="half2">
               <div className="card2">
                <MapComponent/>
               </div>

               <div className="card3" style={{marginLeft: "3%"}}>
               <h2 className="header">Donation breakdown</h2>
                 <h3 className="subheading">- What we need to reach our goal -</h3>
                 <PolarAreaGraph/>
               </div>
               <div className="card3" style={{marginLeft: "3%",backgroundColor:'#7280be'}}>
                <Footer/>
               </div>
             </div>
           </div>
       

      </div>
   
    {/* <Preloader/> */}
    </div>
  );
}

export default App;
