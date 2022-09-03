import ReactDOM from "react-dom";

const portatRoot = document.getElementById("portal-root");

export default function CenterModal({
  children,
  isOpen,
  modalWidth = "300px",
  bgColor = "white",
  modalHeight = "100vh",
  closeModal,
}) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div onClick={() => closeModal()} className="fixed w-full h-screen top-0 left-0 bg-MODAL_BACKGROUND">
      <div className={`bg-${bgColor}`} style={{ width: modalWidth, height: modalHeight }}>
        {children}
      </div>
    </div>,
    portatRoot
  );
}
