import { VGForm } from '../../components/form';
import './sign-in-layout.scss';
import { initialValues, SignInValues, validationSchema } from './constants';
import { useDispatch, useSelector } from 'react-redux'
import { loginUserRequest } from '../../store/actions/auth/auth.actions';

export const SignIn = () => {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.auth);
  const onSubmit = (values) => {
    dispatch(loginUserRequest(values))
  }

  return (
    <div className="sign-in-layout"> 
      <VGForm 
        loading={loading}
        message={message}
        error={error}
        validationSchema={validationSchema}
        initialValues={initialValues} 
        formValues={SignInValues} 
        onSubmit={onSubmit}
        buttonText={'Увійти'}
        title={'Вхід'}
      />
    </div>
  );
}
