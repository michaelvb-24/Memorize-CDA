import { NavLink } from 'react-router-dom'

export function Home() {
    return (
        <div>
            <p>Home</p>
            <NavLink to="/RomainEasy">
                <button>Romain Easy</button>
            </NavLink>
            <NavLink to="/Flo">
                <button>Flo</button>
            </NavLink>
        </div>
    )
}