import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Zain Mukati. <br />
      </SectionTitle>
      <SectionText>
        A senior in Computer Science attending <br/>
        The University of Central Florida
      </SectionText>
      <Button onClick={() =>window.location = 'http://github.com/epiczain1234/'}>See More </Button>
    </LeftSection>
  </Section>
);

export default Hero;