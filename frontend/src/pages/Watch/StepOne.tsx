import React, { useEffect, useMemo, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ImageRank from "../../components/ImageRank";
import { attachmentList } from "../../services/dotNet";
import asyncWrapper from "../../common/AsyncWrapper";
import "swiper/css";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import Loading from "../../components/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { RsetDobuleVideo } from "../../common/Slices/main";
import Timer from "../../components/Timer";

const baseURL: string | undefined = import.meta.env.VITE_SERVERTEST;
const userIdFromSStorage = sessionStorage.getItem("userId");

const StepOne: React.FC = () => {
  const [lastTap, setLastTap] = useState<number>(0);
  const [allDableWatch, setAllDableWatch] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { main } = useAppSelector((state) => state);
  const location = useLocation();

  const handleShowMatch = (item: any) => {
    dispatch(RsetDobuleVideo(item?.group));
    const newPath = `${location.pathname}/show`;
    navigate(newPath);
    setLastTap(0);
  };

  const handleAttachmentList = asyncWrapper(async () => {
    setIsLoading(true);
    const res = await attachmentList();
    setIsLoading(false);
    const { data, status } = res?.data;
    if (status === 0) {
      setAllDableWatch(data);
    }
  });

  useEffect(() => {
    handleAttachmentList();
  }, []);

  const getVideosForDisplay = (allDableWatch: any[]) => {
    return allDableWatch
      .filter((item: any) => item.parentId === null)
      .map((parentItem: any) => {
        const childItem = allDableWatch.find(
          (child: any) => child.parentId === parentItem.inviteId
        );
        return {
          parent: parentItem,
          child: childItem || null,
        };
      })
      .filter((group: any) => group.child !== null);
  };

  const videoGroups = getVideosForDisplay(allDableWatch);

  const checkIsMy = (group: any) => {
    return (
      (group?.parent?.userId || group?.child?.userId) ===
      Number(userIdFromSStorage)
    );
  };

  const videoGroupsWithOwnership = useMemo(() => {
    return videoGroups.map((group) => {
      const isMyVideo = checkIsMy(group);
      return { ...group, isMyVideo };
    });
  }, [videoGroups, userIdFromSStorage]);

  useEffect(() => {
    let interval: any;
    if (progress < 60 && isTimerActive) {
      interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 1000);
    } else if (progress >= 60) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [progress, isTimerActive]);

  useEffect(() => {
    const hasMyVideo = videoGroupsWithOwnership.some(
      (group) => group.isMyVideo
    );
    setIsTimerActive(hasMyVideo);
  }, [videoGroupsWithOwnership]);

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className="grid grid-cols-2 bg-white gap-[5px] p-[1px]">
        {videoGroupsWithOwnership.map((group, index) => {
          const { parent, child, isMyVideo } = group;
          const fixImg1 = `${baseURL}/${parent?.attachmentType}/${parent?.fileName}${parent?.ext}`;
          const fixImg2 = child
            ? `${baseURL}/${child.attachmentType}/${child.fileName}${child.ext}`
            : "";
          return (
            <React.Fragment key={index}>
              <div
                onClick={() => handleShowMatch({ group, index })}
                className={`flex-1 flex flex-col ${
                  isMyVideo ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                }`}
              >
                <div className="flex-1">
                  <span className="relative block w-[calc(50vw - 2px)] h-[calc(35vw - 2px)]">
                    <img
                      src={fixImg1}
                      alt={parent?.alt || "Parent Image"}
                      className={`w-full ${
                        isMyVideo ? "min-h-88 max-h-88" : "min-h-44 max-h-44"
                      } object-cover`}
                    />
                    {isMyVideo && (
                      <span className="absolute top-0 w-full bg_profile_watch">
                        <div className="flex justify-between items-center mx-2">
                          <ImageRank
                            profileName={parent?.userName || "Unknown"}
                            profileFontColor="white"
                            score={parent?.score || 0}
                            rankWidth={45}
                            starWidth={6}
                            className="absolute bottom-0"
                          />
                          <div className="flex gap-2">
                            <span className="font20 font-bold text-white">
                              24K
                            </span>
                            <ThumbUpOffAltIcon className="font25 text-white" />
                          </div>
                        </div>
                      </span>
                    )}
                  </span>
                </div>
                {child && (
                  <div className="flex-1 bg-white">
                    <div className="flex-1">
                      <figure className="relative block w-[calc(50vw - 2px)] h-[calc(35vw - 2px)]">
                        <img
                          src={fixImg2}
                          alt={child?.alt || "Profile image"}
                          className={`w-full ${
                            isMyVideo
                              ? "min-h-88 max-h-88"
                              : "min-h-44 max-h-44"
                          } object-cover`}
                        />
                        {isMyVideo && (
                          <span className="absolute top-0 w-full bg_profile_watch">
                            <div className="flex justify-between items-center mx-2">
                              <ImageRank
                                profileName={parent?.userName || "Unknown"}
                                profileFontColor="white"
                                score={parent?.score || 0}
                                rankWidth={45}
                                starWidth={6}
                                className="absolute bottom-0"
                              />
                              <div className="flex gap-2">
                                <span className="font20 font-bold text-white">
                                  350
                                </span>
                                <ThumbUpOffAltIcon className="font25 text-white" />
                              </div>
                            </div>
                          </span>
                        )}
                        <figcaption className="sr-only">
                          {child?.userName}
                        </figcaption>
                        {isMyVideo && (
                          <div className="absolute bottom-0 left-0 right-0 mx-5 text-white font25 flex items-center justify-center">
                            <HourglassTopIcon className="font20" />
                            <Timer
                              className="text-white font20"
                              active={isTimerActive}
                            />
                            <div className="w-full h-1 bg-gray-700 rounded-full ml-4 relative text-white bg-gray-800">
                              <div
                                className="h-1 bg-blue-500 rounded-full text-green bg-white"
                                style={{ width: `${(progress / 6000) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </figure>
                    </div>
                  </div>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default StepOne;
