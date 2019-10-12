import React from 'react';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import { Column } from 'rbx';
import {
  NotificationWrapper,
  Content,
  Gradient,
  Form,
  Button,
  Input,
  CheckboxContainer,
} from './styles';

const Notification = () => (
  <NotificationWrapper>
    <Content>Join the smart people who save money on holidays</Content>
    <Gradient />
    <Form>
      <ColumnGroup className="is-mobile is-multiline is-vcentered">
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
          marginless
          paddingless
          className="email-column"
        >
          <Input type="text" placeholder="Enter email" />
        </Column>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 6 }}
          desktop={{ size: 6 }}
          marginless
          paddingless
          className="button-column"
        >
          <Button type="submit">I'm in!</Button>
        </Column>
        <Column
          mobile={{ size: 12 }}
          tablet={{ size: 12 }}
          desktop={{ size: 12 }}
          paddingless
          marginless
          className="marketing-column"
        >
          <CheckboxContainer>
            <label htmlFor="marketing">
              Icelolly Marketing Limited, wish to send you marketing emails. If
              you consent, please tick to confirm:
              <input type="checkbox" name="checkbox" id="marketing" />
            </label>
          </CheckboxContainer>
        </Column>
      </ColumnGroup>
    </Form>
  </NotificationWrapper>
);

export default Notification;
