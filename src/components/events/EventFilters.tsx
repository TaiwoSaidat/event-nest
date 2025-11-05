import React from "react";
import { PawPrint } from 'lucide-react';
import SearchBar from "../ui/SearchBar";
import { Button } from "../ui/Button";

interface EventFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  petsFilter: boolean;
  onPetsFilterChange: () => void;
  resultCount: number;
}

export const EventFilters: React.FC<EventFiltersProps> = ({
  searchQuery,
  onSearchChange,
  petsFilter,
  onPetsFilterChange,
  resultCount,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Search events by title, category, location..."
        />

        <Button
          variant="filter"
          active={petsFilter}
          onClick={onPetsFilterChange}
          icon={<PawPrint size={20} />}
        >
          Pets Allowed
        </Button>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        Showing {resultCount} event{resultCount !== 1 ? "s" : ""}
      </div>
    </div>
  );
};
