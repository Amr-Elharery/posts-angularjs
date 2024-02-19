postsApp.controller(
  "PostsController",
  function PostsController($scope, $http, postService) {
    // To handle delete post
    $scope.deletePost = (post) => {
      // Sending DELETE request
      $http
        .delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
        .then(function (res) {
          console.log(res);
        });

      // Delete post from array of posts
      $scope.deletedIdx = $scope.posts.indexOf(post);
      $scope.posts.splice($scope.deletedIdx, 1);
    };

    // To Fetch Posts
    $scope.fetchPosts = () => {
      $scope.isLoading = true;
      postService.getPosts().then(function (data) {
        $scope.posts = data;
        $scope.isLoading = false;
      });
    };

    $scope.fetchPosts();
  }
);
