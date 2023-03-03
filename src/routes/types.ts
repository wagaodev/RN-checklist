import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: { name: string };
  Register: { name: string };
};

export type THome = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type TLogin = NativeStackScreenProps<RootStackParamList, 'Login'>;

export type TRegister = NativeStackScreenProps<RootStackParamList, 'Register'>;
