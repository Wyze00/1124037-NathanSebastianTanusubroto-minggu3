import { createSlice } from "@reduxjs/toolkit";
import type { UserInfo } from "../type/UserInfo";

export type AuthState = {
    userInfo: UserInfo | undefined;
}

type AuthStateAction = {
    payload: UserInfo | undefined;
    type: string;
}

const initialState: AuthState = {
    userInfo: undefined,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserInfo: (_, action: AuthStateAction) => {
            return {
                userInfo: action.payload
            }
        }
    }
})

export const authAction = authSlice.actions;
export const authReducer = authSlice.reducer;