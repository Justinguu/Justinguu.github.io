import React, { useState } from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
// import JungResume from "../Links/JungsResume.pdf"//

const Hero = (props) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            Jung Gu's <br />
            Personal Portfolio
          </SectionTitle>
          <SectionText>
            FULL STACK SOFTWARE ENGINEER <br />
            All my life I have been observant on how to make the world around me simpler or more productive. Software
            engineering opened that road for me to be able to develop new skills and start making a global impact.
            Transforming a hobby into a career has been an incredible experience and i hope to continue growing.
          </SectionText>

          {isShown ? (
            <>
              <Button onClick={() => setIsShown(!isShown)}>Hide Resume</Button>
              
              <iframe
                src="https://drive.google.com/file/d/1uSlEHFJBGO4ELbU9lLG95g63FOLXJD6F/preview"
                width="640"
                height="480"
                auto
              ></iframe>
            </>
          ) : (
            <Button onClick={() => setIsShown(!isShown)}>Show Resume</Button>
          )}
          <a href="https://drive.google.com/file/d/1uSlEHFJBGO4ELbU9lLG95g63FOLXJD6F/preview" target="_blank" rel="noopener noreferrer" ><Button>Download Resume</Button></a>

        </LeftSection>
      </Section>
      
    </>
  );
};

export default Hero;
