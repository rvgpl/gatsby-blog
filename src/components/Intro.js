import React from 'react';
import styled from 'styled-components';

const Intro = (props) => 
  <Wrapper>
    <Hello>Hello</Hello>
    <Text>My name is <strong>Ravigopal Kesari</strong>,<br />
     visual enthusiast and a software engineer who <del>makes</del> crafts websites and applications.</Text>

    <TextSmall>I work as a nexus between design and frontend, making websites scalable and lightning fast. I'm interested in building systems, photography and cycling.</TextSmall>
  </Wrapper>

const Wrapper = styled.section`
  margin-top: 10rem;
`;

const Hello = styled.small`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.16rem;
`;

const Text = styled.p`
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 1.25;
  margin: 0.8rem auto 0 auto;
  font-family: ${props => props.theme.primaryTypeface}
`;

const TextSmall = styled(Text)`
  font-size: 2.4rem;
  line-height: 1.5;
`;

export default Intro  