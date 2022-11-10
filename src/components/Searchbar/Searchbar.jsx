import { Formik, Form, Field } from 'formik';

export const SearchbarForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.searchQuery);
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={{ searchQuery: '' }} onSubmit={handleSubmit}>
      {({ isSubmiting }) => (
        <Form>
          <button type="submit" disabled={isSubmiting}>
            Search
          </button>
          <Field
            name="searchQuery"
            type="text"
            placeholder="Search images and photos"
            autoComplete="off"
          />
        </Form>
      )}
    </Formik>
  );
};
