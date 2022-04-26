import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Popconfirm, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {  switchUserStatusRequest } from '../../store/actions/admin/admin.actions';

export const UsersTable = () => {
  const dispatch = useDispatch()
  const { users } = useSelector(state => state.admins)

  const columns = [
    {
      title: 'Нікнейм',
      dataIndex: 'userName',
      sorter: (a, b) => a.userName.localeCompare(b.userName),
      width: '30%',
    },
    {
        title: 'Ел.пошта',
        dataIndex: 'email',
        sorter: (a, b) => a.email.localeCompare(b.email)
    },
    {
        title: 'Активний',
        dataIndex: 'active',
        render: (_, record) => {
            return <Popconfirm title="Ви впевнені, що бажаєте переключити?" onConfirm={() => dispatch(switchUserStatusRequest(record.id))}>
                <Switch checked={record.active} />
            </Popconfirm>
        }
    }
  ];

  return <Table rowKey="id" columns={columns} dataSource={users} />
}