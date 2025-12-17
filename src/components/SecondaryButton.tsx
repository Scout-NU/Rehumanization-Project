interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function SecondaryButton({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-white/20 hover:bg-white/30 hover:cursor-pointer disabled:bg-gray-400/60 disabled:cursor-not-allowed text-body-base text-white font-semibold px-4 py-2.5 rounded-full transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
