import { FormDataModel } from "./QuizPage.model";
import { QuestionModel } from "../../features/Question/Question.model";

const checkResult = (formData: FormDataModel, questions: QuestionModel[]): number => {
  let grade = 0;
  const questionValue = 100 / questions.length;

  questions.forEach(question => formData[question.question] === question.correctAnswer ? grade+=questionValue : null);

  return grade;
};

export { checkResult };