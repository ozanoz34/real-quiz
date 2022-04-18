type Props = {
  answer: string;
  question: string;
  onClickHandler: (e: any) => void;
}

const styles: React.CSSProperties = {
  marginBottom: '10px',
};

const Answers = ({ answer, question, onClickHandler }: Props) => {
  return (
    <label style={styles}>
      <input type="radio" value={answer} name={question} onClick={onClickHandler} />
      <span>{answer}</span>
    </label>
  );
};

export default Answers;
