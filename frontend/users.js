         //render users data in table view
    let tbody = document.querySelector("tbody")
    let empty = document.getElementById("empty")
    let totalPage = '';
    let currentPage = '';
        let RenderUsers = async (query="") => {
        let url = `http://localhost:4000/get-all-users/${query}`
        let data = await fetch(url);
        data = await data.json()
        totalPage = data.pages
        currentPage = data.currentPage
        data = data.results
        tbody.innerHTML = "";
        const res = data.map((user)=>{
            return `<tr>
                    <td><img src="${user.picture_thumbnail}"/></td>
                    <td>${user.first_name}</td>
                    <td>${user.last_name}</td>
                    <td>${user.gender}</td>
                    <td>${user.registered_age}</td>
                    <td>${user.email}</td>
                    <td>${user.username}</td>
                    <td>${user.password}</td>
                    <td>${user.street_number}</td>
                    <td>${user.street_name}</td>
                    <td>${user.city}</td>
                    <td>${user.title}</td>
                    
                </tr>`  
            
        })
            tbody.innerHTML = res.join("")
        
    }
    RenderUsers()


       //filter  users data by title
 let form = document.querySelector("form")

 form.addEventListener("submit",(e)=>{
       e.preventDefault()
      
       let query = "?"
       let value = e.target.title.value
        query+=`title=${value}`
        // console.log(query)
         RenderUsers(query)
       
 })

     //filter by gender
 let select = document.querySelector("select")  
 
 select.addEventListener("change",()=>{
    
    let query = "?"
    let value = select.value
    query+=`gender=${value}`
     console.log(query)
     RenderUsers(query)
    // window.location.reload()
 })

          //pagination
// Disable/enable pagination buttons based on current page
const previousBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const span = document.querySelector("span")


// Attach event listeners to pagination buttons
    previousBtn.addEventListener("click", () => {
        let query = "?"
    if (currentPage > 1) {
        currentPage--;
        span.innerText = currentPage
        query+=`page=${currentPage}`
        RenderUsers(query);
        currentPage < totalPage ? nextBtn.disabled = false : '';
    }
    currentPage == 1 ? previousBtn.disabled = true : '';
});

    nextBtn.addEventListener("click", () => {
        let query = "?"
        if (currentPage < totalPage) {
        currentPage++;
        span.innerText = currentPage
        query+=`page=${currentPage}`
        RenderUsers(query)
        if(currentPage == totalPage){ nextBtn.disabled = true }
        
        }
        currentPage > 1 ? previousBtn.disabled = false : previousBtn.disabled;
    });  
        
        