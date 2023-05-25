import React from 'react';

type Props = {
  width: number;
  type: string;
  src: string;
};

const VideoPlayer = React.forwardRef<HTMLVideoElement, Props>((props, ref) => {
  const { width, type, src } = props;

  return (
    <video muted width={width} ref={ref}>
      <source type={type} src={src} />
    </video>
  );
});

export default VideoPlayer;
