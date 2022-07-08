$(document).ready(function (){ 
    $('.box').on('click', function(){
        if( $(this).text() === '' && turns%2 !== 0){
            $(this).text('x');
            $(this).css('color', '#00FF00');
            turns++
        }else if ($(this).text() === '' && turns%2 !== 1) {
            $(this).text('0');
            $(this).css('color', '#FFFFF0');
            turns++
        }
    });
    $('#1').ready
});

let turns = 1;
const winningCombinationDivs = [[1,2,3], [4, 5, 6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

const checkWinner = function(){
    for(let i=0; i<winningCombinationDivs.length; i++){

    }

};

console.log('Hello')

