define(['angular'], function () {
    function HelloController($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
    }
    return HelloController;
});