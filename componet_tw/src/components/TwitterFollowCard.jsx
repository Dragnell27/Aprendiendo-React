// eslint-disable-next-line react/prop-types
import { useState } from "react"
export function TwitterFollowCard({ children, userName, initialFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const classButton = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    src={`https://unavatar.io/${userName}`}
                    alt="Avatar"
                    className='tw-followCard-avatar' />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={classButton} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}