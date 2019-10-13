import styled from '@emotion/styled';

const NotificationWrapper = styled.div`
  position: absolute;
  top: 53px;
  right: 24px;
  width: 600px;
  z-index: 31;
  @media screen and (max-width: 768px) {
    width: 100%;
    right: 0;
  }
  &:before {
    content: '';
    z-index: 31;
    position: absolute;
    top: -15px;
    right: 0;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #1c92e4;
    @media screen and (max-width: 768px) {
      right: 24px;
    }
  }
`;

const Content = styled.div`
  padding: 25px;
  color: #fff;
  font-size: 22px;
  text-align: center;
  background: linear-gradient(360deg, #5bbde4 0%, #1c92e4 100%);
`;

const Gradient = styled.div`
  height: 30px;
  width: 100%;
  background: linear-gradient(180deg, #1e507d 0%, #62cdd4 100%);
`;

const FormWrapper = styled.div`
  padding: 30px 45px;
  background: linear-gradient(180deg, #edddce 0%, #f4ece2 100%);
`;

const Form = styled.form`
  @media screen and (max-width: 768px) {
    .email-column {
      order: 1;
    }
    .button-column {
      order: 3;
    }
    .marketing-column {
      order: 2;
    }
  }
`;

const Button = styled.button`
  background-color: #ffa004;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border-radius: 3px;
  height: 40px;
  width: 100%;
  margin-left: 15px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Input = styled.input`
  border: 1px solid #cccccc;
  border-radius: 3px;
  height: 40px;
  background-color: #fff;
  color: #333;
  font-size: 13px;
  padding: 15px;
  width: 100%;
  margin-right: 15px;
  &::placeholder {
    color: #333;
    font-style: italic;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
    margin-right: 0;
  }
`;

const CheckboxContainer = styled.div`
  margin-top: 15px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 15px;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 10px;
    color: #999;
  }
  input {
    margin-left: 5px;
    @media screen and (max-width: 768px) {
      margin-left: 10px;
    }
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  line-height: 14px;
  margin-top: 10px;
`;

export {
  NotificationWrapper,
  Content,
  Gradient,
  FormWrapper,
  Form,
  Button,
  Input,
  CheckboxContainer,
  ErrorMessage,
};
