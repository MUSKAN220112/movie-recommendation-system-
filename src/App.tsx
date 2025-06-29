import React, { useState } from 'react';
import { Film, Star, Users, Calendar } from 'lucide-react';
import { indianMovies } from './data/movies';
import { Movie } from './data/movies';
import { MovieCard } from './components/MovieCard';
import { MovieModal } from './components/MovieModal';
import { FilterBar } from './components/FilterBar';
import { RecommendationsSection } from './components/RecommendationsSection';
import { useMovieFilters } from './hooks/useMovieFilters';

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);
  
  const {
    searchTerm,
    setSearchTerm,
    selectedGenres,
    setSelectedGenres,
    selectedLanguages,
    setSelectedLanguages,
    sortBy,
    setSortBy,
    availableGenres,
    availableLanguages,
    filteredMovies,
    getRecommendations
  } = useMovieFilters(indianMovies);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowRecommendations(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const recommendations = selectedMovie ? getRecommendations(selectedMovie) : [];

  const stats = {
    totalMovies: indianMovies.length,
    avgRating: (indianMovies.reduce((sum, movie) => sum + movie.rating, 0) / indianMovies.length).toFixed(1),
    languages: availableLanguages.length,
    topGenres: availableGenres.slice(0, 5)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-4">
            <Film className="w-10 h-10 text-yellow-400" />
            <h1 className="text-4xl font-bold">CineMagic</h1>
          </div>
          <p className="text-xl text-blue-100 mb-6">
            Discover the finest Indian cinema from across languages and decades
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Film className="w-5 h-5 text-yellow-400" />
                <span className="text-2xl font-bold">{stats.totalMovies}</span>
              </div>
              <p className="text-blue-200 text-sm">Movies</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-2xl font-bold">{stats.avgRating}</span>
              </div>
              <p className="text-blue-200 text-sm">Avg Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-yellow-400" />
                <span className="text-2xl font-bold">{stats.languages}</span>
              </div>
              <p className="text-blue-200 text-sm">Languages</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <span className="text-2xl font-bold">50+</span>
              </div>
              <p className="text-blue-200 text-sm">Years</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Filter Bar */}
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          selectedLanguages={selectedLanguages}
          setSelectedLanguages={setSelectedLanguages}
          sortBy={sortBy}
          setSortBy={setSortBy}
          availableGenres={availableGenres}
          availableLanguages={availableLanguages}
        />

        {/* Recommendations Section */}
        {showRecommendations && recommendations.length > 0 && (
          <RecommendationsSection
            recommendations={recommendations}
            onMovieClick={handleMovieClick}
            title="More Movies You Might Like"
          />
        )}

        {/* Results Counter */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredMovies.length === indianMovies.length
              ? `Showing all ${filteredMovies.length} movies`
              : `Found ${filteredMovies.length} of ${indianMovies.length} movies`}
          </p>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => handleMovieClick(movie)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Film className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Movies Found</h3>
            <p className="text-gray-500">Try adjusting your filters to discover more movies.</p>
          </div>
        )}

        {/* Movie Modal */}
        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            isOpen={!!selectedMovie}
            onClose={closeModal}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Film className="w-6 h-6 text-yellow-400" />
            <span className="text-xl font-bold">CineMagic</span>
          </div>
          <p className="text-gray-400">
            Celebrating the rich heritage of Indian cinema across all languages and genres
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;