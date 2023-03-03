import styled from 'styled-components/native';

import { theme } from '../../global';
import { logo } from '../../helpers';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.gradients.choqueC2};
  padding-horizontal: 40px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
  source: {
    uri: logo,
  },
})`
  height: 150px;
  width: 150px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.transparency.dark25,
})`
  height: 50px;
  width: 100%;
  border-color: #dcdcdc;
  border-width: 1px;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-horizontal: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: ${theme.colors.transparency.light25};
  border: 1px solid white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 10px;
  width: 60%;
  align-items: center;
`;

export const SubmitText = styled.Text`
  ${theme.typography.Body1};
  color: ${theme.colors.base.black};
`;
export const RegisterButton = styled.TouchableOpacity``;
export const RegisterButtonText = styled.Text`
  font-size: 16px;
  color: #0072c6;
  text-align: center;
  margin-top: 20px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const ForgotPasswordText = styled.Text`
  ${theme.typography.Overline}
  color: ${theme.colors.gradients.choqueC1};

  margin-bottom: 20px;
  width: 100%;
`;
