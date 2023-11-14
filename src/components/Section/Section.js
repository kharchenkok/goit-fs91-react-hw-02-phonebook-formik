import React from 'react';
import { SectionTitle, SiteSection } from '../../styles';

const Section = ({ title, children }) => {
  return (
    <SiteSection>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SiteSection>
  );
};
export default Section;
