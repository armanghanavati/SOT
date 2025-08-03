import React from "react";
import Input from "../Input";
import Modal from "../Modal";
import { Button } from "../Button";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { RsetMessageModal } from "../../common/Slices/main";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DoneIcon from "@mui/icons-material/Done";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const MessageModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const main = useAppSelector((state) => state?.main);

  return (
    <>
      <Modal isOpen={main?.messageModal?.show}>
        <div className="">
          <div className="flex mb-10 justify-center">
            {main?.messageModal?.icon === "success" && (
              <DoneIcon className="font50 text-green" />
            )}
            {main?.messageModal?.icon === "danger" && (
              <PriorityHighIcon className="font50 text-secondary" />
            )}
            {main?.messageModal?.icon === "email" && (
              <AlternateEmailIcon className="font50 text-green" />
            )}
          </div>
          <div className="flex my-10 justify-center">
            <span className=" ">{main?.messageModal?.title}</span>
          </div>
          <span className="flex mt-10 justify-center">
            <Button
              variant={
                main?.messageModal?.icon === "danger"
                  ? "outLine_secondary"
                  : "green"
              }
              onClick={() => dispatch(RsetMessageModal({ show: false }))}
              label="Accept"
              className="flex border"
            />
          </span>
        </div>
      </Modal>
    </>
  );
};

export default MessageModal;
