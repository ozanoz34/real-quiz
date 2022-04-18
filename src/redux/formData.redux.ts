import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { FormDataModel } from '../pages/QuizPage/QuizPage.model';

export interface FormDataReducerModel {
  formData: {
    [key: string]: string;
  };
};

export const reducerName = 'formData';

const initialState : FormDataReducerModel = {
  formData: {}
};

const formDataSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setFormDataValues: (state, action: PayloadAction<any>): FormDataReducerModel => ({
      ...state,
      formData: action.payload
    }),
  }
});

// selectors
const getFormData = (state: RootState): FormDataModel => state[reducerName].formData;

const { setFormDataValues } = formDataSlice.actions;

export {
  getFormData,
  setFormDataValues,
};

export default formDataSlice.reducer;