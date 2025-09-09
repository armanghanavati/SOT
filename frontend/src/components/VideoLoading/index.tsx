import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface PropsType {
  section?: string;
}

const VideoItemSkeleton: React.FC<PropsType> = ({ section }) => {
  return (
    <div className="video-skeleton">
      {section === "itsShowWatch" && (
        <div className="mx-1">
          <Skeleton
            className="w-full border"
            height="6vh"
            borderRadius={10}
            baseColor="#5252523a"
          />
          <Skeleton
            className="w-full border"
            height="40vh"
            borderRadius={10}
            baseColor="#5252523a"
          />
          <Skeleton
            className="w-full border"
            height="6vh"
            borderRadius={10}
            baseColor="#5252523a"
          />
          <Skeleton
            className="w-full border"
            height="40vh"
            borderRadius={10}
            baseColor="#5252523a"
          />
        </div>
      )}
      {section === "itsHome" && (
        <div className="mx-1 mt-2">
          <Skeleton
            className="w-full border"
            height="6vh"
            borderRadius={10}
            baseColor="#5252523a"
          />
          <Skeleton
            className="w-full border"
            height="37vh"
            borderRadius={10}
            baseColor="#5252523a"
          />
          <Skeleton
            className="w-full border"
            height="6vh"
            borderRadius={10}
            baseColor="#5252523a"
          />
          <Skeleton
            className="w-full border"
            height="36vh"
            borderRadius={10}
            baseColor="#5252523a"
          />
        </div>
      )}
      {section === "itsProfile" && (
        <div className="m-1">
          <Skeleton
            className="w-full border"
            height="6vh"
            borderRadius={10}
            baseColor="#5252523a"
          />
          <Skeleton
            className="w-full border"
            height="37vh"
            borderRadius={10}
            baseColor="#5252523a"
          />
          <Skeleton
            className="w-full border"
            height="6vh"
            borderRadius={10}
            baseColor="#5252523a"
          />
          <Skeleton
            className="w-full border"
            height="37vh"
            borderRadius={10}
            baseColor="#5252523a"
          />
        </div>
      )}
      {section === "justPic" && (
        <div className="mb-1">
          <Skeleton className="rounded-tr-lg" height={175} />
          <Skeleton className="rounded-bl-xl" height={175} />
        </div>
      )}
    </div>
  );
};

export default VideoItemSkeleton;
