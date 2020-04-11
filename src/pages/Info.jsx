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
         <div style={{marginLeft:20, marginRight:20}}> 
              <div className='info-head'>
                    <div className='header-title'>Official Tweets</div>
                    <div className='header-para'>Last 10 Tweets</div>
              </div>            
            <div className='info-select'>    
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            isSearchable={false} 
                            placeholder={"World Health Organization"}  
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
            <div>
                {tweets}
            </div>
            
         </div>   
        );
    }
  }

export default Info;