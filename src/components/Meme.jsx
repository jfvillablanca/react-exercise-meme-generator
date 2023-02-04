export default function Meme() {
    return (
        <main>
            <div className='form'>
                <input
                    type='text'
                    placeholder='Top text'
                    className='form--input'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Bottom text'
                    className='form--input'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className='form--button' onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    );
}
