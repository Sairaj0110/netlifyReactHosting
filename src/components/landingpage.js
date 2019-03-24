import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>

                        <div className="banner-text">
                            <img className="image" src="https://cdn.dribbble.com/users/199982/screenshots/4044699/furkan-avatar-dribbble.png"
                                alt="avatar" />
                            <h1>UI Developer</h1>
                            <hr />
                            <p>ANGULAR | HTML/CSS | BOOTSRAP | REACT | MONGODB | NODE JS | AG-GRID</p>
                          

                            <div className="social-links">
                                {/* linkedin */}
                                <a href='https://www.linkedin.com/in/sairaj-patil-77500a50/' target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* github */}
                                <a href='https://github.com/Sairaj0110' target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;