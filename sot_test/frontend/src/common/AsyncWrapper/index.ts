import { RsetLoading } from "../../common/Slices/main";
import { store } from "../../hooks/store";

const asyncWrapper = (fn: Function) => {
  return (...args: any) => {
    return fn(...args).catch((error: Error) => {
      store.dispatch(RsetLoading({ value: false }));
      console.error(error);
      throw error;
    });
  };
};

export default asyncWrapper;
