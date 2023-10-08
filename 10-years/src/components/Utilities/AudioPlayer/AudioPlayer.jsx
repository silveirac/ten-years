import './AudioPlayer.module.css'

export const AudioPlayer = ({src, title}) => {
    return (
        <div className='absolute top-3 w-full z-10'>
            <p className='invert text-xs font-medium -mb-2 w-full text-center animate-pulse'>{title}</p>
            <audio
                controls
                autoPlay
                id='player' 
                src={src}
                className='w-full'/>
        </div>
    )
}