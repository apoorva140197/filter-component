import styled from 'styled-components';

export const StyledIntroduction = styled.div`
text-align: center;
`;

export const StyledIntroductionHeader = styled.h1`
 font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 1.28571429em;
  text-transform: none;
  color: rgba(0, 0, 0, 0.87);

  .sub-header {
    font-weight: 400;
    font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 1.2em;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export const StyledIntroductionVersion = styled.p`
font-family: "Source Sans Pro", "Lucida Grande", sans-serif;
  color: #757575;
`;
export const StyledIntroductionInstall = styled.div`
display: inline;
  border: 1px solid lightgrey;
  padding: 10px 20px;
  border-radius: 5px;
  font-variant-ligatures: none;
  font-family: "Fira Mono", "Andale Mono", "Consolas", monospace;
  letter-spacing: 0px;
  line-height: 24px;

  &:hover {
    background-color: #f6f9fc;
  }
`;

export const StyledIntroductionSpacing = styled.div`
margin-top: 40px;
`;

export const StyledIntroductionHeading = styled.h2`
font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: 700;
  line-height: 1.28571429em;
  text-transform: none;
  color: rgba(0, 0, 0, 0.87);
`;

export const StyledIntroductionListItem = styled.li`
 font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 5px;
`;

export const StyledIntroductionContent = styled.p`
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  color: rgba(0, 0, 0, 0.87);
`;
