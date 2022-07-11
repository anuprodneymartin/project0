$(document).ready(function (){ 
    $('.box').on('click', function(){
        if( $(this).text() === '' && turns%2 !== 0){
            $(this).text('x');
            $(this).css('color', '#00FF00');
            turns++
            if(checkWinner()){
                $('.game-over').text('Player 1  wins!')
            }else if(checkBoxesFull() ){
                $('.game-over').text('The game is DRAWN, better luck next time');
            }
        }else if ($(this).text() === '' && turns%2 !== 1) {
            $(this).text('0');
            $(this).css('color', '#FFFFF0');
            turns++
            if(checkWinner()){
                $('.game-over').text('Player 2 wins!')
            }
        }
    });
    let turns = 1;
const winningCombinationDivs = [[1,2,3], [4, 5, 6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

const checkWinner = function(){
    for(let i=0; i<winningCombinationDivs.length; i++){
        const winningCombination=winningCombinationDivs[i];
        const id1 = winningCombination[0];
        const id2 = winningCombination[1];
        const id3 = winningCombination[2];
        if(($('#' + id1).text() === 'x' && $('#' + id2).text() === 'x' && $('#' + id3).text() ==='x') || 
        $('#' + id1).text() === "0" && $('#' + id2).text() === '0' && $('#' + id3).text() === '0') {
            return true;
        }
    }
    return false;

};
const checkBoxesFull = function (){
    let output = true
    $('.box').each(function(){
        const boxContent = $(this).text()
        if (boxContent === ''){
            output = false
        }
    })
    return output;
}
});

//learn adding images, sounds.

console.log('Hello')

