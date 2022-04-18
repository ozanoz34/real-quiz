type Props = {
  grade?: number;
};

const FormResult = ({ grade }: Props) => (
  <div className="form-result">
    <p>Thank you for taking the Quiz</p>
    <h2>Your got {grade} points</h2>
  </div>
);

export default FormResult;
