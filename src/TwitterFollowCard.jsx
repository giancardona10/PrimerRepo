import { useState } from 'react';

export function TwitterFollowCard ({children, userName = 'unknown'}) {
    
    
    const [isFollowing, setIsFollowing] = useState(false);
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const btnClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    const imgSrc = `https://unavatar.io/${userName}`;
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src= {imgSrc}
                alt="El avatar de componente App" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={btnClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}
