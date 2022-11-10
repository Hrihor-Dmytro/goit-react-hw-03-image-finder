import { PropTypes } from 'prop-types';
import { ImageItem } from '../ImageGalleryItem/ImageItem';

export const ImageGallery = ({ items }) => (
  <ul>
    {items.map(({ webformatURL, largeImageURL, id, tags }) => (
      <ImageItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
