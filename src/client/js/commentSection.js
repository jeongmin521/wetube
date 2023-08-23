const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const handleSubmit = (event) => {
    const textarea = form.querySelector("textarea");
    event.preventDefault();
    const videoId = videoContainer.dataset.id;
    const text = textarea.value;
    if(textarea===""){
        return;
    }
    fetch(`/api/videos/${videoId}/comment`, 
	    {method : "POST", 
         headers: {
            "Content-Type": "application/json",
          },
	     body : JSON.stringify({text})
	    });
}

if(form){
    form.addEventListener("submit", handleSubmit);
}
