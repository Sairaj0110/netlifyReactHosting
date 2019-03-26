import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} >
                        <div style={{ textAlign: 'center' }}>
                            <img className="image" src="https://cdn.dribbble.com/users/199982/screenshots/4044699/furkan-avatar-dribbble.png"
                                alt="avatar" />
                            <h3>Sairaj Patil : UI Developer</h3>
                        </div>
                        <p>I want to always keep innovating,evolving and contribute to build smart environment.</p>
                        <hr style={{ borderTop: '5px dotted black', margin: 'auto', color: 'white', width: '95%' }} />
                        <div style={{display:'flex'}}>
                        <Cell col={4} ><h5>Address : </h5></Cell>
                        <Cell col={8} >
                        <p style={{fontSize:'14px', marginTop:'24px'}}>E-101, Green Park, Sunil Nagar, DNC Road, Dombivili East, Thane, MH, India, 421201 </p></Cell>
                        </div>
                        <div style={{display:'flex', marginTop:'-30px'}}>
                        <Cell col={4} ><h5>Phone : </h5></Cell>
                        <Cell col={8} >
                        <p style={{fontSize:'14px', marginTop:'24px'}}>+91 9920-821-832</p></Cell>
                        </div>
                        <div style={{display:'flex', marginTop:'-30px'}}>
                        <Cell col={4} ><h5>Email : </h5></Cell>
                        <Cell col={8} style={{fontSize:'14px', marginTop:'32px'}}>
                        <a  href='mailto:sairaj0110@gmail.com' target='_blank' rel="noopener noreferrer">sairaj0110@gmail.com</a></Cell>
                        </div>
                        <div style={{display:'flex', marginTop:'-30px'}}>
                        <Cell col={4} ><h5>Web : </h5></Cell>
                        <Cell col={8} style={{fontSize:'14px', marginTop:'32px'}} >
                        <a  href='http://www.thesairaj.in' target='_blank' rel="noopener noreferrer">www.thesairaj.in</a></Cell>
                        </div>

                    </Cell>
                    <Cell col={8} className='resume-right-col'>
                        <h2 style={{ padding: '10px' }}>Education</h2>
                        <Education
                            startYear={2009}
                            endYear={2013}
                            schoolName="Terna Engineering College, Mumbai University"
                            course="B.E (Computer Science)"                            
                            score = "Accumulative score: 62.38%"
                            project="Graduation Project: Download Manager"
                        />
<br/>
                        <Education
                            startYear={2007}
                            endYear={2009}
                            schoolName="Birla College of Science"
                            course=" HSC (Science), Maharashtra State Board"                            
                            score = "Accumulative score: 76.5%"
                            project=""
                        />
<br/>
                        <Education
                            startYear={1998}
                            endYear={2007}
                            schoolName="Chandrakant Patkar Vidyalaya"
                            course="SSC, Maharashtra State Board"                            
                            score = "Accumulative score: 87.07%"
                            project=""
                        />
                        <hr style={{ borderTop: '5px dotted black', margin: 'auto', color: 'white', width: '95%' }} />
                        <h2 style={{ padding: '10px' }}>Experience</h2>

                        <Experience
                            startYear={2018}
                            endYear="Present"
                            post="Senior Angular Developer"
                            jobName="A Connexion Private Limited"
                            jobDescription="The application uses Bootstrap in front-end with Angular 5,
                            backend as Python and DB as MongoDB."
                        />

                        <Experience
                            startYear={2013}
                            endYear={2018}
                            post="Software Engineer"
                            jobName="Hexaware Technologies"
                            jobDescription="The application used Material UI in front-end with Angular,
                            backend as Node JS with Express JS and Mongo as DB."
                        />

                        <hr style={{ borderTop: '5px dotted black', margin: 'auto', color: 'white', width: '95%' }} />
                        <h2 style={{ padding: '10px' }}>Skills</h2>
                        <Skills
                            skillName='Angular'
                            progress={70} />
                        <Skills
                            skillName='React'
                            progress={30} />
                        <Skills
                            skillName='Html/CSS'
                            progress={80} />
                        <Skills
                            skillName='Mongo DB'
                            progress={30} />
                        <Skills
                            skillName='Node JS'
                            progress={30} />
                        <Skills
                            skillName='Ag-Grid'
                            progress={50} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;