import {extend} from "../utils/utils";

const adapterMovie = (movie) => {
  const result = extend(
      movie,
      {
        posterImage: movie.poster_image,
        previewImage: movie.preview_image,
        backgroundImage: movie.background_image,
        backgroundColor: movie.background_color,
        videoLink: movie.video_link,
        previewVideoLink: movie.preview_video_link,
        scoresCount: movie.scores_count,
        runTime: movie.run_time,
        isFavorite: movie.is_favorite,
      }
  );

  delete result.poster_image;
  delete result.preview_image;
  delete result.background_image;
  delete result.background_color;
  delete result.video_link;
  delete result.preview_video_link;
  delete result.scores_count;
  delete result.run_time;
  delete result.is_favorite;

  return result;
};

const adapterMovies = (movies) => movies.map(adapterMovie);

export {adapterMovies, adapterMovie};
