import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../../redux/actions/movieAction";
const ManagerMovie = () => {
  // Redux
  const dispatch = useDispatch();
  const { listMovie, loading } = useSelector(
    (rootReducer) => rootReducer.movie
  );

  // handleEvent

  // LifeCycle
  useEffect(() => {
    dispatch(getAllMovies);
  }, [dispatch]);

  // render component
  const renderListMovies = () => {
    if (listMovie.length === 0) {
      return <p>Khong co du lieu</p>;
    }
    return listMovie.map((movie) => (
      <li key={movie.maPhim}>{movie.tenPhim}</li>
    ));
  };

  return (
    <div>
      <h2>Quan ly phim</h2>
      <p>Danh sach phim</p>
      {loading ? <p>Dang lay du lieu...</p> : null}
      <ul>{renderListMovies()}</ul>
    </div>
  );
};
export default ManagerMovie;
