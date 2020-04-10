import React from 'react';
import indiaLogo from '../assets/india-logo.png';

import '../styles/home.style.css'
import Loader from  '../component/Loader'
import Items from '../component/Items';
import NetworkError from '../component/NetworkError';
import { v4 as uuidv4 } from 'uuid';

const API = 'https://api.rootnet.in/covid19-in/stats/latest';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            summary:[],
            regional:[],
            isLoading: false,
            error: null
        };
    }

    componentDidMount(){
        this.setState({ isLoading: true });
        fetch(API)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error('Something went wrong...');
            }
        })
        .then(data=>this.setState({summary:data.data.summary,regional:data.data.regional,isLoading:false}))
        .catch(error=>this.setState({error,isLoading:false}));
    }    

    render(){
        
        const {summary,regional,isLoading,error} =this.state;       
        console.log(regional);
        regional.sort((item1,item2)=>(item2.confirmedCasesIndian-item1.confirmedCasesIndian));
        
        if (error) {
            return <NetworkError/>
          }
          if (isLoading) {
            return <Loader/>
          }
        return(
            <div className='home'>
                
                <div className='home-header'>
                    <div className='home-header-title'>COVID’19 Stats</div>
                    <div className='home-header-img'><img alt='India' src={indiaLogo}/></div>
                </div>
                
                <div className='home-dashboard-1'>

                        <div > 
                            <h3>Confirmed Cases</h3>
                            <h1>{summary.confirmedCasesIndian}</h1>
                        </div>
                        <div > 
                            <h3>Active</h3>
                            <h1>{summary.confirmedCasesIndian-(summary.discharged+summary.deaths)}</h1>
                        </div>
                 </div>     

                <div className='home-dashboard-1'>
                      <div> 
                            <h3>Recovered</h3>
                            <h1 style={{color:'#219653'}}>{summary.discharged}</h1>
                        </div>
                        <div> 
                            <h3>Deaths</h3>
                            <h1 style={{color:'#EB5757'}}>{summary.deaths}</h1>
                        </div>
               
                      </div>

                <div className='home-dashboard-2'>
                        <h2 className='home-dashboard-2-heading'>State Wise</h2>
                       {regional.map((item)=>{
                             return (
                                 <Items key={uuidv4()} data={item}/>
                             )   
                       })}
                </div>


            </div>
        ) 
                  
        
    }
}
export default Home;