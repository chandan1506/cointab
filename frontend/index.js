
    let fetch_btn = document.getElementById("fetch")
    let delete_btn = document.getElementById("delete")
    let delalert = document.getElementById("delalert")
    let yes_btn = document.getElementById("pos")
    let no_btn = document.getElementById("neg")
    let isFetching = false

    //fetching and saving users
    fetch_btn.addEventListener("click", async () => {
        if (!isFetching) {
            isFetching = true
            fetch_btn.innerText = "Processing..."
            let result = await fetch("http://localhost:4000/fetch-users", {
                method: "GET"
            })
            result = await result.json()
            fetch_btn.innerText = "Fetch Users"
            isFetching = false
            alert(result.message)
        } else {
            alert("Please wait! request is in progress!")
        }
    })

    //deleting all users
    delete_btn.addEventListener("click", () => {
        delalert.setAttribute("style", "display:block")
    })

    yes_btn.addEventListener('click', async () => {
        delalert.setAttribute("style", "display:none")
       delete_btn.innerText = "Processing..."
        let result = await fetch("http://localhost:4000/delete-all-users", {
            method: "DELETE"
        })
        result = await result.json()
       delete_btn.innerText = "Delete All Users"
        alert(result.message)
    })

    no_btn.addEventListener('click', () => {
        delalert.setAttribute("style", "display:none")
    })
