import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './profile.scss';
import { userTabs } from './constants';
import { TabsWrapper } from '../tabsWrapper';
import { Loader } from '../../components/loader';
import { getUserInfoRequest, getVotingStatsRequest } from '../../store/actions/user/user.actions';
import { ProfileInfo } from '../profileInfo';
import { Table } from 'antd';
import { columns } from './constants';



export const Profile = () => {
  const [ currentTabIndex, setTabIndex ] = useState(0)
  const dispatch = useDispatch();
  const { loading, stats, profile } = useSelector(state => state.users);

  useEffect(() => {
    if(currentTabIndex === 0) dispatch(getUserInfoRequest())
    if(currentTabIndex === 1) dispatch(getVotingStatsRequest())
  }, [currentTabIndex])


  const getCurrentTab = useMemo(() => {
    switch (currentTabIndex){
      case 0:
        return <ProfileInfo/>
      case 1:
        return <Table columns={columns} dataSource={stats} rowKey="id"/>
      default:
        return <></>
    }
  }, [currentTabIndex, profile, stats])

  return (
    <div className="profile-layout"> 
      {loading ? <Loader/> : null}

      <TabsWrapper 
        currentTabIndex={currentTabIndex}
        getCurrentTab={getCurrentTab}
        setTabIndex={setTabIndex}
        tabs={userTabs}
      />
    </div>
  );
}

