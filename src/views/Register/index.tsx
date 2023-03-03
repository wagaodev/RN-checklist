import React from 'react';

import * as S from './styles';

export const Register = () => {
  return (
    <S.RegisterContainer>
      <S.RegisterForm>
        <S.RegisterInput placeholder="Nome" />
        <S.RegisterInput placeholder="E-mail" keyboardType="email-address" />
        <S.RegisterInput placeholder="Senha" secureTextEntry />
        <S.RegisterButton>
          <S.RegisterButtonText>Cadastrar</S.RegisterButtonText>
        </S.RegisterButton>
      </S.RegisterForm>
    </S.RegisterContainer>
  );
};
