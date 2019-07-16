import { all, takeLatest } from 'redux-saga/effects';

import { Types as PatientsTypes } from '~/store/ducks/patients';

import * as PatientsSagas from '~/store/sagas/patients';


export default function* rootSaga() {
  yield all([
    takeLatest(PatientsTypes.PATIENT_LOGIN_REQUEST, PatientsSagas.login),
  ]);
}
