import React, { useState, useEffect } from 'react';
import { useCookies, Cookies } from 'react-cookie';
import { ColumnGroup } from 'rbx/grid/columns/column-group';
import { Column } from 'rbx';
import useForm from 'react-hook-form';
import {
  NotificationWrapper,
  Content,
  Gradient,
  Form,
  Button,
  Input,
  CheckboxContainer,
  ErrorMessage,
  FormWrapper,
} from './styles';

const Notification = ({ toggleNotification }) => {
  const { register, handleSubmit, errors } = useForm();
  const [success, setSuccess] = useState(false);
  const [cookie, setCookie] = useCookies(['submission']);
  const onSubmit = data => {
    setCookie('submission', true);
    setSuccess(true);
    console.log(data);
  };
  useEffect(() => {
    if (cookie.submission && cookie.submission === 'true') {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [cookie.submission]);
  return (
    <NotificationWrapper>
      <Content>
        {!success ? (
          <>Join the smart people who save money on holidays</>
        ) : (
          <>
            Congratulations! You have joined the smart people who save money on
            holidays.
          </>
        )}
      </Content>
      <Gradient />
      <FormWrapper>
        {!success && (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <ColumnGroup className="is-mobile is-multiline">
              <Column
                mobile={{ size: 12 }}
                tablet={{ size: 6 }}
                desktop={{ size: 6 }}
                marginless
                paddingless
                className="email-column"
              >
                <Input
                  name="email"
                  type="text"
                  placeholder="Enter email"
                  ref={register({
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors.email && errors.email.type === 'required' && (
                  <ErrorMessage>
                    Please make sure you have not left this field blank
                  </ErrorMessage>
                )}
                {errors.email && errors.email.type === 'pattern' && (
                  <ErrorMessage>
                    Please make sure you have entered a valid email address
                  </ErrorMessage>
                )}
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
                    Icelolly Marketing Limited, wish to send you marketing
                    emails. If you consent, please tick to confirm:
                    <input
                      type="checkbox"
                      name="marketing"
                      id="marketing"
                      ref={register({ required: true })}
                    />
                  </label>
                  {errors.marketing && errors.marketing.type === 'required' && (
                    <ErrorMessage>
                      Please make sure you have consent to receiving marketing
                      information
                    </ErrorMessage>
                  )}
                </CheckboxContainer>
              </Column>
            </ColumnGroup>
          </Form>
        )}
        {success && (
          <Button
            type="button"
            className="is-marginless"
            onClick={() => toggleNotification(false)}
          >
            Close
          </Button>
        )}
      </FormWrapper>
    </NotificationWrapper>
  );
};

export default Notification;
