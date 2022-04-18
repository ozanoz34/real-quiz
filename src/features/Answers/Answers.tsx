import { Field } from 'react-final-form';

import { QuestionTypeModel, QuestionTypeEnum } from '../Question/Question.model';

type Props = {
  answer: string;
  question: string;
  type: QuestionTypeModel;
}

const styles: React.CSSProperties = {
  marginBottom: '10px',
};

const Answers = ({ answer, question, type }: Props) => {
  let inputType='';
  switch(type) {
    case QuestionTypeEnum.singleChoice:
      inputType= 'radio';
      break;
    case QuestionTypeEnum.multipleChoice:
      inputType= 'checkbox';
      break;
    default:
      break;
  };

  return (
    <label style={styles}>
      <Field
        name={question}
        component="input"
        type={inputType}
        value={answer}
      />
      <span>{answer}</span>
    </label>
  );
};

export default Answers;
