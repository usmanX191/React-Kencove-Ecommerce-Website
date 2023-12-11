import { createSlice,PayloadAction } from '@reduxjs/toolkit';
// import {storeData} from '../../public/Data/data';

const initialState:{
  Categories:string[],
  ratings: number,
  price: string[],
  availability: string[],
  filters:boolean,
} = {
  Categories:[],
  ratings: 0,
  price: [],
  availability: [],
  filters:false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    AddCategories: (state, action: PayloadAction<string[]>) => {
      state.Categories.push(...action.payload);
    },
    RemoveCategories: (state, action: PayloadAction<string[]>) => {
      state.Categories = state.Categories.filter((category: string) => !action.payload.includes(category));
    },
    RemoveAllCategories: (state) => {
      state.Categories = [];
    },
    updateRatings: (state, action: PayloadAction<number>) => {
      state.ratings = action.payload;
    },
    RemoveAllRatings: (state) => {
      state.ratings = 0;
    },
    AddPrice: (state, action: PayloadAction<string[]>) => {    
      state.price.push(...action.payload);
    },
    RemovePrice: (state, action: PayloadAction<string[]>) => {
      state.price = state.price.filter((price: string) => !action.payload.includes(price));
    },
    RemoveAllPrices: (state) => {
      state.price = [];
    },
    AddAvailability: (state, action: PayloadAction<string[]>) => {    
      state.availability.push(...action.payload);
    },
    RemoveAvailability: (state, action: PayloadAction<string[]>) => {
      state.availability = state.availability.filter((price: string) => !action.payload.includes(price));
    },
    RemoveAllAvailabilties: (state) => {
      state.availability = [];
    },
    updateFilters: (state, action: PayloadAction<boolean>) => {
      state.filters = action.payload;
    },
    RemoveAll: (state) => {
      // Reset all filters to initial state
      state.Categories = [];
      state.ratings = 0;
      state.price = [];
      state.availability = [];
      state.filters = false;
    },
  },
});

export const { AddCategories,RemoveCategories,RemoveAllCategories, updateRatings,RemoveAllRatings, AddPrice,RemovePrice, RemoveAllAvailabilties, AddAvailability, RemoveAvailability, RemoveAllPrices, updateFilters, RemoveAll } = filtersSlice.actions;
export default filtersSlice.reducer;