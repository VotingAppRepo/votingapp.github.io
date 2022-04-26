import { useState } from 'react';
import { ModelCard } from '../../components/modelCard';
import { Radio } from 'antd';
import './votingPanel.scss';
import { LoadingButton } from '@mui/lab';
import { useSelector } from 'react-redux';

export const VotingPanel = ({pair, onSubmit}) => {
    const {firstModel, secondModel} = pair
    const [votedModelId, setVote] = useState(null);
    const loading = useSelector(state => state.voting.loading)
    console.log(votedModelId)
    return <>
        <div className='modal-card-wrapper'>
            <ModelCard handleClick={setVote} model={firstModel}/>
            <span>vs</span>
            <ModelCard handleClick={setVote} model={secondModel}/>
        </div>
        <form className='voting-panel' onSubmit={(e) => {
                onSubmit(e,votedModelId, pair)
                setVote(null)
            }}>
            <Radio.Group onChange={(e)=>setVote(e.target.value)} size="large" value={votedModelId}>
                <Radio value={firstModel.id}>{firstModel.name}</Radio>
                <Radio value={secondModel.id}>{secondModel.name}</Radio>
            </Radio.Group>
            
            <LoadingButton
                type="submit"
                loading={loading && pair}
                variant="outlined"
                color="secondary"
                disabled={loading && !votedModelId}
            >
                Проголосувати
            </LoadingButton>
        </form>
    </>
}