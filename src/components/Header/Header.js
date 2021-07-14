import Link from 'next/link'; // allows linking pages or sections
import React from 'react';
import { AiFillFolder, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'; // icons
import { DiCssdeck } from 'react-icons/di';
// Importing styled components
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom: 20}}>
        <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
          </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="http://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="http://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="http://instagram.com">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
