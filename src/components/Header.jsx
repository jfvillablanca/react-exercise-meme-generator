import Trollface from "../assets/trollface.png";

export default function Header() {
    return (
        <nav className='header'>
            <img
                className='header--image'
                src={Trollface}
                alt='meme nav icon'
            />
            <h1 className='header--title'>Meme Generator</h1>
        </nav>
    );
}
