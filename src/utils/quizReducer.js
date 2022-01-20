import { createContext } from 'react';

export function quizReducer(state, action) {
  function getCurrentQuestion() {
    return state.questions[state.currentQuestion];
  }

  switch (action.type) {
    case 'setQuestions': {
      return {
        ...state,
        questions: action.payload,
        totalQuestions: action.payload.length,
        quizState: 'ready',
        currentQuestion: 0,
      };
    }
    case 'startQuiz': {
      return {
        ...state,
        quizState: 'running',
      };
    }
    case 'submitAnswer': {
      const isCorrect =
        action.payload.toLowerCase() ===
        getCurrentQuestion().answer.toLowerCase();
      const isLast = state.currentQuestion + 1 === state.totalQuestions;
      if (isLast) {
        return {
          ...state,
          quizState: 'completed',
        };
      }
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        correctAnswers: isCorrect
          ? state.correctAnswers + 1
          : state.correctAnswers,
      };
    }
    default: {
      return state;
    }
  }
}

export const initialState = {
  quizState: 'init',
  questions: null,
  currentQuestion: null,
  currentAnswer: '',
  correctAnswers: 0,
};

export const StateContext = createContext();
export const DispatchContext = createContext();
