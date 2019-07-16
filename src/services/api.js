import axios from 'axios';
import { AsyncStorage } from 'react-native';

const BASE_URL = 'http://10.0.3.2:8000/api';

// shared urls
const CREATE_USER = `${BASE_URL}/create/`;
const LOGIN = `${BASE_URL}/login/`;
const CREATE_SPECIALTY = `${BASE_URL}/specialty/create/`;
const LIST_SPECIALTIES = `${BASE_URL}/specialty/list/`;
const GET_SPECIALTY = `${BASE_URL}/specialty/get/`;
const CREATE_HEALTH_INSURANCE = `${BASE_URL}/insurance/create/`;
const LIST_HEALTH_INSURANCES = `${BASE_URL}/insurance/list/`;

// patients urls
const BASE_PATIENTS_URL = `${BASE_URL}/patients/`;
const GET_PATIENT = `${BASE_PATIENTS_URL}/get/`;
const LIST_PATIENTS = `${BASE_PATIENTS_URL}/list/`;

// clinics urls
const BASE_CLINICS_URL = `${BASE_URL}/clinics/`;
const GET_CLINIC = `${BASE_CLINICS_URL}/get/`;
const UPDATE_CLINIC = `${BASE_CLINICS_URL}/update/`;
const CREATE_DOCTOR_AT_CLINIC = `${BASE_CLINICS_URL}/doctor/create`;
const LIST_DOCTORS_AT_CLINIC = `${BASE_CLINICS_URL}/doctor/list/`;
const GET_DOCTOR_AT_CLINIC = `${BASE_CLINICS_URL}/doctor/get/`;

// schedule urls
const BASE_SCHEDULE_URL = `${BASE_URL}/schedule/`;
const CREATE_CONSULTATION = `${BASE_SCHEDULE_URL}/consultation/create/`; // clinic
const DELETE_CONSULTATION = `${BASE_SCHEDULE_URL}/consultation/delete/`; // clinic
const CANDIDATE_FOR_CONSULTATION = `${BASE_SCHEDULE_URL}/consultation/candidate/`; // patient
const REVOKE_CANDIDATURE_FOR_CONSULTATION = `${BASE_SCHEDULE_URL}/consultation/candidate/revoke/`; // patient
const LIST_CANDIDATES_FOR_CONSULTATION = `${BASE_SCHEDULE_URL}/consultation/candidate/list/`; // clinic
const LIST_CANDIDATES_FOR_CLINIC = `${BASE_SCHEDULE_URL}/consultation/candidate/clinic/list/`;
const LIST_CONFIRMED_CANDIDATURES_FOR_CLINIC = `${BASE_SCHEDULE_URL}/consultation/confirmed/clinic/list/`;
const LIST_CONSULTATIONS_FOR_DOCTOR = `${BASE_SCHEDULE_URL}/consultation/doctor/list/`;
const SEARCH_CONSULTATIONS = `${BASE_SCHEDULE_URL}/consultation/search/`;

// Async Storage
const TOKEN_ALIAS = '@markai:token';

const treatError = (error) => {
  throw (error);
};

const authHeader = () => {
  const storedToken = JSON.parse(AsyncStorage.getItem(TOKEN_ALIAS));
  if (storedToken) {
    return { Authorization: `Bearer ${storedToken}` };
  }
  return {};
};

// generic actions
const getData = async (URL, params = '', download = false) => {
  try {
    const response = await axios.get(URL + params, {
      headers: authHeader(),
      responseType: download ? 'blob' : 'json',
    });
    return response.data;
  } catch (error) {
    return treatError(error);
  }
};

const postFormData = async (URL, params = '', payload = {}) => {
  try {
    const response = await axios.post(URL + params, payload, { headers: Object.assign(authHeader(), { 'Content-Type': 'multipart/form-data' }) });
    return response.data;
  } catch (error) {
    return treatError(error);
  }
};

const postData = async (URL, params = '', payload = {}) => {
  try {
    const response = await axios.post(URL + params, payload, { headers: authHeader() });
    return response.data;
  } catch (error) {
    return treatError(error);
  }
};


export const login = async (email, password) => {
  try {
    const response = await axios.post(LOGIN, { email, password });
    const jwt = response.data;
    return AsyncStorage.setItem(TOKEN_ALIAS, jwt);
  } catch (error) {
    return treatError(error);
  }
};
