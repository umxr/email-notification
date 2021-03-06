import styled from '@emotion/styled';
import { Navbar } from 'rbx';

const NavBarWrapper = styled.div`
  position: relative;
`;

const CustomNavBar = styled(Navbar)`
  background-color: ${props => props.backgroundColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  min-height: 53px;
`;

const NotificationCount = styled.div`
  background-color: #4a90e2;
  border: 1px solid #fff;
  border-radius: 100%;
  color: #fff;
  font-size: 13px;
  line-height: 15px;
  height: 15px;
  width: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -6px;
  top: -3px;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
`;

export { CustomNavBar, NotificationCount, NavBarWrapper, ContentWrapper };
