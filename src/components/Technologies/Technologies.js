import React from 'react';
import { DiFirebase, DiReact,DiZend } from 'react-icons/di';
import { SiJavascript,SiPython,SiHtml5, SiCss3, SiRedux,SiReact,SiSass, SiExpress, SiNodedotjs,SiSqlite, SiFlask,SiPostgresql,SiGit,SiHeroku,SiAmazonaws,SiDocker,SiPostman } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. <br/>
      Languages: JavaScript and Python <br/>
      Front-End: HTML, CSS, ReactJs,Redux, and SASS   <br/>
      Back-End: Express, NodeJs, SQL Flask, and SQLAlchemy, PostgreSQL <br/>
      Other tools: Git, Heroku, AWS, Docker, Postman <br/>
      
    </SectionText>
    <List>
    <ListItem>
        <picture>
          <SiJavascript size="3rem" /> &nbsp;&nbsp;
          <SiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experiece in Javascript <br /> and Python <br />
            
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <SiHtml5 size="2.5rem" /> &nbsp;
          <SiCss3 size="2.5rem"/>
          <SiReact size="2.5rem"  /> &nbsp;
          <SiRedux size="2.5rem"/> &nbsp;
          <SiSass size="2.5rem"/>
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            HTML5, CSS3,<br />
             ReactJs, Redux,
             <br /> and SASS
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
        <SiExpress size="2.5rem" /> &nbsp;
        <SiNodedotjs size="2.5rem" /> &nbsp;
        <SiSqlite size="2.5rem" /> &nbsp;
        <SiFlask size="2.5rem" /> &nbsp;
        <SiPostgresql size="2.5rem" /> 
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Express, NodeJs, <br />
            Flask, SQLAlchemy, <br />
            and PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
        <SiGit size="2.4rem" /> &nbsp;
        <SiHeroku size="2.4rem" /> &nbsp;
        <SiAmazonaws size="2.4rem" /> &nbsp;
        <SiDocker size="2.4rem" />  &nbsp;
        <SiPostman size="2.4rem" /> 
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git, Heroku, <br />
            AWS, Docker, <br />
            Render, Postman
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
