type QuestionModel = {
  id: number;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  options: string[];
};

export type { QuestionModel };
