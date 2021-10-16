import http from "../http-common";

class ProductDataService {
  getProducts(page, size) {
    return http.get(`/products?page=${page}&size=${size}`);
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(data) {
    return http.post("/products", data);
  }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

  deleteAll() {
    return http.delete(`/products`);
  }

  findByName(name, page, size) {
    return http.get(`/products?name=${name}&page=${page}&size=${size}`);
  }
}

export default new ProductDataService();