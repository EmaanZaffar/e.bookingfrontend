import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 50000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const styles =
    type === "SUCCESS"
      ? "fixed top-4 right-4 z-50 p-4 border border-green-400 bg-green-100 text-green-600 shadow-lg max-w-md"
      : "fixed top-40 right-4 z-50 p-4 border border-red-400 bg-red-100 text-red-600 shadow-lg max-w-md";

  return (
    <div className={styles}>
      <div className="flex items-center justify-center">
        <span className="text-lg font-medium flex items-center gap-3">
          {type === "SUCCESS" ? (
            <FaCheckCircle size={20} />
          ) : (
            <IoCloseCircle size={26} />
          )}
          {message}
        </span>
      </div>
    </div>
  );
};

export default Toast;
