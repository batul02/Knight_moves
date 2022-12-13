let n = 8;
let m = 8;

function findPossibleMoves(mat, p, q)
{
    let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
    let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

    let count = [];
    for (let i = 0; i < 8; i++) {
        let x = p + X[i];
        let y = q + Y[i];
        if (x >= 0 && y >= 0 && x < n && y < m && mat[x][y] == 0)
            count.push(Array(x,y))
    }
    return count;
}

// You can assume that there are no pieces of the opposite color and hence no blocks.

let mat = [ [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0 ] ];

let p = 2, q = 2;

console.log(findPossibleMoves(mat, p, q));
