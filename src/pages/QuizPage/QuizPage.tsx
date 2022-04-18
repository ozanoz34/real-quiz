import { useState, useEffect } from 'react';

import Form from "../../features/Form";
import FormResult from '../../features/FormResult';
import data from '../../mocks/questions';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setFormDataValues, getFormData } from '../../redux/formData.redux';

import { checkResult } from './QuizPage.helpers';
import { FormDataModel } from './QuizPage.model';

const QuizPage = () => {
  const questions = data.results;
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [result, setResult] = useState<number>(); 
  const dispatch = useAppDispatch();
  const submittedForm = useAppSelector(getFormData);

  const onSubmit = async (values: FormDataModel) => {
    dispatch(setFormDataValues(values));
    setIsFormSubmitted(true);
  };

  const retakeQuizHandler = () => {
    dispatch(setFormDataValues({}));
    setIsFormSubmitted(false);
  }

  useEffect(() => {
    const res = checkResult(submittedForm, questions);
    setResult(res);
  }, [dispatch, submittedForm, questions]);

  return (
    <>
      {isFormSubmitted ? (
        <>
          <FormResult grade={result} />
          <button onClick={retakeQuizHandler}>Return to the Quiz</button>
        </>
      ): (
        <Form questions={questions} onSubmit={onSubmit} />
      )}
    </>
  );
};

export default QuizPage;
