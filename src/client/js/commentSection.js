const form = document.getElementById("commentForm");
const videoContainer = document.getElementById("videoContainer");

const addComment = (text, newCommentId) => { 
    const videoComments = document.querySelector(".video__comments ul")
    const newComment = document.createElement("li") 
    newComment.dataset.id = newCommentId;
    const icon = document.createElement("i"); 
    const span = document.createElement("span"); 
    const span2 = document.createElement("span"); 

    newComment.className = "video__comment"; 
    icon.className = "fas fa-comment" 
    span.innerText = ` ${text}`;
    span2.innerText = "X";
    
    newComment.appendChild(icon); 
    newComment.appendChild(span);
    newComment.appendChild(span2);
    videoComments.prepend(newComment); 
}

const handleSubmit = async (event) => {
    const textarea = form.querySelector("textarea");
    event.preventDefault(); 
    
    const videoId = videoContainer.dataset.id; 
    const text = textarea.value;
    if (textarea === "") {
        return;
    }
    const response = await fetch(`/api/videos/${videoId}/comment`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text })
        });
    if (response.status === 201) {
        const { newCommentId } = await response.json();
        addComment(text, newCommentId);
        textarea.value = "";
     }
}   
    if (form) {
        form.addEventListener("submit", handleSubmit);
    }

