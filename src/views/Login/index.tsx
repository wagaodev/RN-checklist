import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<any>();

  const handleLogin = () => {
    console.warn(username, password);
  };

  const handleNavigate = () => {
    navigation.navigate('Register');
  };

  return (
    <S.Container>
      <S.Logo />
      <S.Title>Bem-vindo ao Checklist</S.Title>
      <S.Subtitle>Por favor, informe seus dados</S.Subtitle>
      <S.Input
        onChangeText={setUsername}
        value={username}
        placeholder="CPF ou e-mail"
        autoCapitalize="none"
      />
      <S.Input
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
        secureTextEntry
      />
      <S.ForgotPasswordButton>
        <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
      </S.ForgotPasswordButton>
      <S.SubmitButton onPress={handleLogin}>
        <S.SubmitText>Entrar</S.SubmitText>
      </S.SubmitButton>

      <S.RegisterButton onPress={handleNavigate}>
        <S.RegisterButtonText>Não tenho conta</S.RegisterButtonText>
      </S.RegisterButton>
    </S.Container>
  );
};
