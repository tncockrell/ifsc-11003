// ---- Star Rating ----
const starContainers = document.querySelectorAll(".stars");

    starContainers.forEach(container =>{
        const stars = container.querySelectorAll("span");

        stars.forEach(star =>{
            star.addEventListener("click", () =>{
                let rating = star.getAttribute("data-star");

                stars.forEach(s => {
                    s.classList.remove("active");
                    if(s.getAttribute('data-star') <= rating) {
                        s.classList.add("active");
                    }
                });
                alert("You rated this story " + rating + " out of 5!");
            });
        });
    });
    //---- Message Popup ----
    function openMessageForm() {
        document.getElementById("message-popup").style.display= "flex";
    }
    function closePopup() {
        document.getElementById("message-popup").style.display="none";
    }
     function sendFakeMessage() {
        let msg=document.getElementById("message-input").value;

        if(msg.trim() === ""){
            alert("Please type a message first!");
            return;
        }
        alert("Your message has been sent to the author!");
        document.getElementById("message-input").value="";
        closePopup();
    }

    function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
