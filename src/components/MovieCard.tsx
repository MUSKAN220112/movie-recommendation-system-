import React from 'react';
import { Star, Clock, Calendar } from 'lucide-react';
import { Movie } from '../data/movies';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group border border-gray-100"
      onClick={onClick}
    >
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-6 text-white">
        <div className="absolute top-3 right-3 bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-bold flex items-center gap-1">
          <Star className="w-4 h-4 fill-current" />
          {movie.rating}
        </div>
        <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
          {movie.language}
        </div>
        
        <div className="mt-8">
          <h3 className="font-bold text-xl text-white mb-2 line-clamp-2">
            {movie.title}
          </h3>
          {movie.originalTitle && (
            <p className="text-blue-100 text-sm mb-3 opacity-90">{movie.originalTitle}</p>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {movie.year}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {Math.floor(movie.duration / 60)}h {movie.duration % 60}m
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {movie.genre.slice(0, 3).map((g) => (
            <span 
              key={g} 
              className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
            >
              {g}
            </span>
          ))}
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-3">
          {movie.synopsis}
        </p>
        
        <div className="text-sm text-gray-700">
          <strong>Director:</strong> {movie.director}
        </div>
      </div>
    </div>
  );
};