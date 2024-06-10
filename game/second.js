const searchbar = document.getElementById('searchbar');

searchbar.addEventListener('input',function(){
    const searchText = searchbar.value.toLowerCase();
    const sidebar = document.getElementById('sidebar');
    const elements = sidebar.querySelectorAll('.element');

    elements.forEach(element=>{
        const text=element.textContent.toLowerCase();
        if(text.includes(searchText)){
            element.style.display='inline-block';
        }
        else{
            btn.style.display='none';
        }
    });
});