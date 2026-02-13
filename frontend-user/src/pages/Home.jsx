import MovieHero from '../components/movies/MovieHero';
import MovieList from '../components/movies/MovieList';
import Footer from '../components/layout/Footer';
import Navbar from '../components/common/Navbar';
import MOVIES from '@data/movies.json';

function Home() {
  const featuredMovie = MOVIES[0];
  
  const popularMovies = MOVIES.slice(0, 5); 
  const actionMovies = MOVIES.filter(m => m.genre === 'Action').slice(0, 5);
  const recentMovies = MOVIES.filter(m => m.year > 2010).slice(0, 5);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      
      {featuredMovie && <MovieHero movie={featuredMovie} />}

      <div className="space-y-8 -mt-20 relative z-10 pb-12">
        <MovieList title="Films Populaires" movies={popularMovies} />
        <MovieList title="Action" movies={actionMovies} />
        <MovieList title="Films Récents" movies={recentMovies} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;