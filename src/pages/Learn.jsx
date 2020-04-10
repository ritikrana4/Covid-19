import React from 'react';

import img_1 from '../assets/do-1.png'; 
import img_2 from '../assets/do-2.png'; 
import img_3 from '../assets/do-3.png'; 
import img_4 from '../assets/do-4.png'; 
import img_5 from '../assets/do-5.png'; 
import img_6 from '../assets/do-6.png'; 

import '../styles/learn.style.css'

const Learn =()=>{
    return(
        <div className='learn'>
                <div className='section-1'>
                    <div className='header-title'>Learn</div>
                    <div className='header-para'>What to do &amp; What Not</div>
                </div>
                
                
                <div className='section-2'>
                    <div className='title'>Do's</div>
                    <div className='grp-out'>
                        <div><img alt='img' src={img_1}/></div>
                        <div className='grp-in'>
                            <div className='grp-title'>Wear Masks</div>
                            <div className='grp-para'>Helps you in filtering out very <br/> small 
                             particles that could <br/>possibly  containCoronavirus.
                             </div>
                        </div>
                    </div>
                    <div className='grp-out'>
                        <div><img alt='img' src={img_2}/></div>
                        <div className='grp-in'>
                            <div className='grp-title'>Wash your Hands Often</div>
                            <div className='grp-para'>Washing your hands very often <br/>will 
                                decrease the chances of <br/> Virus entering
                                your body.
                             </div>
                        </div>
                    </div>
                    <div className='grp-out'>
                        <div><img alt='img' src={img_3}/></div>
                        <div className='grp-in'>
                            <div className='grp-title'>Maintain Social Distancing</div>
                            <div className='grp-para'>Maintaining social distancing <br/>can 
                            help us all get rid of this <br/>  pandemic sooner.
                             </div>
                        </div>
                    </div>
                </div>
                <div className='section-3'>
                    <div className='title'>Dont's</div>
                    <div className='grp-out'>
                        
                        <div className='grp-in'>
                            <div className='grp-title'>Don’t spread Fake News</div>
                            <div className='grp-para'>Don’t forward anything that is
                            <br/>not coming from official sources.</div>
                        </div>
                        <div className='image'><img alt='img' src={img_4}/></div>

                    </div>
                    <div className='grp-out'>
                        
                        <div className='grp-in'>
                            <div className='grp-title'>Don’t Panic</div>
                            <div className='grp-para'>Panicking won’t help, Taking
                                                <br/>Precautions will.
                             </div>
                        </div>
                        <div className='image'><img alt='img' src={img_5}/></div>
                    </div>
                    <div className='grp-out'>
                        
                        <div className='grp-in'>
                            <div className='grp-title'>Don’t Go Out</div>
                            <div className='grp-para'>It’s that once in a lifetime chance<br/>
                                that you can saved the world <br/>while sitting on your couch.<br/> Do that.</div>
                        </div>
                        <div className='image'><img alt='img' src={img_6}/></div>

                    </div>
                </div>
        </div>
    )
}
//#FAFFF9

export default Learn;