angular.module('board.container')
    .component('boardContainer', {
        templateUrl: 'container/board-container.template.html',
        controller: ['ColorService', function(ColorService) {
            var self = this;
            
            self.topLeftColorInput = "#FF0000";
            self.bottomRightColorInput = "#00FF00";
            self.boardSizeinput = 8;
            self.colorRegex = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$";

            self.$onInit = function() {
                self.draw();
            }

            self.draw = function() {
                self.topLeftColor = ColorService.normalizeColor(self.topLeftColorInput);
                self.bottomRightColor = ColorService.normalizeColor(self.bottomRightColorInput);
                self.boardSize = angular.copy(self.boardSizeinput);
            }
        }]
    })