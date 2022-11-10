import PropTypes from 'prop-types';
import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.handleClose();
    }
  };

  onBackdropClick = () => {
    this.props.handleClose();
  };

  render() {
    return (
      <div onClick={this.onBackdropClick}>
        <div>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};
