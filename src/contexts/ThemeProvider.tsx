import { createContext, Dispatch, useReducer } from "react";

type StateType = {
  darkMode: Boolean;
};

type AcionType = { type: "LIGHTMODE" } | { type: "DARKMODE" };

type ContextType = {
  state: StateType;
  dispatch: Dispatch<AcionType>;
};

const initialState: StateType = { darkMode: true };

export const ThemeContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => undefined,
});

const themeReducer = (state: StateType, action: AcionType): StateType => {
  if (action.type === "LIGHTMODE") return { darkMode: false };
    if (action.type === "DARKMODE") return { darkMode: true };
    else return state;
};

export function ThemeProvider(props: React.PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
