import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SiteSection = styled.section`
  padding: 20px 0;
  display: grid;
  gap: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 64px;
  font-weight: 700;
  text-align: center;
  text-shadow:
    -1px -1px #fff,
    -2px -2px #fff,
    -1px 1px #fff,
    -2px 2px #fff,
    1px 1px #fff,
    2px 2px #fff,
    1px -1px #fff,
    2px -2px #fff,
    -3px -3px 2px #bbb,
    -3px 3px 2px #bbb,
    3px 3px 2px #bbb,
    3px -3px 2px #bbb;
  color: steelblue;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a5d8a;
  border: 2px solid #2a5d8a;
  color: white;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  transition: all 250ms ease-in-out;
`;

export const NotificationBlock = styled.div`
  margin: 0 auto;
  padding: 40px;
  width: 100%;
  max-width: 800px;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c6455a;
  font-weight: 700;
  font-size: 26px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
