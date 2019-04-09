var items =document.querySelectorAll('.item [type=checkbox]')
var first,second;
for(let item =0;item < items.length ; item++){
    items[item].addEventListener('click',function checkboxChanged(e) {
        console.log(e.shiftKey);
        if(e.shiftKey){
            first = item;
            console.log("first : ")
            console.log(first)
        }
    });
}
