postsApp.factory("postService", function ($http) {
  return {
    getPosts: function () {
      // Get posts from API and return a promise to the controller
      let payload = $http
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function ({ data }) {
          return data;
        })
        .catch(function (err) {
          console.log("Error get posts, ", err);
          return err;
        });

      return payload;
    },
    getPost: function (id) {
      let payload = $http
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(function ({ data }) {
          return data;
        })
        .catch(function (err) {
          console.log("Error get post, ", err);
          return err;
        });

      return payload;
    },
  };
});
