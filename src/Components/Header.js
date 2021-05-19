import React from 'react';
import PropType from 'prop-types';

const Header = ({titulo}) => {
    return (
      <nav className="nav-wrapper light-blue darken-3">
          <a href="#!" className="brand-logo center">{titulo}</a>
      </nav>
    )
}

Header.propTypes = {
  titulo: PropType.string.isRequired
}


export default Header;