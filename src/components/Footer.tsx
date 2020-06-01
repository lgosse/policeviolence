import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        <img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
      </a>
      <br />
      <span className="footer__cc-sentence">
        This work is licensed under a &nbsp;
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" >
          Creative Commons Attribution - NonCommercial - ShareAlike 4.0 International License
        </a >.
      </span>
    </footer>
  );
}

export default Footer;
