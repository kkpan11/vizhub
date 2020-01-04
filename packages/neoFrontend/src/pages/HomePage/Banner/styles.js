import styled from 'styled-components';
import { isMobile } from '../../../mobileMods';
import { Z_BELOW } from '../../../styles';
import { Button } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${isMobile ? 'column' : 'row'};
  height: ${isMobile ? 600 : 400}px;
  position: relative;
  justify-content: space-around;
  align-items: center;
  color: white;
  margin-bottom: ${isMobile ? 30 : 0}px;
`;

export const Bar = styled.div`
  position: absolute;
  top: ${isMobile ? 0 : 30}px;
  bottom: ${isMobile ? 0 : 30}px;
  right: 0;
  left: 0;
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(to bottom, #55627c, #3d4b65);
  z-index: ${Z_BELOW};
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Message = styled.div`
  text-align: center;
`;

export const MessageTinyText = styled.div`
  font-size: 10px;
  font-weight: 500;
`;

export const MessageSmallText = styled.div`
  font-size: 16.8px;
  font-weight: 600;
`;

export const MessageLargeText = styled.div`
  font-family: Poppins;
  font-size: 28.8px;
  font-weight: 300;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const MessageList = styled.ul`
  text-align: left;
`;

export const MessageLink = styled.a`
  color: ${props => (props.isRed ? props.theme.attentionGrabber : 'white')};
  text-decoration: underline;
`;

export const MessageButton = styled(Button)`
  margin-top: 30px;
  border: solid 1px ${props => props.theme.attentionGrabber};
  font-size: 15px;
  color: white;
`;