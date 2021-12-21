import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>Shuo's Portfolio</SectionTitle>
      <SectionText>I'm currently working as an Front-end developer intern at <b>AI AUSTRALIA</b></SectionText>
      {/* <Button onClick={() => window.location = 'https://google.com'}>Button</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;