import React, { Component } from 'react';
import ErrorImage from './error.jpg';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('error', error);
        console.log('errorInfo', errorInfo);
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <img src={ErrorImage} />
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
