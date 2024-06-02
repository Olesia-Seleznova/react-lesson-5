import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'service/opencagedataApi';

export const getBaseCurrency = createAsyncThunk(
  'currency/getBaseCurrency',
  async (crd, thunkAPI) => {
    try {
      const data = await getUserInfo(crd);
      console.log(data);
      const currency = data.results[0].annotations.currency.iso_code;
      return currency;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
