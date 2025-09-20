import React from "react";
import { FaStar } from "react-icons/fa6";

interface BaseStarRating {
  isInteractive?: true;
  totalRating?: number;
  value: number;
  containerClassName?: string;
  icon?: React.ReactNode;
  emptyIcon?: React.ReactNode;
}

interface InteractiveStarRating extends BaseStarRating {
  onChange: () => void;
}

type NonInteractiveStarRating = BaseStarRating;

type StarRatingProps = InteractiveStarRating | NonInteractiveStarRating;

export default function StarRating({
//   isInteractive,
  totalRating = 5,
  value,
  icon = <FaStar className="text-rating-fill text-lg" />,
  emptyIcon = <FaStar className="text-rating-empty text-lg" />,
  containerClassName,
}: Readonly<StarRatingProps>) {
  return (
    <div className={`${containerClassName ?? "flex gap-1"}`}>
      {Array.from({ length: Math.floor(totalRating) }, (_, i) => i).map((i) =>
        i + 1 <= value ? (
          <button key={i}>{icon}</button>
        ) : (
          <button key={i}>{emptyIcon}</button>
        )
      )}
    </div>
  );
}
