import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useCountStore = create(
  combine({ count: 0 }, (set, get) => ({
    actions: {
      increaseOne: () => {
        get();
        set((state) => ({
          count: state.count + 1,
        }));
      },
      decreaseOne: () => {
        set((state) => ({
          count: state.count - 1,
        }));
      },
    },
  })),
);

// export const useCountStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increaseOne: () => {
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decreaseOne: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//   },
// }));

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increaseOne);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decreaseOne);
  return decrease;
};
