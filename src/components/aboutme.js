import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Experience from './experience'

class AboutMe extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <h3 style={{ textAlign: 'center' }}>General Info.</h3>

                        <div className='resume-right-col' style={{ padding: '10px' }}>
                            <h5>Marital Status : Single</h5>
                            <h5>Nationality : Indian</h5>
                            <h5>Age : 27 years</h5>
                            <h5>Experience : 5+ years</h5>
                            <h5>Location : Mumbai, India</h5>
                            <h5>Languages : English, Hindi and Marathi</h5>
                        </div>
                    </Cell>
                    <Cell col={4}>
                        <h3 style={{ textAlign: 'center' }}>Trainings and Certifications</h3>
                        <div className='resume-right-col' style={{ padding: '10px' }}>
                            <h5>
                                <Experience
                                    startYear={2017}
                                    post="MEAN Stack"
                                    jobName="Trained in MEAN Stack by Asterix Solutions, Mumbai"
                                />
                                <br />
                                <Experience
                                    startYear={2016}
                                    post="Core Java"
                                    jobName="Trained by Hexaware Technologies"
                                />
                                <br />
                                <Experience
                                    startYear={2015}
                                    post="Markit EDM"
                                    jobName="Trained and certified by IHS Markit, UK"
                                />
                                <br />
                                <Experience
                                    startYear={2013}
                                    post="OCPJP"
                                    jobName="KAMAL Classes, Mumbai"
                                />
                            </h5>
                        </div>
                    </Cell>
                    <Cell col={4}>
                        <h3 style={{ textAlign: 'center' }}>Interests</h3>
                        <div className='resume-right-col' style={{ padding: '10px' }}>
                            <div className="contact-list">
                                <List>
                                    <ListItem >
                                        <ListItemContent style={{ fontSize: '25', fontFamily: 'Anton', marginTop:'-50px' }}>
                                        <Grid>
                                        <Cell col={4} style={{paddingRight: '71px'}}>
                                            <i className="fa fa-music" aria-hidden="true"/>
                                            </Cell>
                                            <Cell col={8} style={{margin:'Auto',justifyContent: 'space-between'}}>
                                            Music
                                            </Cell>
                                            </Grid>
                                            </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{ fontSize: '25', fontFamily: 'Anton', marginTop:'-50px' }}>
                                        <Grid>
                                        <Cell col={4} style={{paddingRight: '71px'}}>
                                        <img className="image-aboutme" src='https://cdn3.iconfinder.com/data/icons/vacation-4/32/vacation_18-512.png' alt="Fitness" />
                                        </Cell>
                                            <Cell col={8} style={{margin:'Auto',justifyContent: 'space-between'}}>
                                            Fitness
                                            </Cell>
                                            </Grid>
                                            </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                        <ListItemContent style={{ fontSize: '25', fontFamily: 'Anton', marginTop:'-50px' }}>
                                        <Grid>
                                        <Cell col={4} style={{paddingRight: '71px'}}>
                                        <img className="image-aboutme" src='https://cdn4.iconfinder.com/data/icons/world-travel-guide/512/travel-04-512.png' alt="Travelling"/>
                                        </Cell>
                                            <Cell col={8} style={{margin:'Auto',justifyContent: 'space-between'}}>
                                            Travelling
                                            </Cell>
                                            </Grid>
                                            </ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemContent style={{ fontSize: '25', fontFamily: 'Anton', marginTop:'-50px' }}>
                                        <Grid>
                                        <Cell col={4} style={{paddingRight: '71px'}}>
                                        <img className="image-aboutme" src='https://cdn0.iconfinder.com/data/icons/transportation-138/50/93-512.png' alt="Driving"/>
                                        </Cell>
                                            <Cell col={8} style={{margin:'Auto',justifyContent: 'space-between'}}>
                                            Driving
                                            </Cell>
                                            </Grid>
                                            </ListItemContent>
                                    </ListItem>

                                </List>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe;