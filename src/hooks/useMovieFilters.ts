import { useState, useMemo } from 'react';
import { Movie } from '../data/movies';

export const useMovieFilters = (movies: Movie[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'rating' | 'year' | 'title'>('rating');

  const availableGenres = useMemo(() => {
    const genres = new Set<string>();
    movies.forEach(movie => {
      movie.genre.forEach(genre => genres.add(genre));
    });
    return Array.from(genres).sort();
  }, [movies]);

  const availableLanguages = useMemo(() => {
    const languages = new Set<string>();
    movies.forEach(movie => languages.add(movie.language));
    return Array.from(languages).sort();
  }, [movies]);

  const filteredMovies = useMemo(() => {
    let filtered = movies.filter(movie => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          movie.title.toLowerCase().includes(searchLower) ||
          movie.director.toLowerCase().includes(searchLower) ||
          movie.cast.some(actor => actor.toLowerCase().includes(searchLower)) ||
          movie.genre.some(genre => genre.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }

      // Genre filter
      if (selectedGenres.length > 0) {
        const hasSelectedGenre = selectedGenres.some(genre => 
          movie.genre.includes(genre)
        );
        if (!hasSelectedGenre) return false;
      }

      // Language filter
      if (selectedLanguages.length > 0) {
        if (!selectedLanguages.includes(movie.language)) return false;
      }

      return true;
    });

    // Sort movies
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'year':
          return b.year - a.year;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [movies, searchTerm, selectedGenres, selectedLanguages, sortBy]);

  const getRecommendations = (currentMovie: Movie, count = 4) => {
    return movies
      .filter(movie => movie.id !== currentMovie.id)
      .filter(movie => {
        // Recommend movies with similar genres
        const sharedGenres = movie.genre.filter(genre => 
          currentMovie.genre.includes(genre)
        );
        return sharedGenres.length > 0 || movie.language === currentMovie.language;
      })
      .sort((a, b) => {
        // Sort by genre similarity first, then by rating
        const aSharedGenres = a.genre.filter(genre => 
          currentMovie.genre.includes(genre)
        ).length;
        const bSharedGenres = b.genre.filter(genre => 
          currentMovie.genre.includes(genre)
        ).length;
        
        if (aSharedGenres !== bSharedGenres) {
          return bSharedGenres - aSharedGenres;
        }
        
        return b.rating - a.rating;
      })
      .slice(0, count);
  };

  return {
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
  };
};