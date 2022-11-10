import { PropTypes } from 'prop-types';
import { Modal } from '../Modal/Modal';
import { Component } from 'react';

export class ImageItem extends Component {
  state = {
    isModalVisible: false,
  };

  handleCloseModal = () => {
    this.setState({ isModalVisible: false });
  };

  handleOpenModal = () => {
    this.setState({ isModalVisible: true });
  };
  render() {
    return (
      <li>
        {this.state.isModalVisible && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            tags={this.props.tags}
            handleClose={this.handleCloseModal}
          />
        )}
        <img
          src={this.props.webformatURL}
          alt={this.props.tags}
          onClick={this.handleOpenModal}
        />
      </li>
    );
  }
}

ImageItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};
