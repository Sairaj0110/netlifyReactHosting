import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Experience extends Component {
    render() {
        return (
            <div>
                
                <Grid style={{marginTop:'-50px'}}>
                <Cell col={4}>
                <h4>{this.props.startYear}-{this.props.endYear}</h4>
                </Cell>
                <Cell col={8} className='schoolDetails'>
                    
                    <h4>{this.props.post}</h4>
                    <h5 style={{marginTop:'-15px'}}>{this.props.jobName}</h5>
                    <h6 style={{marginTop:'-15px'}}>{this.props.jobDescription}</h6>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Experience;