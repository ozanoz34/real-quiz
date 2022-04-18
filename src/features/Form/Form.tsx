import Question from "../../features/Question";
import { QuestionModel } from "../Question/Question.model";

const styles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '100px',
};

type Props = {
  onClickHandler: (e: any) => void;
  onSubmit: (e: any) => void;
  questions: QuestionModel[];
}

const Form = ({onSubmit, questions, onClickHandler}: Props) => (
  <form style={styles} onSubmit={onSubmit}>
    {questions.map(question => <Question questionDetails={question} key={question.question} onClickHandler={onClickHandler}/>)}
    <button type="submit">Submit</button>
  </form>
);

export default Form;
