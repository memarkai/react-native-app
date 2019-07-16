import styled from 'styled-components/native';
import {
  Button, Input, Slider, CheckBox,
} from 'react-native-elements';

export const Form = styled.View`
    width: 60%;
`;


export const FormInput = styled(Input).attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.7)',
  borderBottomColor: '#59abb2',
  inputStyle: {
    textAlign: 'center',
    color: '#fff',
    width: '100%',
    fontSize: 13,
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

export const FormField = styled.View`
  margin-top: 20px;
`;

export const FormCheckBox = styled(CheckBox).attrs({
  checkedColor: '#fff',
  uncheckedColor: '#fff',
  iconType: 'material',
  checkedIcon: 'check-box',
  uncheckedIcon: 'check-box-outline-blank',
  containerStyle: {
    backgroundColor: 0,
    borderWidth: 0,
    marginLeft: 0,
    padding: 0,
  },
  textStyle: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '300',
  },
})`
`;

export const PageContainer = styled.View`
  background: #14465e;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;
