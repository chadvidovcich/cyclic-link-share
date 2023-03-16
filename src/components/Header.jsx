import React from 'react';

function Header() {
  return (
    <header className="container flex text-center mx-auto py-10">
      <div className="md:w-4/6 mcx-auto">
        <h1 className="text-xl font-bold text-red-100 font-semibold animate-pulse">
          Chad Vidovcich
        </h1>
        <p className="text-white">Tagline text</p>
      </div>
    </header>
  );
}

export default Header;
