let input = document.getElementById('input');
function clrAll(){
    input.value = ''
}

function sumShow(sum){
    input.value += sum

}
function result(){
    if( input.value == ''){
        input.value = '0'
    }
    let x = input.value
    let result = eval(x)
    input.value = result
    console.log(result) 
}
function del(){
    input.value = input.value.slice(0, -1)
}
