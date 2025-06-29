import React from 'react';
import { Filter, Search, X } from 'lucide-react';

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedGenres: string[];
  setSelectedGenres: (genres: string[]) => void;
  selectedLanguages: string[];
  setSelectedLanguages: (languages: string[]) => void;
  sortBy: 'rating' | 'year' | 'title';
  setSortBy: (sort: 'rating' | 'year' | 'title') => void;
  availableGenres: string[];
  availableLanguages: string[];
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedGenres,
  setSelectedGenres,
  selectedLanguages,
  setSelectedLanguages,
  sortBy,
  setSortBy,
  availableGenres,
  availableLanguages
}) => {
  const handleGenreToggle = (genre: string) => {
    setSelectedGenres(
      selectedGenres.includes(genre)
        ? selectedGenres.filter(g => g !== genre)
        : [...selectedGenres, genre]
    );
  };

  const handleLanguageToggle = (language: string) => {
    setSelectedLanguages(
      selectedLanguages.includes(language)
        ? selectedLanguages.filter(l => l !== language)
        : [...selectedLanguages, language]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedGenres([]);
    setSelectedLanguages([]);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-900">Find Your Perfect Movie</h2>
      </div>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search movies by title, director, or cast..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-4">
        {/* Genre Filter */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Genres</h3>
          <div className="flex flex-wrap gap-2">
            {availableGenres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreToggle(genre)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedGenres.includes(genre)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        
        {/* Language Filter */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {availableLanguages.map((language) => (
              <button
                key={language}
                onClick={() => handleLanguageToggle(language)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedLanguages.includes(language)
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </div>
        
        {/* Sort Options */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Sort By</h3>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'rating' | 'year' | 'title')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="rating">Highest Rated</option>
            <option value="year">Newest First</option>
            <option value="title">A-Z</option>
          </select>
        </div>
      </div>
      
      {/* Clear Filters */}
      {(searchTerm || selectedGenres.length > 0 || selectedLanguages.length > 0) && (
        <button
          onClick={clearFilters}
          className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
        >
          <X className="w-4 h-4" />
          Clear All Filters
        </button>
      )}
    </div>
  );
};