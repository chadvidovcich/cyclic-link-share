import React from 'react';
import links from './links.json';
import tw from 'tailwind-styled-components';

const LinkStyles = tw.main`
  flex 
  font-bold
  text-center
  text-base
  text-zinc-400

`;

function Links() {
  return (
    <LinkStyles>
      <ul className="w-2/5  mx-auto">
        {links.map((link) => (
          <li className="mb-6" key={link.title}>
            <a
              className="block relative transition duration-200 border-2 border-zinc-400 rounded-2xl py-3 hover:bg-zinc-900/50 hover:text-zinc-50"
              href={link.url}
              alt={link.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute left-0 top-0 bottom-0 pl-4 flex items-center">
                {link.emoji}
              </span>
              <span className="">{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </LinkStyles>
  );
}
export default Links;
// md:w-4/5 lg:w-3/6
