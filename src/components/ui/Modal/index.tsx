"use client";

import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  ReactNode,
} from "react";
import { MdClose } from "react-icons/md";

import "./styles.scss";

export interface ModalProps {
  isOpen?: boolean;
  children?: ReactNode;
  className?: string;
  onClose?: Function;
  ref?: any;
  noBackdrop?: boolean;
}

let modalResult = false;

function onEscKeyDown(e: any, setState: Function): void {
  if (e.key !== "Escape") return;
  setState({ fadeType: "out" });
}

function closeModal(e: any, setState: Function): void {
  e.preventDefault();
  setState({ fadeType: "out" });
}

function transitionEnd(props: ModalProps, state: any): void {
  if (state.fadeType === "in") {
    modalResult = false;
    props.noBackdrop && document.body.classList.add("overflow-hidden");
    return;
  }

  if (state.fadeType === "out") {
    props.noBackdrop && document.body.classList.remove("overflow-hidden");
    props.onClose && props.onClose(modalResult);
  }
}

const Modal: React.FC<ModalProps> = forwardRef(
  ({ children, className, noBackdrop, ...props }, ref) => {
    const [state, setState] = useState({ fadeType: "" });
    const onEscKeyDownHandler = (e: any) => onEscKeyDown(e, setState);
    const IdModal = "modal-" + new Date().getTime();

    useEffect(() => {
      window.addEventListener("keydown", onEscKeyDownHandler, false);

      if (props.isOpen) {
        setState({ fadeType: "in" });
      } else {
        setState({ fadeType: "out" });
      }

      return () => {
        window.removeEventListener("keydown", onEscKeyDownHandler, false);
      };
    }, [props.isOpen]);

    useImperativeHandle(ref, () => ({
      close: (result?: boolean) => {
        modalResult = result || false;
        setState({ fadeType: "out" });
        document.body.classList.remove("overflow-hidden");
      },
    }));

    return (
      <div
        id={IdModal}
        className={`wrapper fade-${state.fadeType} ${
          className || ""
        } modal-wrapper`}
        role="dialog"
        onTransitionEnd={(e: any) => {
          // only trigger for opacity transition
          if (e.propertyName === "opacity") {
            transitionEnd(props, state);
          }
        }}
      >
        <div className="box-dialog">
          <MdClose
            onClick={(e: any) => closeModal(e, setState)}
            className="close cursor-pointer"
            size={30}
          />

          <div className="content-modal">{children}</div>
        </div>
        {!noBackdrop && (
          <div
            className={`background`}
            onMouseDown={(e) => {
              closeModal(e, setState);
            }}
          />
        )}
      </div>
    );
  }
);

export default Modal;
