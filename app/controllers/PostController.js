postsApp.controller("PostController", [
  "$scope",
  "$http",
  "$location",
  "$routeParams",
  "postService",
  function ($scope, $http, $location, $routeParams, postService) {
    $scope.postId = $routeParams.id; // Catch route params

    // To handle delete post
    $scope.deletePost = () => {
      $http
        .delete(`https://jsonplaceholder.typicode.com/posts/${$scope.postId}`)
        .then(function (res) {
          console.log(res);
        });

      $scope.post = "";
      alert("Successfully deleted!");
      $location.path("/posts");
    };

    // To Fetch The Post
    $scope.fetchPost = () => {
      $scope.isLoading = true;
      postService.getPost($scope.postId).then(function (data) {
        console.log(data);
        $scope.post = data;
        $scope.isLoading = false;
      });
    };

    $scope.fetchPost();
  },
]);
