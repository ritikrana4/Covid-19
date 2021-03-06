import React from 'react';


import '../styles/homedata.style.css';
import Loader from  './Loader';
import Items from './Items';
import NetworkError from './NetworkError';
import { v4 as uuidv4 } from 'uuid';

const API = 'https://api.rootnet.in/covid19-in/stats/latest';

class HomeData extends React.Component{
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
        regional.sort((item1,item2)=>(item2.confirmedCasesIndian-item1.confirmedCasesIndian));
        
        if (error) {
            return <NetworkError/>
          }
          if (isLoading) {
            return <Loader/>
          }
        return(
            <div className='home'>
                
              
                
                <div className='home-dashboard-1'>

                        <div > 
                            <div className="home-dash-title">Confirmed Cases</div>
                            <div className='home-dash-digit'>{summary.confirmedCasesIndian}</div>
                        </div>
                        <div > 
                            <div  className="home-dash-title">Active</div>
                            <div className='home-dash-digit'>{summary.confirmedCasesIndian-(summary.discharged+summary.deaths)}</div>
                        </div>
                        <div> 
                            <div  className="home-dash-title">Recovered</div>
                            <div className='home-dash-digit' >{summary.discharged}</div>
                        </div>
                 </div>     

                <div className='home-dashboard-2'>
                        <div> 
                            <div  className="home-dash-title">Total Deaths</div>
                            <div className='home-dash-digit' style={{color:'#EB5757'}}>{summary.deaths}</div>
                        </div>
               
                      </div>        

                <div className='home-dashboard-3'>
                        <div className='home-dashboard-3-title'>State Wise</div>
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
export default HomeData;