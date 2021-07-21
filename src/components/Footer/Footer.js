import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    
    <FooterWrapper>
      <LinkList>
        <LinkItem color= 'white'>Contact Me</LinkItem>
        <LinkColumn>
          <LinkTitle>Phone Number</LinkTitle>
          <LinkItem href="tel:954-559-3073">954 - 559 - 3073</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mukatizain@gmail.com">mukatizain@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="http://github.com/epiczain1234/">
        <AiFillGithub size="3rem"/>
        </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/zain-mukati-167597187/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="http://instagram.com">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
