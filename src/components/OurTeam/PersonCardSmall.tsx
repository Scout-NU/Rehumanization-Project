import React from "react";

const PersonCardSmall = ({
  name,
  description,
  role,
  image,
  quote,
  showBorder,
  isExpandable = true,
}: {
  name: string;
  description?: string;
  role: string;
  image: string;
  quote?: string;
  showBorder?: boolean;
  isExpandable?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div
      className={`flex flex-col w-full overflow-hidden transition-all duration-300 py-2 ${
        showBorder ? "border-b border-bg-quaternary" : ""
      }`}
    >
      {/* Header - Always visible */}
      <button
        onClick={() => isExpandable && setIsExpanded(!isExpanded)}
        className={`flex flex-row items-center justify-between py-2 w-full text-left ${
          isExpandable ? "" : "cursor-default"
        }`}
        disabled={!isExpandable}
      >
        <div className="flex flex-row items-center gap-4">
          <div
            className="w-16 h-16 rounded-full bg-center bg-cover bg-no-repeat flex-shrink-0"
            style={image ? { backgroundImage: `url('${image}')` } : {}}
          />
          <div className="flex flex-col gap-0.5 select-text">
            <p className="text-white text-lg font-semibold">{name}</p>
            <span>
              <p className="text-text-secondary text-base font-medium">
                {role}{" "}
                {!isExpandable && description && (
                  <span className="text-white text-base font-normal">
                    {" • "} {description}
                  </span>
                )}
              </p>
            </span>
          </div>
        </div>

        {/* Plus/Minus Icon - only show if expandable */}
        {isExpandable && (
          <div className="text-white text-3xl font-light flex-shrink-0 ml-4">
            {isExpanded ? "−" : "+"}
          </div>
        )}
      </button>

      {/* Expanded Content - only for expandable cards */}
      {description && isExpanded && isExpandable && (
        <div className="pb-6 flex flex-col gap-4 pt-2">
          {quote && (
            <p className="text-white text-base font-normal italic">{quote}</p>
          )}
          <p className="text-white text-base font-normal">{description}</p>
        </div>
      )}
    </div>
  );
};

export default PersonCardSmall;
