import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component {

    static propTypes = {
        btnText: PropTypes.string,
        h1Text: PropTypes.string.isRequired,
        newArray: PropTypes.array.isRequired
    };

    static defaultProps = {
        btnText: 'default props text'
    };

    btnOnClick(event) {
        console.log('Button clicked!', event);
    }

    render() {
        console.log('array', this.props.newArray);
        return (
            <div style={{backgroundColor: 'red'}} className="test">
                <h1>{ this.props.h1Text }</h1>
                <h3>It's really working!</h3>
                <button onClick={this.btnOnClick}>{ this.props.btnText || 'Default text' }</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App h1Text="This is H1 text" newArray={[1, 2, 3]}/>,
    document.getElementById('app')
);
