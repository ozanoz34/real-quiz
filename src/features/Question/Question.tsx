import Answers from "../Answers";

import { QuestionModel } from './Question.model';

type Props = {
  questionDetails: QuestionModel;
};

const answerContainerStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
};

const questionContainerStyles: React.CSSProperties = {
  maxWidth: '1000px',
  textAlign: 'left',
  margin: '20px',
};

const styles = {
  answerContainerStyles,
  questionContainerStyles,
};

const Question = ({ questionDetails }: Props) => {
  const { id, question, options, type } = questionDetails;

  return (
    <div className="question-container" style={styles.questionContainerStyles}>
      <label>{id}- {question}</label>
      <div className="answers-container" style={styles.answerContainerStyles}>
        {options.map(answer => 
          <Answers
            answer={answer}
            question={question}
            key={`${question}-${answer}`}
            type={type}
          />
        )}
      </div>
    </div>
  );
};

export default Question;
