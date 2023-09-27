import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import rightimg from '../../assets/images/landingright.png'
import arrowicon from '../../assets/images/arrow.png'
import { Avatar } from '@chakra-ui/react'
import style from  './LandingPage.module.css'
export default function LandingPage() {

    return (
        <div>
            <div className={style.landing} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", height: "700px",margin:'40px',gap:"50px",marginLeft:'10%' }}>
                <div className={style.firstCard} style={{width:"70%"}}>
                    <div style={{ fontSize: "40px", fontWeight: "700" }}>
                        <h1>Getting you <span style={{backgroundColor:"red",borderRadius:"50px",color:"white",fontSize:"14px",padding:"12px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>4.9</span><br /> <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' /> where you want to study. <Avatar name='forward icon'  src={arrowicon} /></h1>
                        <p style={{ fontSize: "24px", fontWeight: "500", }}>Everything you need to know for your study abroad journey: from first search to your first day on campus.</p>
                        
                    </div>
                    <div style={{boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",borderRadius:"10px",marginTop:"10px",minWidth:'450px'}}>
                        <Tabs>
                            <TabList>
                                <Tab>Courses</Tab>
                                <Tab>Services</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <div style={{border:"1px solid #dee6e8",borderRadius:"8px",padding:"10px",fontSize:'18px',marginBottom:"20px"}}>
                                        <label style={{fontWeight:"500",color:'#929293'}}>Subject</label><br/>
                                        <input style={{width:"100%",outline:'none'}} placeholder='where do you want to study'/>
                                    </div>
                                    <div  style={{border:"1px solid #dee6e8",borderRadius:"8px",padding:"10px",fontSize:'18px',display:"grid",gridTemplateColumns:"80% 20%"}}>
                                        <div>
                                        <label style={{fontWeight:"500",color:'#929293'}}>Where</label><br/>
                                        <input style={{width:"100%",outline:'none'}} placeholder='Your ideal country / region or institute'/>
                                        </div>
                                        <div style={{padding:"2px"}}>
                                        <button style={{backgroundColor:"#af8994",height:"100%",width:"100%",color:"white",borderRadius:'5px',display:'flex',alignItems:"center",minWidth:'84px'}}><Avatar style={{width:'20px',height:"26px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png'/> &nbsp;Search</button>
                                        </div>
                                        
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                </div>
                <div>
                    <img style={{ height: "600px",margin:'auto',borderRadius:"20px",minWidth:"320px" }} src={rightimg} />
                </div>
            </div>
        </div>
    )
}
