export const Types = {
  PATIENT_LOGIN_REQUEST: 'PATIENT_LOGIN_REQUEST',
  PATIENT_LOGIN_SUCCESS: 'PATIENT_LOGIN_SUCCESS',
  PATIENT_LOGIN_FAILURE: 'PATIENT_LOGIN_FAILURE',
};

const success = (type, payload = {}) => ({ type, payload });
const failure = (type, err) => ({ type, err });

export const patientLoginRequest = (email, password) => ({ type: Types.PATIENT_LOGIN_REQUEST, email, password });
export const patientLoginSuccess = () => success(Types.PATIENT_LOGIN_SUCCESS);
export const patientLoginFailure = err => failure(Types.PATIENT_LOGIN_FAILURE, err);

export const PatientsActions = {
  patientLoginRequest,
  patientLoginSuccess,
  patientLoginFailure,
};

const INITIAL_STATE = {
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.PATIENT_LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.PATIENT_LOGIN_SUCCESS:
    case Types.PATIENT_LOGIN_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
