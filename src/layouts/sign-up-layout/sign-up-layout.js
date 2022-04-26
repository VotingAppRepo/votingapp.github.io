import { VGForm } from '../../components/form';
import './sign-up-layout.scss';
import { initialValues, SignUpValues, validationSchema } from './constants';
import { useDispatch, useSelector } from 'react-redux'
import { registerUserRequest } from '../../store/actions/auth/auth.actions';

export const SignUp = () => {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.auth);

  const onSubmit = (values) => {
    dispatch(registerUserRequest(values))
  }

  return (
    <div className="sign-up-layout"> 
      <VGForm 
        loading={loading}
        error={error}
        message={message}
        validationSchema={validationSchema}
        initialValues={initialValues} 
        formValues={SignUpValues} 
        onSubmit={onSubmit}
        buttonText={'Зареєструватись'}
        title={'Реєстрація'}
      />
    </div>
  );
}
