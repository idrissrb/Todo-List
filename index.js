document.querySelector(".addtodo").addEventListener('click',function(){
    let name,content;
    content = document.querySelector(".content").value ;
    name = document.querySelector(".name").value ;
    //the todo element to add to the list
    const todo = `
            <div class="element my-2 p-3">
                <p>${name}: ${content}</p>
                <a href="#" class="delete" style="color: white;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash mx-2" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                </a>
            </div>
    `
    //add the todo element at the end of the list
    document.querySelector(".left").insertAdjacentHTML("beforeend", todo);
    //reset the values of content and name 
    document.querySelector(".name").value ='';
    document.querySelector(".content").value ='';
})
// add an eventlistner to all the delete buttons 
document.querySelector(".left").addEventListener('click', function(event) {
    if (event.target && event.target.closest('a.delete')) {
        event.preventDefault();
        //remove element from the todo list 
        event.target.closest(".element").remove();
    }
});