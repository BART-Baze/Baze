import axios from "axios";

export default {
  // Gets all Posts from DB
  getPosts: function() {
    return axios.get("/api/posts");
  },

  getDelayPosts: function() {
    return axios.get("/api/posts/delay");
  },

  getStationPosts: function() {
    return axios.get("/api/posts/station");
  },

  getTrainPosts: function() {
    return axios.get("/api/posts/train");
  },

  getUserPosts: function(id) {
    return axios.get("/api/users/" + id);
  },

  login: function(name) {
    console.log("logged in user", name)
    return axios.get("/api/login/"+ name);
  },

  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },

  savePosts: function(postData) {
    console.log("ARTICLE SAVED", postData);
    return axios.post("/api/posts", postData);
  },

  updateUser: function(id) {
    console.log("POSTS data to insert into users!", id);
    return axios.post("/api/users/update ", id);
  },
  //Signup-Login
  signUp: function(data) {
    console.log("signed up user", data);
    return axios.post("/api/signup", data)
    .then((res) => {
      // console.log("res API signup", res);
      window.location = '/login';
    });
  }

};
