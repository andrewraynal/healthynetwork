'use strict';

angular.module('ahealthynetworkApp')
  .controller('journalCtrl', function ($scope, $location, Journal) {
  if ($location.path() === '/') {
    $scope.journals = Journal.all;
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
