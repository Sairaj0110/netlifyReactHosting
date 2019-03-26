import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Education extends Component {
    render() {
        return (
            <div>
                
                <Grid style={{marginTop:'-50px'}}>
                <Cell col={4}>
                <h4>{this.props.startYear}-{this.props.endYear}</h4>
                </Cell>
                    <Cell col={8} className='schoolDetails'>
                    <h4>{this.props.schoolName}</h4>
                    <h6 style={{marginTop:'-15px'}}>{this.props.course}</h6>
                    <h6 style={{marginTop:'-15px'}}>{this.props.score}</h6>
                    <h6 style={{marginTop:'-15px'}}>{this.props.project}</h6>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Education;