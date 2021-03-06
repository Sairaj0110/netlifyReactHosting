import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    togglecategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-grid">
                    <Card shadow={0} style={{ width: '310px', height: '370px', margin: 'auto' }}>
                        <CardTitle expand style={{ background: 'url(https://www.hopetutors.com/wp-content/uploads/2018/01/angular-5-training-in-chennai.png) bottom right 15% no-repeat #fff' }}></CardTitle>
                        <CardText>
                        The application uses Bootstrap in front-end with Angular 5, backend as Python and DB as MongoDB.
                    </CardText>
                    </Card>
<br/>
                    <Card shadow={0} style={{ width: '310px', height: '370px', margin: 'auto' }}>
                        <CardTitle expand style={{ background: 'url(https://www.hopetutors.com/wp-content/uploads/2018/01/angular-5-training-in-chennai.png) bottom right 15% no-repeat #fff' }}></CardTitle>
                        <CardText>
                        The application used Material UI in front-end with Angular, backend as Node JS with Express JS and Mongo as DB.
                        </CardText>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="project-grid">
                    <Card shadow={0} style={{ width: '260px', height: '320px', margin: 'auto' }}>
                        <CardTitle expand style={{ background: 'url(https://cdn0.froala.com/assets/editor/pages/B/frameworks/react-6a9ca3fcd0c84c07c1d8bbbad0eb7dfe.svg) bottom right 15% no-repeat #fff' }}></CardTitle>
                        <CardText>
The Project uses React MDL library. Components are reused. Worked with props. 
                </CardText>
                    </Card>

                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Angular</Tab>
                    <Tab>React</Tab>
                </Tabs>

                <Grid >
                    <Cell col={12}>
                        <div className='content'>
                            {this.togglecategories()}
                        </div>
                    </Cell>
                </Grid>

            </div>

        )
    }
}

export default Projects;