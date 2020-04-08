import React from 'react';
import Select from 'react-select'

import WhoTweets from '../component/WhoTweets';
import MinOfHealth from '../component/MinOfHealth';
import '../styles/info.style.css';

const options = [
    {value: 'WHO', label: 'World Health Organization' },
    {value: 'MoHFW_INDIA', label: 'Ministry of Health'}
  ];

  
class Info extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = { 
        selectedOption: "",
        id:""
      };
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });       
      };
   
    render() {      
        const { selectedOption } = this.state;    
        let value = selectedOption.value;
        let tweets;
        if(value===undefined||value==="WHO"){
           tweets=<WhoTweets selectedOption={selectedOption.value}/>
        }
        if(value==='MoHFW_INDIA'){
            tweets=<MinOfHealth value={selectedOption.value}/>
         }

        return (
         <div> 
              <div className='section-1'>
                    <div className='header-title'>Official Tweets</div>
                    <div className='header-para'>Last 20 Tweets</div>
              </div>            
            <div>    
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            isSearchable={false} 
                            placeholder={"World Health Organization"}  
                         />
            </div>
            <div>
                {tweets}
            </div>
            
         </div>   
        );
    }
  }

export default Info;