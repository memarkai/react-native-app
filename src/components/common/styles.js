import styled from 'styled-components/native';
import { Button, Input, Slider } from 'react-native-elements';

export const Form = styled.View`
    width: 60%;
`;


export const FormInput = styled(Input).attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.6)',
  borderBottomColor: '#59abb2',
  inputStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    width: '100%',
    paddingBottom: 2,
  },
})`
`;

export const FormButton = styled(Button).attrs({
  buttonStyle: {
    backgroundColor: '#59abb2',
  },
  containerStyle: {
    marginTop: 15,
    marginLeft: 20,
  },
})``;


export const FormSlider = styled(Slider).attrs({
  thumbTintColor: '#59abb2',
  minimumTrackTintColor: '#59abb2',
  maximumTrackTintColor: '#fff',
})`
  padding-bottom: 0px;
`;

export const FormSliderMeasure = styled.Text`
  padding-top: 0px;
  align-self: flex-end;
  color: #fff;
`;

export const FormLabel = styled.Text`
  align-self: flex-start;
  color: #fff;
  font-weight: 300;
`;

export const PageContainer = styled.View`
  background: #14465e;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
