import { Form as FinalForm } from 'react-final-form';

import Question from "../../features/Question";
import { QuestionModel } from "../Question/Question.model";

const styles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '100px',
};

type Props = {
  onSubmit: (e: any) => void;
  questions: QuestionModel[];
}

const Form = ({onSubmit, questions}: Props) => (
  <FinalForm
    style={styles}
    onSubmit={onSubmit}
    initialValues={{}}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        {questions.map(question => 
          <Question
            questionDetails={question}
            key={question.question}
          />
        )}
        <button type="button" onClick={form.reset}>Reset Form</button>
        <button type="submit">Submit</button>
      </form>
    )}
  >
  </FinalForm>
);

export default Form;
