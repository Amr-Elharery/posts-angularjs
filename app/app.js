let postsApp = angular.module("postsApp", ["ngRoute", "ngAnimate"]);

postsApp.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "app/views/home.html",
      })
      .when("/posts", {
        templateUrl: "app/views/posts.html",
        controller: "PostsController",
      })
      .when("/posts/:id", {
        templateUrl: "app/views/post.html",
        controller: "PostController",
      })
      .when("/create-post", {
        templateUrl: "app/views/create-post.html",
        controller: "CreatePostController",
      })
      .otherwise("/home");
  },
]);
