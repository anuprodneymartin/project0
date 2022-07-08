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

});

let turns = 1;

// if (theWinneris() !== -1 && || theWinneris () = !== '') {
    
// }

console.log('Hello')