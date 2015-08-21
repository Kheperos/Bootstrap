var app = angular.module("myApp", []);

app.controller("root", ["$scope", function($scope) {
        $scope.users = [
            {id: 1, name: "John Smith", rank: "1", picture: "img/Image1.jpg"},
            {id: 2, name: "Nicolae Popescu", rank: "1", picture: "img/Image2.jpg"},
            {id: 3, name: "Tudor Eugen", rank: "1", picture: "img/Image3.jpg"},
            {id: 4, name: "Vasile Alexandru", rank: "1", picture: "img/Image4.jpg"},
            {id: 5, name: "Cristina Andreea", rank: "2", picture: "img/Image5.jpg"},
            {id: 6, name: "Ella Utza", rank: "2", picture: "img/Image6.jpg"},
            {id: 7, name: "Mihaela Alina", rank: "3", picture: "img/Image7.jpg"},
            {id: 8, name: "Ion Ion", rank: "3", picture: "img/Image8.jpg"},
            {id: 9, name: "Mircel Utilizator", rank: "3", picture: "img/Image9.jpg"}
        ];
        $scope.users.badges = [
            {badgeid: 1, name: "Police Badge", location: "img/Badge1.jpg"},
            {badgeid: 2, name: "Ranger Badge", location: "img/Badge2.jpg"},
            {badgeid: 3, name: "Love Badge", location: "img/Badge3.jpg"},
            {},
            {},
            {},
            {}
        ]
    }]);