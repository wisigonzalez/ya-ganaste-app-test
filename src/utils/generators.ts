import {MAX_INCOME, MAX_USERS, MIN_INCOME, MIN_USERS} from '../constants';

export const incomesGenerator = (max = MAX_INCOME, min = MIN_INCOME) => {
  const incomes = Math.random() * (max - min + 1) + min;

  return incomes;
};

export const usersGenerator = (max = MAX_USERS, min = MIN_USERS) => {
  const users = Math.floor(Math.random() * (max - min + 1) + min);

  return users;
};
