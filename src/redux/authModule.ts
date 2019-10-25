import { createSlice } from 'redux-starter-kit';
import { useSelector } from 'react-redux';
import { rootReducer } from './store';

type AuthState = {
  isLogin: boolean;
  loading: boolean;
}

const authInitialState: AuthState = {
  isLogin: false,
  loading: false,
};

const authModule = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        login: (state, action) =>         ({...state, loading: true}),
        loginSuccess: (state, action) =>  ({isLogin: true, loading: false}),
        loginError: (state, action) =>    ({isLogin: false, loading: false}),
        
        logout: (state, action) =>        ({...state, loading: true}),
        logoutSuccess: (state, action) => ({isLogin: false, loading: false}),
        logoutError: (state, action) =>   ({isLogin: true, loading: false}),
    }
});

export const useAuth = () => useSelector((state: ReturnType<typeof rootReducer>) => state.auth);

export default authModule;