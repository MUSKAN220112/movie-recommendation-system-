import React from 'react';
import { Sparkles } from 'lucide-react';
import { Movie } from '../data/movies';
import { MovieCard } from './MovieCard';

interface RecommendationsSectionProps {
  recommendations: Movie[];
  onMovieClick: (movie: Movie) => void;
  title?: string;
}

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({
  recommendations,
  onMovieClick,
  title = "Recommended for You"
}) => {
  if (recommendations.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-6 h-6 text-yellow-500" />
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => onMovieClick(movie)}
          />
        ))}
      </div>
    </div>
  );
};