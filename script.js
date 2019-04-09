// select input items where type is checkbox
var items =document.querySelectorAll('.item [type=checkbox]')


//postion handler for items
var first,second;


//loop through elements to add event listener
for(let item =0;item < items.length ; item++){
    /**
     * 
     * @param: [action , anyom. func.]
     * 
     * @returns: void
     * 
     * @description:it trigger when clicked; init. first item; and if e.shiftkey is true 
     *              it will checked all items in between
     */
    items[item].addEventListener
    ('click',function checkboxChanged(e) {
        //check if shift key is not pressed; assign every key to first
        if(!e.shiftKey){
            first = item;
        }
        else{
            //else if shift key is pressed; assign key to second
            if (e.shiftKey) {
                second = item;
                //check postion and order of first and second and operate according to.
                if(first < second){
                    for(i= first+1; i <= second; i++){
                        items[i].checked = (items[first].checked);
                    }
                }
                else if (second < first){
                    for(i = first-1; i >= second; i--){
                        items[i].checked = (items[first].checked);
                    }
                }
                //reinit. the values
                first = second =undefined
            }
        }
    });
}