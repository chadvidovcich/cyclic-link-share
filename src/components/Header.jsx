import React from 'react';
import tw from 'tailwind-styled-components';

const HeaderStyles = tw.header`
text-zinc-300
mx-auto
text-center
flex 
flex-col

pt-6
pb-14

`;

function Header() {
	return (
		<HeaderStyles>
			<h1 className='text-4xl font-bold text-slate-50 pb-4'>Chad Vidovcich</h1>
			<p className='text-slate-50'>Mechanical Engineer | Full-Stack Software Engineer | Good Human</p>
		</HeaderStyles>
	);
}

export default Header;
