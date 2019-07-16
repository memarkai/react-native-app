import { call, put } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';

// import { NavigationActions } from 'react-navigation';

import { PatientsActions } from '~/store/ducks/patients';
import * as api from '~/services/api';


export function* login({ email, password }) {
  try {
    yield call(api.login, email, password);
    yield put(PatientsActions.patientLoginSuccess());
    // yield NavigationActions.navigate({ routeName: 'Search' });
    yield showMessage({ message: 'Bem-vindo ao MarkAI', type: 'success' });
  } catch (err) {
    yield put(PatientsActions.patientLoginFailure(err));
    yield showMessage({ message: err.message, type: 'danger' });
  }
}
