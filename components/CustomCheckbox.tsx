// src/components/CustomCheckbox.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type CustomCheckboxProps = {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
};

export function CustomCheckbox({ value, onValueChange }: CustomCheckboxProps) {
  return (
    <TouchableOpacity
      style={[styles.checkbox, value && styles.checked]}
      onPress={() => onValueChange(!value)}
    >
      <Text style={styles.checkmark}>{value ? '✔️' : ''}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#0361dd',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#0361dd',
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
  },
});
