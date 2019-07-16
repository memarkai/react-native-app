import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorMessageText: {
    color: '#fff',
  },
});

export const Container = styled.View`
    flex: 1;
    background: #14465e;
    justify-content: center;
    align-items: center;
`;
