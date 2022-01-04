import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { GoFile } from 'react-icons/go'

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: 'flex',
            color: 'white',
            alignItems: 'center',
            marginBottom: '20px'
          }}
        >
          {/* <DiCssdeck size='3rem' /> */}
          <GoFile size='3rem' />
          <Span>My Portfoli0</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Porjects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/PX-Shuo' target='_blank'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/shuoyanginaus/' target='_blank'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
