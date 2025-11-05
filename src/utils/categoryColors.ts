

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    "animal welfare": "bg-pink-100 text-pink-700",
    food: "bg-green-100 text-green-700",
    sustainability: "bg-blue-100 text-blue-700",
    music: "bg-purple-100 text-purple-700",
    sports: "bg-orange-100 text-orange-700",
    education: "bg-indigo-100 text-indigo-700",
  };
  return colors[category] || "bg-gray-100 text-gray-700";
};
export default getCategoryColor;