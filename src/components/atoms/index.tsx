import styled from 'styled-components';
import colors from '../../utils/colors';

interface ButtonProps {
  color?: string;
  backgroundColor?: string;
  width?: string | number;
  height?: string | number;
  boxShadow?: string;
}

export const Button = styled.button`
  padding: 8px;
  background-color: ${(props: ButtonProps) => props.backgroundColor || 'white'};
  color: ${(props: ButtonProps) => props.color || 'black'};
  width: ${(props: ButtonProps) => props.width || '100%'};
  height: ${(props: ButtonProps) => props.height || 'max-content'};
  border: none;
  outline: none;
  border-radius: 10px;
  box-shadow: ${(props: ButtonProps) => props.boxShadow || 'none'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  :hover {
    color: ${(props: ButtonProps) => props.backgroundColor || 'white'};
    background-color: ${(props: ButtonProps) => props.color || 'black'};
  }
`;

export const ButtonGroupWrapper = styled.div`
  display: flex;
  gap: 7px;
`;

interface GapProps {
  height?: number;
  width?: number;
}

export const Gap = styled.div`
  height: ${(props: GapProps) => props.height || 0}px;
`;

interface TextProps {
  fontSize?: number | string;
  fontWeight?: '300' | '400' | '500' | '600' | '700';
  color?: string;
}

export const Text = styled.p`
  font-size: ${(props: TextProps) => props.fontSize || '1em'};
  font-weight: ${(props: TextProps) => props.fontWeight || 'normal'};
  color: ${(props: TextProps) => props.color || colors.white};
`;

export const LinkItem = styled.div`
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  background: linear-gradient(to bottom left, #c7efcf, #96bcd9);
  transition: background 0.3s !important;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 1em;
  color: ${colors.white};
  :hover {
    background: linear-gradient(to left, #c7efcf, #96bcd9);
  }
`;

export const FloatingButtonWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
  left: 0;
`;
