import React from 'react';
import { Column } from 'rbx';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import { Email } from '../Icons';
import { CustomNavBar, NotificationCount } from './styles';
import { IconWrapper } from '../Icons/styles';

const Header = () => (
  <CustomNavBar backgroundColor="#E3004A">
    <ColumnGroup className="is-mobile is-multiline" style={{ width: '100%' }}>
      <Column
        marginless
        paddingless
        desktop={{
          size: 11,
        }}
        tablet={{
          size: 11,
        }}
        mobile={{
          size: 10,
        }}
      >
        <div className="flex-div">Logo Here</div>
      </Column>
      <Column
        desktop={{
          size: 1,
        }}
        tablet={{
          size: 1,
        }}
        mobile={{
          size: 2,
        }}
        marginless
        paddingless
      >
        <div className="flex-div">
          <IconWrapper height={23} width={20}>
            <Email size={18} height={23} width={20} fill="#fff" />
            <NotificationCount>1</NotificationCount>
          </IconWrapper>
        </div>
      </Column>
    </ColumnGroup>
  </CustomNavBar>
);

export default Header;
