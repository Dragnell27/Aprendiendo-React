import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandezz',
        isFollowing: false
    }
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        userName={userName}
                        name={name}
                        initialFollowing={isFollowing}
                        key={userName}
                    >
                        {name}
                    </TwitterFollowCard>
                )
                )
            }
        </section>
    )
}