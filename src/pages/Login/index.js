import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { showMessage } from 'react-native-flash-message';

import {
  Form, FormInput, FormField, FormButton,
} from '~/components/common/styles';
import { Container, Styles } from './styles';


import { PatientsActions } from '~/store/ducks/patients';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  hasErrors = () => {
    const { email, password } = this.state;
    const errors = !email || !password;
    if (!password) showMessage({ message: 'Informe sua senha', type: 'danger' });
    if (!email) showMessage({ message: 'Insira um e-mail válido', type: 'danger' });
    return errors;
  };

  handleLogin = () => {
    const { dispatch, navigation } = this.props;
    const { email, password } = this.state;
    // if (!this.hasErrors()) {
    dispatch(PatientsActions.patientLoginRequest(email, password));
    navigation.navigate('Search');
    // }
  };

  render() {
    const { email, password } = this.state;
    const { loading } = this.props;
    return (
      <Container>
        <Form>
          <FormInput
            value={email}
            onChangeText={value => this.setState({ email: value })}
            placeholder="E-mail"
            textContentType="emailAddress"
            leftIcon={{
              type: 'material', name: 'email', size: 15, color: '#fff',
            }}
          />
          <FormInput
            value={password}
            onChangeText={value => this.setState({ password: value })}
            placeholder="Senha"
            textContentType="password"
            secureTextEntry
            leftIcon={{
              type: 'material', name: 'lock', size: 15, color: '#fff',
            }}
          />
          <FormButton
            title="Login"
            onPress={this.handleLogin}
            loading={loading}
            raised
          />
        </Form>
      </Container>
    );
  }
}

Login.navigationOptions = {
  title: 'Entrar no MarkAi',
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loading: state.patients.loading,
});

export default connect(mapStateToProps)(Login);
