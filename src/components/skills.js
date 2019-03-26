import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component{
    render(){
        return(
            <div>
                <Grid style={{marginTop:'-50px'}}>
                    <Cell col={12} style={{display:'flex'}}>
                    <Cell col={3}>
                    <h4>{this.props.skillName}</h4></Cell>
                    <Cell col={9} style={{marginTop:'47px'}}>
                    <ProgressBar style={{margin:'auto', width:'75%' }} progress={this.props.progress}/>
                    </Cell>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Skills;