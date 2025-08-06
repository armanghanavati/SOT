import axios from "axios";
import { AddMovieType } from "../../common/EditVideo/type";

const baseURL: string | undefined = import.meta.env.VITE_URL;
const urlNotif: string | undefined = import.meta.env.VITE_TEST_NOTIF;

export const getTableFields = async () => {
  const url = `${baseURL}/logins`;
  const response = await axios.patch(url);
  console.log(response);
  return response?.data;
};

export const attachmentList = async ({ skip, take }: any) => {
  const url = `${baseURL}/attachmentList?skip=${skip}&take=${take}`;
  return await axios.get(url);
};

export const login = async (postData: any) => {
  const url = `${baseURL}/login`;
  return await axios.post(url, postData);
};

export const registerUser = async (postData: any) => {
  const url = `${baseURL}/registerUser`;
  return await axios.post(url, postData);
};

export const addLike = async (postData: any) => {
  const url = `${baseURL}/addLike`;
  return await axios.post(url, postData);
};

export const removeLike = async (postData: any) => {
  const url = `${baseURL}/removeLike`;
  return await axios.delete(url, { data: postData });
};

export const removeFollower = async (postData: any) => {
  const url = `${baseURL}/removeFollower`;
  return await axios.delete(url, { data: postData });
};

export const categoryList = async () => {
  const url = `${baseURL}/categoryList`;
  return await axios.get(url);
};

export const subCategoryList = async (catId: number) => {
  const url = `${baseURL}/subCategoryList?categoryId=${catId}`;
  return await axios.get(url);
};

export const subSubCategoryList = async (subCatId: number) => {
  const url = `${baseURL}/subSubCategoryList?subCategoryId=${subCatId}`;
  return await axios.get(url);
};

export const addMovie = async (data: AddMovieType) => {
  const url = `${baseURL}/addMovie`;
  return await axios.post(url, data);
};

export const addAttachment = async (data: FormData) => {
  const url = `${baseURL}/addAttachment`;
  return await axios.post(url, data);
};

// نمایش فیلم
export const attachmentListByInviteId = async (id: number | string) => {
  const url = `${baseURL}/attachmentListByInviteId?inviteId=${id}`;
  return await axios.get(url);
};

// 2نمایش فیلم
export const attachmentPlay = async (path: string) => {
  const url = `${baseURL}/attachmentPlay?path=${path}`;
  return url;
};

// درخواست
export const addInvite = async (postData: any) => {
  const url = `${baseURL}/addInvite`;
  return await axios.post(url, postData);
};

// remove attachment video
export const removeInvite = async (invId: number) => {
  const url = `${baseURL}/removeInvite?inviteId=${invId}`;
  return await axios.delete(url);
};

export const userList = async () => {
  const url = `${baseURL}/userList`;
  return await axios.get(url);
};

export const addFollower = async (postData: any) => {
  const url = `${baseURL}/addFollower`;
  return await axios.post(url, postData);
};

export const followerList = async (userId: any) => {
  const url = `${baseURL}/followerList?userId=${userId}`;
  return await axios.get(url);
};

// get profile
export const profileAttachment = async (userId: number) => {
  const url = `${baseURL}/profileAttachment?userId=${userId}`;
  return await axios.get(url);
};

// get videos home
export const userAttachmentList = async (userId: number) => {
  const url = `${baseURL}/userAttachmentList?userId=${userId}`;
  return await axios.get(url);
};

export const followerAttachmentList = async (userId: number) => {
  const url = `${baseURL}/followerAttachmentList?userId=${userId}`;
  return await axios.get(url);
};

// sent notif
export const sendNotify = async (data: string, userId: number | string) => {
  const url = `${baseURL}/notify?notification=${data}&userId=${userId}`;
  return await axios.get(url);
};

export const followingList = async (userId: number | string) => {
  const url = `${baseURL}/followingList?userId=${userId}`;
  return await axios.get(url);
};

// addComment
export const addComment = async (postData: any) => {
  const url = `${baseURL}/addComment`;
  return await axios.post(url, postData);
};

export const removeComment = async (commentId: number) => {
  const url = `${baseURL}/removeComment?commentId=${commentId}`;
  return await axios.delete(url);
};

export const commentList = async (movieId: number) => {
  const url = `${baseURL}/commentList?movieId=${movieId}`;
  return await axios.get(url);
};

// -> notif
export const createSubscription = async () => {
  const url = `${urlNotif}/api/notifications/public-key`;
  return await axios.get(url);
};

export const saveSubscription = async (postData: any) => {
  const url = `${urlNotif}/api/notifications/subscribe`;
  return await axios.post(url, postData);
};

export const sendAllNotif = async (postData: any) => {
  const url = `${urlNotif}/api/Notifications/send-all`;
  return await axios.post(url, postData);
};

export const sendUserNotif = async (postData: any) => {
  const url = `${urlNotif}/api/Notifications/send`;
  return await axios.post(url, postData);
};

export const addScoure = async (postData: any) => {
  const url = `${urlNotif}/addScoure`;
  return await axios.post(url, postData);
};

export const topScoreList = async () => {
  const url = `${baseURL}/topScoreList`;
  return await axios.get(url);
};

