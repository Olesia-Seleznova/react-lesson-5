import { createSlice } from '@reduxjs/toolkit';
import { convertCurrency, getBaseCurrency } from './currencyOps';

export const CurrencySlice = createSlice({
  name: 'currency',
  initialState: { baseCurrency: '', exchangeInfo: null },
  reducers: {
    getDefautCurrency: (state, action) => {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(convertCurrency.fulfilled, (state, action) => {
        state.exchangeInfo = action.payload;
      });
  },
});

export const { getDefautCurrency } = CurrencySlice.actions;
export const selectBaseCurrency = state => state.currency.baseCurrency;
export const selectExchangeInfo = state => state.currency.exchangeInfo;
