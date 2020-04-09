import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Offline, Online } from "react-detect-offline";

import Home from './pages/Home';
import Info from './pages/Info';
import Learn from './pages/Learn';
import TestCenters from './pages/TestCenters';
import Navbar from './component/Navbar';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }

      componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };

    render(){

        const { width } = this.state;
        const isMobile = width >= 450;
        if (isMobile) {
            return (
              <div>Open on mobile</div>
            );
          }
    return(
        <div>
       
      
       <Router>
       <Navbar/>
       <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/info' component={Info} />
            <Route path='/learn' component={Learn} />
            <Route path='/testcenters' component={TestCenters} />
            <Route path="*"> <Home /> </Route>
       </Switch>
       </Router>
       
        </div>
    )
    }
}
export default App;
