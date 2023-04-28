import {Platform} from 'react-native';

// NUMBERS FOR INCOME
export const MIN_INCOME = 1000;
export const MAX_INCOME = 9999999;

// NUMBERS FOR USERS
export const MIN_USERS = 9000;
export const MAX_USERS = 9999999999;

// MONTHS
export const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

// PLATFORMS
export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
