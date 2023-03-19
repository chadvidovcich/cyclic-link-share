import React from 'react';

function Header() {
  return (
    <header className="container flex text-center mx-auto py-10 ">
      <div className=" w-full">
        <h1 className="text-xl font-bold text-blue-100 text-center font-semibold animate-pulse">
          Chad Vidovcich
        </h1>
        <p className="text-white">
          Full-Stack Software Engineer | Mechanical Engineer
        </p>
      </div>
    </header>
  );
}

export default Header;
