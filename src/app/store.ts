import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import formDataReducer from '../redux/formData.redux';

export const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
