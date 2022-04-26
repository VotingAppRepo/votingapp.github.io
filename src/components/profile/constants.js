import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';

export const userTabs = [
    'Мій профіль',
    'Мої голоси'
]

export const columns = [
    {
      width: '300px',
      title: 'Модель',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (_, record) => (
          <div className='model-table-cell'>
            {!record?.image
                ? <Skeleton animation="wave" height={50} width={50} variant="circular"> 
                    <Avatar />
                </Skeleton>
                : <Avatar alt="Your Avatar" sx={{ width: 50, height: 50 }} src={record.image} />
            }
            {record.name}
          </div>
      )
    },
    {
        title: 'Кількість голосів',
        dataIndex: 'votesCount',
        sorter: (a, b) => a.votesCount - b.votesCount,
    }
];