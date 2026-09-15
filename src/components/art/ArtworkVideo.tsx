import YouTubePlayer from '@/components/common/YouTubePlayer';
import VimeoPlayer from '@/components/common/VimeoPlayer';

type ArtworkVideoData = {
  type: string;
  id: string;
  url: string;
  title: string;
  caption?: string;
  technical_details?: string;
  aspectRatio?: '16:9' | '4:3' | '9:16';
};

export default function ArtworkVideo({ video }: { video: ArtworkVideoData }) {
  const isVertical = video.aspectRatio === '9:16';
  const isYouTube = video.type === 'youtube';
  const isVimeo = video.type === 'vimeo';

  if (!isYouTube && !isVimeo) {
    return (
      <p className="text-sm">
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Watch {video.title}
        </a>
      </p>
    );
  }

  const player = isYouTube ? (
    <YouTubePlayer
      videoId={video.id}
      title={video.title}
      aspectRatio={video.aspectRatio ?? '16:9'}
    />
  ) : (
    <VimeoPlayer videoId={video.id} title={video.title} aspectRatio="16:9" />
  );

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">Video documentation</h2>
      <div className={isVertical ? 'mx-auto w-full max-w-[22rem]' : 'w-full'}>{player}</div>
      {video.caption ? (
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400">{video.caption}</p>
      ) : null}
      {video.technical_details ? (
        <p className="mt-2 text-sm text-gray-500">{video.technical_details}</p>
      ) : null}
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        {isYouTube ? 'Watch on YouTube' : 'Watch on Vimeo'}
        <span className="ml-1" aria-hidden>
          ↗
        </span>
      </a>
    </div>
  );
}
