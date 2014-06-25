'use strict';

angular.module('ahealthynetworkApp')
  .controller('postCtrl', function ($scope, $location, Journal) {
  if ($location.path() === '/') {
    $scope.post = Journal.all;
  }

  $scope.journal = {owner: 'journal.owner'};

  $scope.submitJournal = function () {
    Journal.create($scope.journal).then(function () {
      $scope.journal = {owner: 'journal.owner'};
    });
  };

  $scope.deleteJournal = function (journalId) {
    Journal.delete(journalId);
  };

});
