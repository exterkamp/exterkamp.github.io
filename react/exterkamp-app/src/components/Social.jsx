import React, { Component } from 'react';
import '../styles/Social.css'

class Social extends Component {
    render() {
        return(
            <div className="Social-Media-Icons">
                <ul>
                    <li>
                        <a href="http://facebook.com/shane.exterkamp">
                            <i className="fa fa-facebook fa-3x paper"></i>
                        </a>
                    </li>
                    <li>
                        <a href="http://linkedin.com/in/shane-exterkamp">
                            <i className="fa fa-linkedin fa-3x paper"></i>
                        </a>
                    </li>
                    <li>
                        <a href="http://github.com/exterkamps">
                            <i className="fa fa-github fa-3x paper"></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:shaneexterkamp5@gmail.com">
                            <i className="fa fa-envelope fa-2x paper"></i>
                        </a>
                    </li>
			    </ul>
            </div>
        );
    }
}

export default Social;