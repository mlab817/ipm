import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>Public Investment Program</p>;

const FirstRightText = () => (
  <p>
    The 2017-2022 Public Investment Program (PIP) contains the rolling list of priority programs and projects (PAPs) to be implemented by the national government (NG), government-owned and controlled corporations (GOCCs), government financial institutions (GFIs), and other national government offices and instrumentalities within the medium term (or the plan period from 2017 to 2022), which respond to the outcomes in the Philippine Development Plan (PDP) and its Results Matrices (RM).
  </p>
);

const SecondLeftText = () => <p>About</p>;

const SecondRightText = () => (
  <p>
    The Investment Programming and Management System was developed by the Investment Programming Division to address its perennial problem 
    on managing the data of programs and projects for the DA Public Investment Program.
  </p>
);

const BannerText = () => <h1>Investment Programming and Management System</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
