import { createSlice } from '@reduxjs/toolkit';
import { getBaseCurrency } from './currencyOps';

export const CurrencySlice = createSlice({
  name: 'currency',
  initialState: { baseCurrency: '' },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBaseCurrency.fulfilled, (state, action) => {
      state.baseCurrency = action.payload;
    });
  },
});
