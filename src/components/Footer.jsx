import React from 'react';
import tw from 'tailwind-styled-components';

const FooterMainStyles = tw.footer`
text-zinc-300
  mx-auto
  pt-8
`;

const FooterLinkStyles = tw.div` 
h-14
w-fit
mx-auto
px-5
py-1
flex
justify-center
hover:bg-zinc-900/50
rounded-full
`;

function Footer() {
  return (
    <FooterMainStyles>
      <p className="pb-2">Deployed On</p>
      <FooterLinkStyles $as="a" href="https://www.cyclic.sh/">
        <img
          className="object-scale-down"
          src="https://www.cyclic.sh/images/cyclic-logo.png"
          alt="Logo and Link For Cyclic.sh"
        />
      </FooterLinkStyles>
    </FooterMainStyles>
  );
}
export default Footer;
