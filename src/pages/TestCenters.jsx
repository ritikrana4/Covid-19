import React from 'react';
import Select from 'react-select'

import '../styles/testcenters.style.css'
import StateList from '../component/StateList';
import Loader from '../component/Loader';
import NetworkError from '../component/NetworkError';

const options = [
    {value: "Andhra Pradesh", label: "Andhra Pradesh" },
    {value: 'Assam', label: 'Assam'},
    {value: 'Bihar', label: 'Bihar'},
    {value: 'Chandigarh', label: 'Chandigarh'},
    {value: 'Chhattisgarh', label: 'Chhattisgarh'},
    {value: 'Delhi', label: 'Delhi'},
    {value: 'Goa', label: 'Goa'},
    {value: 'Gujarat', label: 'Gujarat'},
    {value: 'Haryana', label: 'Haryana'},
    {value: 'Himachal Pradesh', label: 'Himachal Pradesh'},
    {value: 'Jammu & Kashmir', label: 'Jammu & Kashmir'},
    {value: 'Jharkhand', label: 'Jharkhand'},
    {value: 'Karnataka', label: 'Karnataka'}, 
    {value: 'Kerala', label: 'Kerala'},
    {value: 'Madhya Pradesh', label: 'Madhya Pradesh'},
    {value: 'Maharastra', label: 'Maharastra'},
    {value: 'Manipur', label: 'Manipur'},
    {value: 'Meghalaya', label: 'Meghalaya'},
    {value: 'Odisha', label: 'Odisha'},
    {value: 'Puducherry', label: 'Puducherry'},
    {value: 'Punjab', label: 'Punjab'},
    {value: 'Rajasthan', label: 'Rajasthan'},
    {value: 'Sikkim', label: 'Sikkim'},
    {value: 'Tamil Nadu', label: 'Tamil Nadu'},
    {value: 'Telangana', label: 'Telangana'},
    {value: 'Tripura', label: 'Tripura'},
    {value: 'Uttarakhand', label: 'Uttarakhand'},
    {value: 'Uttar Pradesh', label: 'Uttar Pradesh'},
    {value: 'West Bengal', label: 'West Bengal'}
    

  ];
const API = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges"
class TestCenters extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedOption:"Delhi",
            data:[],
            isLoading:false,
            error:null
        }
    }
    componentDidMount(){
        this.setState({isLoading:true});
        fetch(API)
        .then((response)=>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error('Something wrong...');
            }
        })
        .then(data=>this.setState({data:data.data.medicalColleges,isLoading:false}))
        .catch(error=>this.setState({error,isLoading:false}));
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption:selectedOption.value });  
           
      };
   

    render(){
        
        
        const { selectedOption,data,isLoading,error } = this.state; 
        const filteredData = data.filter(elm=>elm.state.toLowerCase().includes(selectedOption.toLowerCase()));
        
        if (error) {
            return <NetworkError/>
        }
        if (isLoading) {
            return <Loader/>
        }
        return(
            <div style={{marginLeft:20, marginRight:20}}>
                <div className='test-head'>
                    <div className='header-title'>Test Centres</div>
                    <div className='header-para'>Learn about Test Centres</div>
                </div>
                <div >
                         <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            isSearchable={true} 
                            placeholder={"Search state..."}
                         
                         />
                </div>
                <div className='selected-city'>{selectedOption}</div>
                <StateList  data={filteredData}/>
                
                
            </div>
        );
    }


}

export default TestCenters;