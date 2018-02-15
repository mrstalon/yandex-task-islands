(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на картa

        let returnedObject = {};
        let islandsCount = 0;
        let matrix = [];
        let haveIslandsBeenCount = false;

        for(let i=0; i<map.length; i++) {
            matrix[i] = [];
            for(let r=0; r<map[i].length; r++) {
                matrix[i][r] = map[i][r];
            }
        }


whileloop: while (!haveIslandsBeenCount) {

            for(let i=0; i<matrix.length; i++) {
                for(let r=0; r<matrix[i].length; r++) {
                    if(matrix[i][r] === 1) {
                        returnedObject = deleteIslandRecursive(matrix, r, i);
                        islandsCount+= returnedObject.islandsToAdd;
                        matrix = returnedObject.map;
                        continue whileloop;
                    }
                }
            }
            haveIslandsBeenCount = true;
        }

        return islandsCount;
    }

    function deleteIslandRecursive(map, x, y) {
        let arrayToReturn = map;
        let objectToReturn = {};

        arrayToReturn[y][x] = 0;
        objectToReturn = {
            map: arrayToReturn,
            islandsToAdd: 1,
        }
        if(x-1 >= 0) {
            if(arrayToReturn[y][x-1]===1) {
                objectToReturn = deleteIslandRecursive(arrayToReturn, x-1, y);
            }
        }
        if(x+1 <= arrayToReturn[y].length-1) {
            if(arrayToReturn[y][x+1]===1) {
                objectToReturn = deleteIslandRecursive(arrayToReturn, x+1, y);
            }
        }
        if(y-1 >= 0) {
            if(arrayToReturn[y-1][x]===1) {
                objectToReturn = deleteIslandRecursive(arrayToReturn, x, y-1);
            }
        }
        if(y+1 <=arrayToReturn.length-1) {
            if(arrayToReturn[y+1][x]===1) {
                objectToReturn = deleteIslandRecursive(arrayToReturn, x, y+1);
            }
        }

        return objectToReturn;
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
