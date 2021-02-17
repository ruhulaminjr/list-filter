let filtertext = document.getElementById('filterinput');

filtertext.addEventListener('keyup',searchnames);

function searchnames(){
    let filtervalue = document.getElementById('filterinput').value.toUpperCase();
    // console.log(filtervalue);
    let ul = document.getElementById('names');
   
    let li = ul.querySelectorAll('li.collection-item');

    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filtervalue)> -1) {
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }


}
