import BaseServices from "./baseServices";
class MovieServices extends BaseServices {
  getAllMovies = () => {
    return this.get("/api/QuanLyPhim/LayDanhSachPhim");
  };
  getMoviesByName = (name) => {
    const param = name.split(" ");
    return this.get(
      `/api/QuanLyPhim/LayDanhSachPhim?tenPhim=${param.join("%")}`
    );
  };
  getMovieById = (id) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  };

  getBanner = (id) => {
    return this.get(
      `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner?maBanner=${id}`
    );
  };
}
export const movieServices = new MovieServices();
