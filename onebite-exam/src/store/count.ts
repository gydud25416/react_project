import { create } from "zustand";
import { combine, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useCountStore = create(
  subscribeWithSelector(
    immer(
      combine({ count: 0 }, (set, get) => ({
        actions: {
          increaseOne: () => {
            set((state) => {
              state.count += 1;
            });
          },
          decreaseOne: () => {
            set((state) => {
              state.count -= 1;
            });
          },
        },
      })),
    ),
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  (count, pervCount) => {
    // Listner 함수
    console.log(count, pervCount);

    const store = useCountStore.getState(); // 현재 count store값을 반환해준다.
    // useCountStore.setState((store)=>({}))
  },
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
