import styled from 'styled-components';
import colors from '../../utils/colors';

export const Wrapper = styled.section`
  width 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #DDEEF8, #CCE6F5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  @media (max-width: 400px) {
    padding-bottom: 0px;
  }
`;

export const Screen = styled.div`
  width: 500px;
  min-height: 100vh;
  background-color: ${colors.white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  @media (max-width: 500px) {
    width: 100%;
    border-radius: 0px;
  }
`;

export const Content = styled.div`
  padding: 20px;
`;

export const PageHeader = styled.div`
  background: linear-gradient(to bottom right, #2274a5 20%, #78bce3);
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: sticky;
  z-index: 50;
  top: 0;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
`;
