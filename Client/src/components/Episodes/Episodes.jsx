import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addEpisode } from "../../redux/actions";
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import style from "./Episodes.module.css"

export default function Episodes(props) {

    const [id, setId] = useState("")
    const dispatch = useDispatch();
    const episodes = useSelector(state => state.episodes)


    const handleChange = (event) => {
        setId(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault();
        const repetedEpisode = episodes.filter((episode) => episode.id === Number(id))
        if (repetedEpisode.length) {
            setId("")
            return window.alert(`The episode ${repetedEpisode[0].name} already exists`);
        }
        dispatch(addEpisode(id))
        setId("");
    }


    return (
        <div>
            <div className={style.searchBar}>
                <input className={style.inputSearch} type="text" value={id} onChange={handleChange} placeholder="Insert an episode id" />
                <button onClick={handleClick}>Add an episode</button>
            </div>

            <div className={style.container}>
                {
                    episodes.map((episode) => (
                        <EpisodeCard
                            key={episode.id}
                            id={episode.id}
                            episode={episode}
                        />
                    ))
                }

            </div>

        </div>
    )

}

