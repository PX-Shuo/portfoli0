import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, HeaderFour, Hr, Tag, TagList, TitleContent, UtilityList, Img, Sup } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id='projects'>
    <SectionDivider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, year, description, stacks, code, source}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <Sup>{year}</Sup>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>
              <HeaderFour>Stack</HeaderFour>
            </TitleContent>
            <TagList>
              {stacks.map((stack, i) => (
                <Tag key={i}>{stack}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {code === 'private' ? (
              <ExternalLinks private>Private Project</ExternalLinks>
            ) : (
              <ExternalLinks href={code} target='_blank'>Code</ExternalLinks>
            )}
            {source === 'localhost' ? (
              <ExternalLinks localhost>Localhost</ExternalLinks>
            ) : (
              <ExternalLinks href={source} target='_blank'>Website/Demo</ExternalLinks>
            )}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;