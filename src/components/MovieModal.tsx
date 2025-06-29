import React from 'react';
import { X, Star, Clock, Calendar, Users, DollarSign } from 'lucide-react';
import { Movie } from '../data/movies';

interface MovieModalProps {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
}

export const MovieModal: React.FC<MovieModalProps> = ({ movie, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{movie.title}</h1>
            {movie.originalTitle && (
              <p className="text-lg opacity-90 mb-4">{movie.originalTitle}</p>
            )}
            
            <div className="flex items-center gap-6 text-sm flex-wrap">
              <div className="flex items-center gap-1 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">
                <Star className="w-4 h-4 fill-current" />
                {movie.rating}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {movie.year}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {Math.floor(movie.duration / 60)}h {movie.duration % 60}m
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                {movie.language}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold mb-3 text-gray-900">Synopsis</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{movie.synopsis}</p>
              
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Genres</h3>
                <div className="flex flex-wrap gap-2">
                  {movie.genre.map((g) => (
                    <span 
                      key={g} 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Cast & Crew
                </h3>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-600">Director</p>
                  <p className="font-semibold text-gray-900">{movie.director}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">Main Cast</p>
                  <div className="space-y-1">
                    {movie.cast.slice(0, 4).map((actor, index) => (
                      <p key={index} className="text-sm text-gray-800">{actor}</p>
                    ))}
                  </div>
                </div>
              </div>
              
              {movie.boxOffice && (
                <div className="bg-green-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Box Office
                  </h3>
                  <p className="text-lg font-bold text-green-600">{movie.boxOffice}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};