import React from "react";
import getCategoryColor from "../../utils/categoryColors";

interface CategoryBadgeProps {
  category: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
        category
      )}`}
    >
      {category || "General"}
    </span>
  );
};

export default CategoryBadge;