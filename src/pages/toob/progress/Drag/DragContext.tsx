/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

const CreateContext = createContext({});
export default function DragContext({ children, ...props }: any) {
  const valueContext = useContext(CreateContext);
  return (
    <CreateContext.Provider
      value={{
        ...valueContext,
        ...props,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
}

export const useDragContext = () => {
  return useContext(CreateContext) as any;
};
