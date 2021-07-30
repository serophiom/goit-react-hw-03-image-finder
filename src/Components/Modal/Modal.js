import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown);
    };

    handleKeydown = (event) => {
        if (event.code === "Escape") {
            this.props.closeModal();
        }
    };

    handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            this.props.closeModal();
            
        }
    };

    render() {
        const { modalImage, alt } = this.props;

        return createPortal(
            <div className="Overlay" onClick={this.handleBackdropClick}>
                <div className="Modal">
                <img src={modalImage} alt={alt} />
            </div>
            </div>,
        modalRoot
        )
    };
}