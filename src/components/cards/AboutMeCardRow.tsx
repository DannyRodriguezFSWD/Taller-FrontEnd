import React from "react";
import styled from "styled-components";
import { themes } from "../../styles/ColorStyles";
import { MediumText } from "../../styles/TextStyles";

interface AboutMeCardRowProps {   
  title: string;
  value: string | number;
}

const AboutMeCardRow = (props: AboutMeCardRowProps) => {

  const formatDate = (value: string | number): string => {
    if(typeof value === "number") {
      let date = new Date(value);
      return date.toLocaleDateString();
    } else {
      return value;
    }
  }

  const githubLink =  (title: string) => {
    if(title.startsWith('http')) {
      //let link = window.open(title)
      return title
    }
  }

  return (
    <InfoDetailBox>
      <InfoKey>{props.title}</InfoKey>
      <InfoValueWrapper>
          <InfoValue>{
            formatDate(props.value)            
          }</InfoValue>
          <LinkValue href={githubLink(props.title)} target="_blank" rel="noopener" >{
            githubLink(props.title)
          }</LinkValue>

      </InfoValueWrapper>
    </InfoDetailBox>
  ); 
};

const InfoDetailBox = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  column-gap: 6px;
`;

const InfoValueWrapper = styled.div`
    
`;

const InfoKey = styled(MediumText)`
  font-weight: bold;
  color: ${themes.light.text1};

  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`;

const InfoValue = styled(MediumText)`
  color: ${themes.light.text1};
  margin-bottom: 8px;

  @media (prefers-color-scheme: dark) {
    color: ${themes.dark.text1};
  }
`;

const LinkValue = styled.a`
    
`;

export default AboutMeCardRow
;
