import './main-layout.scss';
import { VotingPanel } from '../../components/votingPanel';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getPairRequest, resetVotesRequest, voteForModelRequest } from '../../store/actions/voting/voting.action';
import { Loader } from '../../components/loader';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

export const MainLayout = () => {
  const { pair, loading, error , message } = useSelector(state => state.voting)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPairRequest())
  },[])

  const handleVoteSend = (e, votedModalId, pair) =>  {
    e.preventDefault()
    const userVote = {
      pairId: parseInt(pair.id),
      winnerId: parseInt(votedModalId)
    }
    dispatch(voteForModelRequest(userVote))
  }

  const handleVoteReset = () => {
    dispatch(resetVotesRequest())
  }

  return (
    <div className="main-layout"> 
      {message ? <div className={`status-panel ${error && 'error'}`}>{message}</div> : null}
      {loading ? <Loader/> : null}
      {pair 
        ? <VotingPanel pair={pair} onSubmit={handleVoteSend}/>  
        : <div className='voting-closed'>
            <span>Немає не проголосованих пар</span>
            <div>
              <Button variant="contained" color="success" onClick={() => navigate('/votingapp.github.io/account/profile')}>
                Переглянути таблицю результатів
              </Button>
              <LoadingButton
                onClick={handleVoteReset}
                loading={loading && pair}
                variant="contained"
                disabled={loading}
              >
                Переголосувати
              </LoadingButton>
            </div>
          </div>
      }
    </div>
  );
}