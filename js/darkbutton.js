/* dark button */
var count = 0;

$('.badge').on('click' , function(){
    count++;
    if (count % 2 === 1){
        $('.badge').html('Light 🔄')
    }
    else{
        $('.badge').html('Dark 🔄')
    }
});

const place = '--도';
let age = 17;

var 예금액 = 60000;
var ㅁㄹ = 0;
if(예금액 < 50000){
ㅁㄹ = 예금액 * 1.15 * 1.15;
}
else{
    ㅁㄹ = 예금액 * 1.2 * 1.2;
}
console.log(ㅁㄹ)

var first = 360;
var to = 0;
to = first + (first/3*2) + (first/3*2/3*2);
console.log(to)