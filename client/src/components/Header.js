import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    renderContent(){
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href = "/auth/google">Login With Google</a></li>
                );

            default:
                return [
                    <li key='3' style={{margin:'0 10px'}}>
                        <Link to = "/surveys"> My Surveys </Link>

                    </li>,
                <li key ='2'>
                    <a href = "/api/logout">Logout</a>
                </li>
                ];

        }
    }
    
    render(){
        console.log(this.props);
        return (
            <nav>
                 <div className = "nav-wrapper">
                     <Link 
                     to = {this.props.auth ? '/surveys' : '/'}
                     className ="left brand-logo"
                     >
                         PersonalSurveys

                     </Link>
                     <ul className = "right">
                         {this.renderContent()}

                     </ul>
                
                </div>

            </nav>
           
        )
    }
}

function mapStateToProps({auth}) {
    return {auth}
}

export default connect(mapStateToProps,null)(Header);