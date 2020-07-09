import { useState, BaseSyntheticEvent } from 'react';

const useForm = (defaultValues: Record<string, any> = {}) => {
  const [values, setValues] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (callback: (arg: Record<string, any>) => Promise<any>) => async (e?: BaseSyntheticEvent) => {
    if (e) e.preventDefault();
    try {
      setSubmitted(false);
      setError(false);
      setLoading(true);
      await callback(values);
      setSubmitted(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: any) => {
    if (event) event.persist();
    setValues((values: Record<string, any>) => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    loading,
    submitted,
    error
  };
};

export default useForm;
