import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import FetchSearch from '../FetchSearch/FetchSearch';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import LoaderOfImages from '../Loader/Loader';
import Modal from '../Modal/Modal';
import './App.css';
import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  state = {
    imageName: '',
    images: [],
    pageNumber: 1,
    isLoad: false,
    modalWindow: false,
    modalImage: '',
    alt: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      const startPage = 1;
      this.setState({ isLoad: true, pageNumber: 1 });
      FetchSearch(this.state.imageName, startPage).then(response => {
        this.setState({ images: response.hits, isLoad:false });
      })
    }
  };

  getImageName = (value) => {
    this.setState({ imageName: value });
  };

  handleAddImagesButton = () => {
    let nextPage = this.state.pageNumber + 1;
    this.setState({ page: nextPage, isLoad: true });
    FetchSearch(this.state.imageName, nextPage).then(response => {
      this.setState({
        images: [...this.state.images, ...response.hits], isLoad:false });
    }).finally(() => {
      this.scroll();
    })
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    })
  }

  openModal = event => {
    const idOfElement = +event.target.dataset.id;
    const currentImage = this.state.images.filter((image) => {
      return image.id === idOfElement;
    });
    currentImage?.forEach((element) => {
      this.setState({ modalImage: element.largeImageURL, alt: element.tags })
    });
    this.setState({ modalWindow: true });
  };

  handleSearchSubmit = imageName => {
    this.setState({ imageName });
  };

  modalSwith = () => {
    this.setState(({ modalWindow }) => ({ modalWindow: !modalWindow}))
  }

  render() {
    const { images, isLoad, modalWindow, modalImage, alt } = this.state;

    return (
      <>
      <Searchbar onSubmit={this.handleSearchSubmit} />
      <ImageGallery images={images} clickOnImage={this.openModal} />
      {images.length > 0 && <Button clickOnButton={this.handleAddImagesButton} />}
      {isLoad && <LoaderOfImages />}
      {modalWindow && (
        <Modal modalImage={modalImage} alt={alt} closeModal={this.modalSwith} />
      )}
      <ToastContainer autoClose={3000} />
      </>
  );
  }
};