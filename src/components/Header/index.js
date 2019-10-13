import React, { useState, useEffect } from 'react';
import { Column } from 'rbx';
import { useCookies } from 'react-cookie';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import { Email } from '../Icons';
import {
  CustomNavBar,
  NotificationCount,
  NavBarWrapper,
  ContentWrapper,
} from './styles';
import { IconWrapper } from '../Icons/styles';
import Notification from '../Notification';

const Header = () => {
  const [notification, showNotification] = useState(false);
  const [cookie] = useCookies(['submission']);
  return (
    <NavBarWrapper>
      <CustomNavBar backgroundColor="#E3004A">
        <ColumnGroup
          className="is-mobile is-multiline"
          style={{ width: '100%' }}
        >
          <Column
            desktop={{
              size: 12,
            }}
            tablet={{
              size: 12,
            }}
            mobile={{
              size: 12,
            }}
            marginless
            paddingless
          >
            <ContentWrapper>
              <IconWrapper
                height={23}
                width={20}
                onClick={() => showNotification(!notification)}
              >
                <Email size={18} height={23} width={20} fill="#fff" />
                {Object.values(cookie).length === 0 && (
                  <NotificationCount>1</NotificationCount>
                )}
              </IconWrapper>
            </ContentWrapper>
          </Column>
        </ColumnGroup>
      </CustomNavBar>
      {notification && <Notification toggleNotification={showNotification} />}
    </NavBarWrapper>
  );
};

export default Header;
