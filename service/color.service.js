angular.module('service.color')
    .factory('ColorService', function() {
        var service = {};

        /**
         * Compute all the gradient colors of all cell of the board
         * The result will be an array 2 dimensions.
         * The first dimension is for the row
         * The second dimension if for each cell in the row
         * Result example for a board with size of 3: 
         * [
         *  [#Color00, #Color01, #Color02],
         *  [#Color10, #Color11, #Color12],
         *  [#Color20, #Color21, #Color22],
         * ]
         */
        service.computeGradientColorsOfBoard = function(topLeftColor, topRightColor, bottomLeftColor, bottomRightColor, boardSize) {
            var firstColumnColors = service.computeGradientColors(topLeftColor, topRightColor, boardSize);
            var lastColumnColors = service.computeGradientColors(bottomLeftColor, bottomRightColor, boardSize);

            var cellColors = [];
            for (var i = 0; i < boardSize; i++) {
                //Compute the gradient colors for each row
                cellColors.push(service.computeGradientColors(firstColumnColors[i], lastColumnColors[i], boardSize));
            }

            return cellColors;
        }

        /**
         * Compute the gradient colors array between the first color and the second color
         * EX: The gradient colors array between #440000 and #0000CC with size = 5
         * Result: [#440000, #330033, #220066, #110099, #0000CC]
         */
        service.computeGradientColors = function(firstColor, lastColor, boardSize) {
            var firstRGBColors = service.extractRGBColor(firstColor);
            var lastRGBColors = service.extractRGBColor(lastColor);

            var gradientSteps = service.computeGradientSteps(firstRGBColors, lastRGBColors, boardSize);

            var gradientColors = [];
            gradientColors.push(firstRGBColors);
            for (var i = 1; i < boardSize -1 ; i++) {
                var color = [
                    service.computeNextColor(firstRGBColors[0], lastRGBColors[0], gradientSteps[0], i),
                    service.computeNextColor(firstRGBColors[1], lastRGBColors[1], gradientSteps[1], i),
                    service.computeNextColor(firstRGBColors[2], lastRGBColors[2], gradientSteps[2], i)
                ];
                gradientColors.push(color);
            }
            gradientColors.push(lastRGBColors);

            return service.convertRGBColorsToHex(gradientColors);
        }

        service.computeNextColor = function(firstColor, lastColor, step, i) {
            if (firstColor > lastColor) {
                return Math.round(+firstColor - +step * i);
            } else {
                return Math.round(+firstColor + +step * i);
            }
        }

        service.computeGradientSteps = function(firstColors, lastColors, boardSize) {
            return [
                (Math.abs(firstColors[0] - lastColors[0])) / (boardSize -1),
                (Math.abs(firstColors[1] - lastColors[1])) / (boardSize -1),
                (Math.abs(firstColors[2] - lastColors[2])) / (boardSize -1)
            ]
        }

        service.convertRGBColorsToHex = function(colors) {
            var hexRowColors = [];
            colors.forEach(color => {
                var hexColor = service.convertRGBColorToHex(color);
                hexRowColors.push(hexColor);
            });
            return hexRowColors;
        };

        /**
         * Convert the RGB colors array: [16, 255, 4] to the color string: #11FF04
         */
        service.convertRGBColorToHex = function(color) {
            return '#'
                + service.convertMonoColorToHex(color[0])
                + service.convertMonoColorToHex(color[1])
                + service.convertMonoColorToHex(color[2]);
        }

        service.convertMonoColorToHex = function(monoColor) {
            var hex = monoColor.toString(16);

            //Add 0 if needed
            if (hex.length == 1) {
                return '0' + hex;
            }
            return hex;
        }

        /**
         * Convert the color string: #11FF04 to the RGB colors array: [16, 255, 4]
         */
        service.extractRGBColor = function(color) {
            if (color.startsWith('#')) {
                color = color.substring(1);
            }

            return [
                service.extractMonoColor(color, 0),
                service.extractMonoColor(color, 2),
                service.extractMonoColor(color, 4)
            ];
        }

        service.extractMonoColor = function(color, fromIndex) {
            return parseInt(color.substr(fromIndex, 2), 16);
        }

        service.isValidColor = function(text) {
            return angular.isDefined(text)
                && text.startsWith('#')
                && (text.length === 4 || text.length === 7);
        }

        service.normalizeColor = function(color) {
            if (service.isValidColor(color)
                && color.length == 4) {
                return '#'
                    + color.charAt(1) + color.charAt(1)
                    + color.charAt(2) + color.charAt(2)
                    + color.charAt(3) + color.charAt(3)
            }
            return color;
        }

        return service;
    })