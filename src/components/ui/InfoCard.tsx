import React from "react";

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
      {icon}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
};
