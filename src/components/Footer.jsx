import React from 'react';

function Footer() {
  return (
    <footer className="px-3 sm:px-0">
      <div className="container text-center mx-auto">
        <div className="md:w-4/6 mx-auto">
          <p className="py-4 text-center text-xs sm:text-sm font-light text-white">
            Thanks for visiting!
            <br />
            Deployed on <a href="https://www.cyclic.sh/">Cyclic</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
