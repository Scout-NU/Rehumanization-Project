interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function PrimaryButton({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-bg-brand hover:bg-bg-brand/80 hover:cursor-pointer disabled:bg-color-bg-brand/60 disabled:cursor-not-allowed  text-white font-semibold px-4 py-2.5 rounded-full transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
