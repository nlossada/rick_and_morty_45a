import { useDispatch } from "react-redux"
import style from "./EpisodeCard.module.css"
import { completedEpisode } from "../../redux/actions";


export default function EpisodeCard({ episode }) {

    const dispatch = useDispatch();
    const handleClick = (event) => {
        dispatch(completedEpisode(episode.id))

    }
    return (
        <div className={style.container}>
            <div className={style.divTitleText}>
                <h4>Episode: {episode.episode}</h4>
                <h3>{episode.name}</h3>

                <h4>Air Date: {episode.air_date}</h4>
            </div>

            {
                episode.completed
                    ? <button className={style.completed} onClick={handleClick}> 🟢 Seen</button>
                    : <button className={style.incompleted} onClick={handleClick}> 🔴 Unseen </button>
            }
            {/* <button>★ 1</button> */}

        </div>
    )
}