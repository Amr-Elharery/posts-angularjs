postsApp.controller("CreatePostController", [
  "$scope",
  "$http",
  "$location",
  function ($scope, $http, $location) {
    // To handle submit the post and send POST request to API
    $scope.submitPost = () => {
      $http
        .post("https://jsonplaceholder.typicode.com/posts", {
          body: JSON.stringify({
            title: $scope.title,
            body: $scope.body,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then(function (res) {
          console.log(res);
        });

      alert(
        `Add successfully\n Title: ${$scope.title}\n Body: ${$scope.body} `
      );

      $scope.title = "";
      $scope.body = "";

      $location.path("/posts");
    };
  },
]);
