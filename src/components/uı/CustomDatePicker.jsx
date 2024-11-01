import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Datepicker} from '@ui-kitten/components';

const CustomDatePicker = props => {
  const {onSelectDate} = props; // obje dağıtma yöntemi
  return (
    <Datepicker {...props} onSelect={nextDate => onSelectDate(nextDate)} />
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({});
