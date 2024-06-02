import { createAsyncThunk } from '@reduxjs/toolkit';
import { exchangeCurrency } from 'service/exchangeAPI';
import { getUserInfo } from 'service/opencagedataApi';

export const getBaseCurrency = createAsyncThunk(
  'currency/getBaseCurrency',
  async (crd, thunkAPI) => {
    const state = thunkAPI.getState();
    const { baseCurrency } = state.currency;

    if (baseCurrency) {
      return thunkAPI.rejectWithValue('We already have base currency!');
    }
    try {
      const data = await getUserInfo(crd);
      const currency = data.results[0].annotations.currency.iso_code;
      return currency;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const convertCurrency = createAsyncThunk(
  'currency/convertCurrency',
  async (currency, thunkAPI) => {
    try {
      const data = await exchangeCurrency(currency);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
