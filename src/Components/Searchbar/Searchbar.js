import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
    state = {
        imageName: '',
    };

    handleNameChange = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.imageName.trim() === '') {
            toast.error('Enter the image name');
            return;
        }
        
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' });
    };

    render() {
        return (
            <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.handleSubmit}>
                <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                className="SearchForm-input"
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                value={this.state.imageName}
                onChange={this.handleNameChange}
                />
            </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}