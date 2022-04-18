import { QuestionModel } from "../../features/Question/Question.model";

import { FormDataModel } from "./QuizPage.model";

const compareArrays = (array1: string[], array2: string[] | string) => {
  if (array1.length === array2.length) {
    return array1.every(element => {
      if (array2.includes(element)) {
        return true;
      }

      return false;
    });
  }

  return false;
}

const checkResult = (formData: FormDataModel, questions: QuestionModel[]): number => {
  let grade = 0;

  if(!formData) {
    return grade;
  }
  const questionValue = 100 / questions.length;

  questions.forEach(question => {
    if(Array.isArray(formData[question.question]) && Array.isArray(question.correctAnswer)) {
      return compareArrays(question.correctAnswer, formData[question.question]) ? grade+=questionValue : null;
    }
    else {
      return formData[question.question] === question.correctAnswer ? grade+=questionValue : null;
    }
  });

  return grade;
};

export { checkResult };