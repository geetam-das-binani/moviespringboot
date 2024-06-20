import {useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import './Trailer.css'

const Trailer = () => {
    const {ytTrailerId}=useParams();
  return (
    <div className='react-player-container'>
    {
        ytTrailerId && (
            <ReactPlayer
            url={`https://www.youtube.com/watch?v=${ytTrailerId}`}
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            />
        )
    }
    </div>
  )
}

export default Trailer
