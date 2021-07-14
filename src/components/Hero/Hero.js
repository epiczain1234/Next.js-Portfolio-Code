import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Zain. <br />
        Welcome to My  Portfolio :^)
      </SectionTitle>
      <SectionText>
        This is a showcase of some of the projects that I've done over the years.
      </SectionText>
      <Button onClick={() =>window.location = 'http://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;