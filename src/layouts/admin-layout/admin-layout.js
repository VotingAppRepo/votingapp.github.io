import { useState, useEffect,  useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { VGForm } from '../../components/form';
import { initialValues, CreateModelValues, validationSchema } from './constants';
import { createNewModelRequest } from '../../store/actions/admin/admin.actions';
import { adminTabs } from './constants';
import { ModelsTable } from '../../components/modelsTable';
import { UsersTable } from '../../components/usersTable';
import { Loader } from '../../components/loader';
import { getUsersRequest, getModelsRequest } from '../../store/actions/admin/admin.actions';
import { TabsWrapper } from '../../components/tabsWrapper';
import './admin-layout.scss';

export const AdminLayout = () => {
  const [ currentTabIndex, setTabIndex ] = useState(0)
  const dispatch = useDispatch();
  const { loading, error, message} = useSelector(state => state.admins);

  useEffect(() => {
    if(currentTabIndex === 0) dispatch(getUsersRequest())
    if(currentTabIndex === 1) dispatch(getModelsRequest())
  }, [currentTabIndex])

  const onSubmit = ({files,name}) => {
    const form = new FormData();
    form.append('Name', name)
    files.forEach((img) => form.append('Images', img))
    dispatch(createNewModelRequest(form))
  }

  const getCurrentTab = useMemo(() => {
    switch (currentTabIndex){
      case 0:
        return <UsersTable/>
      case 1:
        return <ModelsTable/>
      case 2:
        return <VGForm 
          error={error}
          message={message}
          validationSchema={validationSchema}
          initialValues={initialValues} 
          formValues={CreateModelValues} 
          onSubmit={onSubmit}
          buttonText={'Додати'}
          title={'Додайте модель'}
        />
      default:
        return <></>
    }
  }, [currentTabIndex])

  return (
    <div className="admin-layout"> 
      {loading ? <Loader/> : null}
      <TabsWrapper 
        currentTabIndex={currentTabIndex}
        getCurrentTab={getCurrentTab}
        setTabIndex={setTabIndex}
        tabs={adminTabs}
      />
    </div>
  );
}
