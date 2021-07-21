import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { GoBeaker } from "react-icons/go";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br></br>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked on a wide range of technologies in the developemnt world including:
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>  
          <ListParagraph>
            React.js, React Native, and Flutter
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>  
          <ListParagraph>
            Node.js, Express.js, AWS and MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>General Purpose</ListTitle>  
          <ListParagraph>
          C, Java, Python, JavaScript, Docker, Unity, C#, ARCore, ARFoundation, Dart, Github, GitLab
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
