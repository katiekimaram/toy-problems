/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidRow = function(board) {
    let checker = 0, num;
    for(let i = 0; i < 9; i++){
        if(board[i] != '.'){
            num = board[i] - '0';
            if((checker & (1 << num)) > 0)
                return false;
            checker = (checker | (1 << num));
        }
    }
    return true;
}
var isValidColumn = function(board, j) {
    let checker = 0, num;
    for(let i = 0; i < 9; i++){
        if(board[i][j] != '.'){
            num = board[i][j] - '0';
            if((checker & (1 << num)) > 0)
                return false;
            checker = (checker | (1 << num));
        }
    }
    return true;
}
var isValidCell = function(board, n, m) {
    let checker = 0, num;
    for(let i = n; i < n + 3; i++){
        for(let j = m; j < m + 3; j++){
            if(board[i][j] != '.'){
                num = board[i][j] - '0';
                if((checker & (1 << num)) > 0)
                    return false;
                checker = (checker | (1 << num));
            }
        }
    }
    return true;
}
var isValidSudoku = function(board) {
    let i;
    for(i = 0; i < 9; i++){
        if(!isValidRow(board[i])){
            return false;
        }
    }
    for(i = 0; i < 9; i++){
        if(!isValidColumn(board, i)){
            return false;
        }
    }
    for(i = 0; i < 9; i += 3){
        for(let j = 0; j < 9; j += 3){
           if(!isValidCell(board, i, j)){
                return false;
            }
        }
    }
    return true;
};