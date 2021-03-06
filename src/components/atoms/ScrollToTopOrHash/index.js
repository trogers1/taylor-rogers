import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import scrollToHash from 'utils/scrollToHash';

const ScrollToTopOrHash = ({ location }) => {
  const { hash, pathname } = location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => scrollToHash(hash), [hash]);
  return null;
};

ScrollToTopOrHash.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(ScrollToTopOrHash);
