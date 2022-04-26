import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import { VGForm } from '../form';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { editProfileInfoRequest } from '../../store/actions/user/user.actions';
import { validationSchema, initialValues, EditProfileValues } from './constants';
import './profileInfo.scss';


export const ProfileInfo = () => {
    const [isOpen, setOpenModal] = useState(false)
    const dispatch = useDispatch();
    const { profile, error, message } = useSelector(state => state.users);
  
    const onSubmit = ({username, files}) => {
        const form = new FormData();
        if(username) form.append('Username', username)
        if(files.length) form.append('Avatar', ...files)
        dispatch(editProfileInfoRequest(form))
    }
  
    return <div className='profile-layout-page'>
      <div className='profile-layout-info'>
        <Modal
          className="edit-profile-modal"
          open={isOpen}
          onClose={()=>setOpenModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <VGForm 
            loading={false}
            message={message}
            error={error}
            validationSchema={validationSchema}
            initialValues={initialValues} 
            formValues={EditProfileValues} 
            onSubmit={onSubmit}
            buttonText={'Змінити'}
            title={'Змінити'}
          />
        </Modal>
        <Fab className="editProfile" onClick={()=>setOpenModal(true)} color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        {!profile?.avatarUrl
            ? <Skeleton animation="wave" height={200} width={200} variant="circular"> 
              <Avatar />
            </Skeleton>
            : <Avatar alt="Your Avatar" sx={{ width: 200, height: 200 }} src={profile.avatarUrl} />
        }
        {!profile 
          ? <div>
            <Skeleton animation="wave" width={200} variant="text" />
            <Skeleton animation="wave" width={200} variant="text" />
          </div>
          : <div>
            <div className='profile-layout-textfield'>
              <span>Username: </span>{profile.userName}
            </div>
            <div className='profile-layout-textfield'>
              <span>Email: </span>{profile.email}
            </div>
          </div>
        }
      </div>
  
    </div>
  }