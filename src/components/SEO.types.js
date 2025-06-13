import PropTypes from 'prop-types';

export const SEOPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export const SEODefaultProps = {
  type: 'website'
};
