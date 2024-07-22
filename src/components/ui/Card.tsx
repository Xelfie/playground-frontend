import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  icon: IconProp;
  iconHovered: IconProp;
  text?: string;
}

const Card = ({ icon, iconHovered, text, onClick }: CardProps) => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <div
      className="flex h-60 w-60 cursor-pointer items-center justify-center rounded-full bg-slate-800 duration-200 ease-in-out hover:-translate-y-1 hover:border-b-8 hover:border-rose-200 hover:opacity-75"
      onClick={onClick}
      onMouseEnter={() => {
        setisHovered(true);
      }}
      onMouseLeave={() => setisHovered(false)}
    >
      <div className="flex w-full flex-col items-center justify-center gap-2">
        {isHovered ? (
          <>
            <FontAwesomeIcon
              icon={iconHovered}
              size="7x"
              color="rgb(254 205 211)"
            />
            <span className="text-rose-200">{text}</span>
          </>
        ) : (
          <FontAwesomeIcon icon={icon} size="7x" />
        )}
      </div>
    </div>
  );
};

export default Card;
