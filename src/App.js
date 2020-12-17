import React, {componenet} from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./componenet/Header/Header";
import Body from './componenet/Body/Body';
import Footer from "./componenet/Footer/Footer";
import Iphone from "./componenet/Pages/Iphone"

import Youtube from "./componenet/Youtub/Youtube";
import Four04 from "./componenet/Pages/Four04";
import Productpage from "./componenet/Pages/Productpage";



function App() {
  return (
    <Router>
    <div>
     <Header />
     <Switch>
     <Route path="/home" exact component={Body}/>
     <Route path="/Iphone" exact component={Iphone}/>
     <Route path="/Iphone/:pid" exact component={Productpage}/>
     <Route path="/" component={Four04}/>
     
    </Switch>
     <Footer />
     <Youtube />
    </div>
    </Router>
  );
}

export default App;
