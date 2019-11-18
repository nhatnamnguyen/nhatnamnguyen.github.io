angular.module('board')
    .component('board', {
        bindings: {
            topLeftColor: '<',
            bottomRightColor: '<',
            boardSize: '<'
        },
        templateUrl: 'board/board.template.html',
        controller: ['ColorService', function(ColorService) {
            var self = this;

            self.topRightColor = '#FFFFFF';
            self.bottomLeftColor = '#000000';

            self.$onInit = function() {
                if (angular.isDefined(self.topLeftColor) && angular.isDefined(self.bottomRightColor)) {
                    self.computeGradientColors();
                }
            }

            self.$onChanges = function(changes) {
                if (angular.isDefined(changes.topLeftColor)) {
                    self.topLeftColor = changes.topLeftColor.currentValue;
                }
                if (angular.isDefined(changes.bottomRightColor)) {
                    self.bottomRightColor = changes.bottomRightColor.currentValue;
                }

                if (angular.isDefined(self.topLeftColor) && angular.isDefined(self.bottomRightColor)) {
                    self.computeGradientColors();
                }
            }

            self.computeGradientColors = function() {
                self.cellColors = ColorService.computeGradientColorsOfBoard(
                    self.topLeftColor,
                    self.topRightColor,
                    self.bottomLeftColor,
                    self.bottomRightColor,
                    self.boardSize);
            }
        }]
    })