angular.module('cell')
    .component('cell', {
        bindings: {
            color: '<'
        },
        templateUrl: 'cell/cell.template.html',
        controller: [function() {
            var self = this;
        }]
    })