import {Holding} from '../types/dashboardTypes';
import axios from 'axios';

const endpoints = {
  dashboard: 'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
};

export const getDashboard = () => {
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  return axios.get<{userHolding: Holding[]}>(endpoints.dashboard, {headers});
};
