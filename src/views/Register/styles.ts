import styled from 'styled-components/native';

export const RegisterContainer = styled.View`
  background-color: #f8f8f8;
  flex: 1;
  padding: 16px;
`;

export const RegisterForm = styled.View`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-top: 32px;
`;

export const RegisterInput = styled.TextInput`
  border: none;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: #0086b3;
  padding: 12px;
  border-radius: 8px;
`;

export const RegisterButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 16px;
`;
