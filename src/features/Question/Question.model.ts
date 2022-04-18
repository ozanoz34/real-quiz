enum QuestionTypeEnum {
  singleChoice= 'singleChoice',
  multipleChoice= 'multipleChoice'
};

type QuestionTypeModel = 'singleChoice' | 'multipleChoice';

type QuestionModel = {
  id: number;
  category: string;
  type: QuestionTypeModel;
  difficulty: string;
  question: string;
  correctAnswer: string | string[];
  options: string[];
};

export type { QuestionModel, QuestionTypeModel };
export { QuestionTypeEnum };
