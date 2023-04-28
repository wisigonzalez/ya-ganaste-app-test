import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';

import {BanksDetailsProps} from '../types';
import {BanksDetailsStyles} from './styles';
import {Button} from '../../components/atoms';
import {usersGenerator, numberFormatter} from '../../utils';

const BanksDetails: FC<BanksDetailsProps> = ({navigation, bank}) => {
  const styles = BanksDetailsStyles;
  const {age, url, bankName, description} = bank;

  return (
    <View testID="container-id" style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.bank}>{bankName}</Text>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{uri: url}}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.sectionOne}>Usuarios:</Text>
          <Text style={styles.usersText}>
            {numberFormatter(usersGenerator(), 0)}
          </Text>
          <Text style={styles.sectionTwo}>Descripción:</Text>
          <Text style={styles.descriptionText}>
            Con {age} años, {description}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Regresar"
            handleOnPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export {BanksDetails};
