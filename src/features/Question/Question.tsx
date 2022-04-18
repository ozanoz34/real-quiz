import Answers from "../Answers";
import { QuestionModel } from './Question.model';

type Props = {
  questionDetails: QuestionModel;
  onClickHandler: (e: any) => void;
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

const Question = ({questionDetails, onClickHandler}: Props) => {
  const {id, question, options} = questionDetails;
  const answers = options;

  return (
    <div className="question-container" style={styles.questionContainerStyles}>
      <p>{id}- {question}</p>
      <div className="answers-container" style={styles.answerContainerStyles}>
        {answers.map(answer => 
          <Answers
            answer={answer}
            question={question}
            onClickHandler={onClickHandler}
            key={`${question}-${answer}`}
          />
        )}
      </div>
    </div>
  );
};

export default Question;
