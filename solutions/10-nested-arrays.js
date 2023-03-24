// BEGIN
const getSuperSeriesWinner = (scores) => {
    let res = 0;
    for (let score of scores) {
        res += Math.sign(score[0] - score[1])
    }
    if (res > 0) {
        return 'canada';
    }
    if (res < 0) {
        return 'ussr';
    }
    if (res == 0) {
        return null;
    }
}


export default getSuperSeriesWinner;
// END