import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteModelRequest } from '../../store/actions/admin/admin.actions';

export const ModelsTable = () => {
    const dispatch = useDispatch()
    const { models } = useSelector(state => state.admins)

    const columns = [
        {
          title: 'Ім`я',
          dataIndex: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
          width: '30%',
        },
        {
            title: 'Кількість голосувань',
            dataIndex: 'showTimes',
            sorter: (a, b) => a.showTimes - b.showTimes,
        },
        {
            title: 'Кількість голосів',
            dataIndex: 'votesCount',
            sorter: (a, b) => a.votesCount - b.votesCount,
        },
        {
            title: 'Рейтинг',
            dataIndex: 'rating',
            sorter: (a, b) => a.rating - b.rating,
            render: (_, record) =>  record.rating.toFixed(2)
        },
        {
            title: 'Видалити',
            render: (_, record) => {
                return <Popconfirm title="Ви впевнені, що бажаєте видалити?" onConfirm={() => dispatch(deleteModelRequest(record.id))}>
                    <DeleteOutlined style={{color: "red"}}/>
                </Popconfirm>
            }
        }
    ];

    return <Table rowKey="id" columns={columns} dataSource={models}/>
}