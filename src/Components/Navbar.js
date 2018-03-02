import React from 'react';

class Navbar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map((page, i) => {
        return (
        <a href={'/' + page} key={ "page_" + i}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

export default Navbar;