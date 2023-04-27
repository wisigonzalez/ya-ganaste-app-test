import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {BanksProps} from '../types';
import {BanksStyles} from './styles';
import {MONTHS} from '../../constants';
import {Card} from '../../components/atoms';
import {List} from '../../components/organisms/List';

const Banks: FC<BanksProps> = ({navigation, banks = [], incomes = 0}) => {
  const styles = BanksStyles;
  const today = new Date();
  const month = MONTHS[today.getMonth()];

  return (
    <View testID="container-id" style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido de vuelta!</Text>
      <Text style={styles.welcomeName}>Luis González</Text>
      <Text style={styles.sectionOne}>TUS INGRESOS</Text>
      <View style={styles.cardContainer}>
        <Card title={month} value={incomes} />
      </View>
      <Text style={styles.sectionTwo}>TUS BANCOS</Text>
      <View style={styles.listContainer}>
        <List navigation={navigation} data={banks} />
      </View>
    </View>
  );
};

export {Banks};
