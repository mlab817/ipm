import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      The <code>Content</code> component receives a <code>buildTime</code> prop
      that to display your site's build time: {buildTime}
    </p>
    <p>
      By importing the <strong>Footer</strong> component from
      gatsby-theme-carbon, we can supply our own props.
    </p>
    <p>
      The default export from a shadowed component will replace that component
      in the theme.
    </p>
    <p>
      <a href="https://www.gatsbyjs.org/docs/themes/api-reference/#component-shadowing">
        More about component shadowing
      </a>
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
  secondCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
};

const Logo = () => (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="64.000000pt" height="64.000000pt" viewBox="0 0 128.000000 128.000000"
     preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
    fill="#FFFFFF" stroke="none">
    <path d="M485 1201 c-121 -35 -235 -111 -302 -202 -37 -49 -38 -49 -54 -30
    -16 19 -18 17 -53 -58 -85 -182 -86 -354 -2 -535 64 -140 160 -238 299 -305
    124 -61 282 -80 408 -51 l56 13 -34 96 c-19 53 -43 119 -53 146 -22 62 -204
    548 -221 591 -12 30 -10 33 22 62 19 17 39 32 45 32 5 0 21 -21 34 -47 l23
    -48 10 39 c20 79 131 156 226 156 183 0 339 -299 257 -495 -20 -46 -82 -113
    -130 -138 -30 -15 -60 -21 -113 -21 -40 -1 -73 -2 -73 -4 0 -8 95 -258 101
    -265 11 -14 80 36 144 104 300 321 144 853 -282 963 -81 21 -230 20 -308 -3z
    m-61 -92 c37 -29 37 -89 0 -118 -56 -44 -124 -7 -124 67 0 35 4 42 33 56 43
    21 59 20 91 -5z m-162 -312 c219 -290 288 -379 288 -374 0 7 -124 340 -145
    390 -15 37 -15 38 12 62 32 27 71 50 76 44 5 -7 217 -583 217 -590 0 -4 -13
    -12 -30 -19 -16 -7 -30 -15 -30 -19 0 -4 13 -22 28 -41 52 -64 132 -169 132
    -174 0 -10 -106 -26 -173 -26 -88 0 -201 30 -277 73 -129 72 -247 225 -285
    367 -19 69 -19 219 -1 287 17 62 62 163 73 163 4 0 56 -65 115 -143z"/>
    <path d="M754 936 c-42 -19 -74 -62 -74 -102 0 -31 72 -241 105 -304 8 -15 31
    -42 52 -59 67 -55 158 -37 217 42 17 23 21 43 21 105 0 68 -4 86 -34 146 -75
    153 -183 217 -287 172z"/>
    </g>
  </svg>
);

const CustomFooter = () => <Footer Logo={Logo} links={links} Content={Content} />;

export default CustomFooter;
