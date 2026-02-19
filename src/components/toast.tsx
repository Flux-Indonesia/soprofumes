"use client";

import { useState, useEffect, useCallback, createContext, useContext, ReactNode } from "react";
import { CheckCircle, XCircle, Info, X } from "lucide-react";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

interface ToastContextType {
  showToast: (message: string, type?: "success" | "error" | "info") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
}

function ToastItem({
  toast,
  onHide,
}: {
  toast: Toast;
  onHide: (id: string) => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onHide(toast.id), 300);
    }, 4500);
    return () => clearTimeout(timer);
  }, [toast.id, onHide]);

  const icon = () => {
    switch (toast.type) {
      case "success":
        return <CheckCircle className="text-green-400" size={20} />;
      case "error":
        return <XCircle className="text-red-400" size={20} />;
      case "info":
        return <Info className="text-cyan-400" size={20} />;
    }
  };

  const borderColor = () => {
    switch (toast.type) {
      case "success":
        return "border-green-400/20";
      case "error":
        return "border-red-400/20";
      case "info":
        return "border-cyan-400/20";
    }
  };

  const bgColor = () => {
    switch (toast.type) {
      case "success":
        return "bg-green-500/10";
      case "error":
        return "bg-red-500/10";
      case "info":
        return "bg-cyan-500/10";
    }
  };

  return (
    <div
      className={`
        pointer-events-auto flex items-center gap-4 p-4 pr-12 relative
        ${bgColor()} ${borderColor()}
        border backdrop-blur-xl rounded-2xl shadow-2xl
        transform transition-all duration-300 ease-out
        ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
      `}
    >
      {icon()}
      <div>
        <p className="text-sm font-medium text-white">{toast.message}</p>
        <p className="text-[9px] uppercase tracking-widest opacity-40 mt-1">
          Neural Notification
        </p>
      </div>
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(() => onHide(toast.id), 300);
        }}
        className="absolute top-3 right-3 p-1 hover:bg-white/10 rounded-full transition-colors"
      >
        <X size={14} className="opacity-60" />
      </button>
    </div>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: string, type: "success" | "error" | "info" = "info") => {
      const id = Date.now().toString();
      setToasts((prev) => [...prev, { id, message, type }]);
    },
    []
  );

  const hideToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-8 right-8 z-[200] pointer-events-none flex flex-col gap-3">
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onHide={hideToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
