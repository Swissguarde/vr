import MuiModal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai";
import guide from "../assets/guide.mp4";

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={() => setIsOpen((prev) => !prev)}
      className="fixed !top-10 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <AiOutlineClose size={26} />
        </button>

        <div className="relative">
          <video
            src={guide}
            autoPlay
            loop
            muted
            className="mt-24 sm:mt-0 top-0 right-0 max-w-full min-w-full"
          ></video>
        </div>
      </>
    </MuiModal>
  );
};
export default Modal;
