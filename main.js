const search=()=>{
    const searchbox=document.getElementById("search-list").value.toUpperCase();
    const storeitems=document.getElementById("items-list");
    const product=document.querySelectorAll(".items");
    const name=storeitems.getElementsByTagName("h2");

    for(var i=0;i<name.length;i++){
        let match=product[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue=match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                product[i].style.display="";
            }else{
                product[i].style.display="none";  
            }
        }
    }


}