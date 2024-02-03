import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ModalStyle } from "./style.modal";
import { ModalProps } from "./type.modal";

export default function Modal({
  width,
  open,
  onClose,
  title,
  children,
}: ModalProps) {
  const refContent = useRef<HTMLDivElement | null>(null);
  const wrapperModal = useRef<HTMLDivElement | null>(null);
  const [openModal, setOpenModal] = useState<boolean | undefined>(false);

  useLayoutEffect(() => {
    if (refContent.current) {
      if (open) {
        setOpenModal(open);
        refContent.current.classList.remove("out");
        refContent.current.classList.add("in");
      } else {
        setTimeout(() => {
          setOpenModal(open);
        }, 200);
        refContent.current.classList.remove("in");
        refContent.current.classList.add("out");
      }
    }
  }, [open]);

  useEffect(() => {
    if (wrapperModal.current && refContent.current) {
      const viewPort = wrapperModal.current.getBoundingClientRect();
      refContent.current.style.marginTop =
        viewPort.top <= 0
          ? `${Math.abs(viewPort.top) + 150}px`
          : `${viewPort.top + 80}px`;
    }
  }, [openModal]);
  return (
    <ModalStyle
      ref={wrapperModal}
      open={openModal}
      onClick={onClose}
      width={width}
    >
      <div
        ref={refContent}
        className="content in"
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton onClick={onClose} className="content-icon">
          <ClearIcon />
        </IconButton>
        <p className="content-title">{title}</p>
        <div className="content-main">{children}</div>
      </div>
    </ModalStyle>
  );
}
