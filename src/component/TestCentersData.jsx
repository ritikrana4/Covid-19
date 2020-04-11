import React from 'react';
import Select from 'react-select'

import '../styles/testcentersdata.style.css'
import StateList from './StateList';
import Loader from './Loader';
import NetworkError from './NetworkError';

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
class TestCentersData extends React.Component{
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
        const customStyles = {
        
            control: (base, state) => ({
                ...base,
                fontFamily: 'Poppins',
                fontSize: 14,
                borderRadius: 6,
                
             
              }),
              input: styles => ({
                ...styles,
                color: 'black',
                fontFamily: 'Poppins',
              }),
          };
        
        const { selectedOption,data,isLoading,error } = this.state; 
        const filteredData = data.filter(elm=>elm.state.toLowerCase().includes(selectedOption.toLowerCase()));
        
        if (error) {
            return <NetworkError/>
        }
        if (isLoading) {
            return <Loader/>
        }
        return(
            <div >
                
                <div >
                         <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            isSearchable={true} 
                            placeholder={selectedOption}
                            styles={customStyles}
                            theme={theme => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    neutral50: '#000000;',  // Placeholder color
                                },
                            })}
                         />
                </div>
               
                <StateList  data={filteredData}/>
                
                
            </div>
        );
    }


}

export default TestCentersData;