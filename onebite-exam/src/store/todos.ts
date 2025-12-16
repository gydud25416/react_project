import type { Todo } from "@/types";
import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initialState: {
  todos: Todo[];
} = {
  todos: [],
};

const useTodosStore = create(
  immer(
    combine(initialState, (set) => ({
      actions: {
        createTodo: (content: string) => {
          set((state) => {
            state.todos.push({
              id: String(new Date().getTime()),
              content: content,
            });
          });
        },
        deleteTodo: (targetId: string) => {
          set((state) => {
            state.todos = state.todos.filter((todo) => todo.id != targetId);
          });
        },
      },
    })),
  ),
);

export const useTodos = () => {
  const todos = useTodosStore((state) => state.todos);
  return todos;
};

export const useCreateTodo = () => {
  const createTodo = useTodosStore((state) => state.actions.createTodo); // selector 함수
  return createTodo;
};

export const useDeleteTodo = () => {
  const deleteTodo = useTodosStore((state) => state.actions.deleteTodo);
  return deleteTodo;
};
