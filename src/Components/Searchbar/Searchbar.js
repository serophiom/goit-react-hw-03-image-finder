import { Component } from 'react';
import './Searchbar.css'
// import { ImSearch } from 'react-icons/im';

export default class Searchbar extends Component {
    state = {
        imageName: '',
    };

    handleNameChange = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();

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
                // autocomplete="off"
                // autofocus
                placeholder="Search images and photos"
                onChange={this.handleNameChange}
                />
            </form>
            </header>
        );
    }
}

