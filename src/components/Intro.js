import React from "react";
import styled from "styled-components";
import breakpoint from "../styled/breakpoint";

const Intro = () =>
  <Wrapper>
    <Hello>Hello</Hello>
    <Text>
      My name is <strong>Ravigopal Kesari</strong>, visual enthusiast and a
      software engineer who <del>makes</del> crafts websites and applications.
    </Text>

    <TextSmall>
      I work as a nexus between design and frontend, making websites scalable
      and lightning fast. I am interested in building systems, photography and
      cycling.
    </TextSmall>
  </Wrapper>;

const Wrapper = styled.section`
  margin-top: 5rem;

  ${breakpoint.tablet`
    margin-top: 10rem;
  `};
`;

const Hello = styled.small`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.16rem;
`;

const Text = styled.p`
  font-family: ${props => props.theme.primaryTypeface};
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 1.25;
  margin: 0.8rem auto 0 auto;

  ${breakpoint.tablet`
    font-size: 4.8rem;
  `};
`;

const TextSmall = styled(Text)`
  font-size: 1.8rem;
  line-height: 1.5;

  ${breakpoint.tablet`
    font-size: 2.4rem;
`};
`;

export default Intro;
