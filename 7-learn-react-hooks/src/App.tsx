import { useRef } from 'react';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          void videoRef.current?.play();
        }}
        className="bg-slate-200"
      >
        Play
      </button>{' '}
      <button
        type="button"
        onClick={() => videoRef.current?.pause()}
        className="bg-slate-200"
      >
        Pause
      </button>
      <div>
        <VideoPlayer
          width={500}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
          ref={videoRef}
        />
      </div>
    </>
  );
};

export default App;
