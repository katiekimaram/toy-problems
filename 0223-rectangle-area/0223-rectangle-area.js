/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let area = 0
    const minX = Math.min(ax1, bx1)
    const maxX = Math.max(ax2, bx2)
    for (let i = minX; i < maxX; i++){
        let inA = (i<ax2 && i>=ax1)
        let inB = (i<bx2 && i>=bx1)
        if(inA && inB){
            area+=(Math.max(ay2, by2)-Math.min(ay1, by1))
            if(ay1>by2) area-=(ay1-by2)
            else if (by1>ay2) area-=(by1-ay2)
        }
        else if(inA) area+=(ay2-ay1)
        else if(inB) area+=(by2-by1)
    }
    return area
};