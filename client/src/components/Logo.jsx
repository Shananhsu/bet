import React, { Component } from 'react';
class Logo extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="auto_left">
                    <a className="logo" href = "/">
                        <img src="images/logo/logo2.png" alt="logo_no_show"                        
                        />
                    </a>
                </div>
            </React.Fragment>
        );
    }
}

export default Logo;