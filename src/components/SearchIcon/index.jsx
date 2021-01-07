import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = ({ size, color }) => (
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M24 9.5C24 14.7467 19.7467 19 14.5 19C12.4492 19 10.5501 18.3501 8.99751 17.2451L2.12132 24.1213L0 22L6.8569 15.1431C5.68996 13.5652 5 11.6132 5 9.5C5 4.25329 9.25329 0 14.5 0C19.7467 0 24 4.25329 24 9.5ZM21 9.5C21 13.0899 18.0899 16 14.5 16C10.9101 16 8 13.0899 8 9.5C8 5.91015 10.9101 3 14.5 3C18.0899 3 21 5.91015 21 9.5Z" fill={color} />
  </svg>
);

SearchIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

SearchIcon.defaultProps = {
  size: '24',
  color: 'var(--color-primary)',
};

export default SearchIcon;
