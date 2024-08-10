import { create } from "zustand";
import { text } from "../constants/text";
interface TypingState {
  text: string;
  mistakesIndex: Set<number>;
  index: number;
  isFinished: boolean;
  isStarted: boolean;
  timer: number;
  typedWords: number;
  increaseIndex: () => void;
  decreaseIndex: () => void;
  addMistake: (index: number) => void;
  removeMistake: (index: number) => void;
  setIsFinished: (isFinished: boolean) => void;
  setIsStarted: (isStarted: boolean) => void;
  setTimer: (time: number) => void;
  doubleText: () => void;
  increaseTypedWords: () => void;
  reset: () => void;
}

export const useTypingStore = create<TypingState>((set) => ({
  text: text,
  mistakesIndex: new Set<number>(),
  index: 0,
  isFinished: false,
  isStarted: false,
  timer: 0,
  typedWords: 0,
  increaseIndex: () => set((state) => ({ index: state.index + 1 })),
  decreaseIndex: () =>
    set((state) => ({ index: Math.max(0, state.index - 1) })),
  addMistake: (index: number) =>
    set((state) => {
      const updatedMistakes = new Set(state.mistakesIndex);
      updatedMistakes.add(index);
      return { mistakesIndex: updatedMistakes };
    }),
  removeMistake: (index: number) =>
    set((state) => {
      const updatedMistakes = new Set(state.mistakesIndex);
      updatedMistakes.delete(index);
      return { mistakesIndex: updatedMistakes };
    }),
  setIsFinished: (isFinished: boolean) =>
    set(() => {
      return {
        isFinished: isFinished,
      };
    }),
  setIsStarted: (isStarted: boolean) =>
    set(() => {
      return {
        isStarted: isStarted,
      };
    }),
  setTimer: (time: number) =>
    set(() => {
      return {
        timer: time,
      };
    }),
  doubleText: () =>
    set((state) => {
      return { text: state.text + " " + state.text };
    }),
  increaseTypedWords: () =>
    set((state) => {
      return { typedWords: state.typedWords + 1 };
    }),
  reset: () =>
    set(() => {
      return {
        index: 0,
        mistakesIndex: new Set<number>(),
        isFinished: false,
        isStarted: false,
        typedWords: 0,
        timer: 0,
      };
    }),
}));
