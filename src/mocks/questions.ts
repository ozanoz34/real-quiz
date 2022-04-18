import { QuestionModel } from '../features/Question/Question.model';

type Props = {
  response_code: number;
  results: QuestionModel[];
}

const data: Props = {
  response_code: 0,
  results: [
    {
      id: 1,
      category: "History",
      type: "singleChoice",
      difficulty: "hard",
      question: "When did Spanish Peninsular War start?",
      correctAnswer: "1808",
      options: [
        "1806",
        "1810",
        "1809",
        "1808"
      ]
    },
    {
      id: 2,
      category: "Science: Computers",
      type: "multipleChoice",
      difficulty: "easy",
      question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correctAnswer: ["Final", "Static"],
      options: [
        "Static",
        "Private",
        "Final",
        "Public"
      ]
    }
  ]
};

export default data;