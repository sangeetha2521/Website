import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { rootSaga } from "./rootSaga";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
