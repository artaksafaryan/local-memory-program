let input = document.getElementById("input");
let comment = document.getElementById("textarea");
let button = document.getElementById("button");
let commentsDiv = document.getElementById("commentsDiv");
let form = document.querySelector("form")

function saveToLocalStorage() {
  button.addEventListener("click", function () {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[monthIndex];
    const formattedDate = `${day} ${month} ${hours}:${minutes}`;

    const existingComments = JSON.parse(localStorage.getItem("comments")) || [];

    const newComment = {
      name: input.value,
      comment: comment.value,
      date: formattedDate
    };

    existingComments.push(newComment);

    localStorage.setItem("comments", JSON.stringify(existingComments));

    input.value = "";
    comment.value = "";

    
    displayComments();
  });
}

function displayComments() {
  
  const comments = JSON.parse(localStorage.getItem("comments")) || [];

  commentsDiv.innerHTML = "";

  comments.forEach(commentData => {

    const commentContainer = document.createElement("div");
    const nameSpan = document.createElement("span");
    const dateSpan = document.createElement("span");
    const commentPara = document.createElement("p");

    nameSpan.innerHTML = commentData.name;
    dateSpan.innerHTML = commentData.date;
    commentPara.innerHTML = commentData.comment;

    commentContainer.appendChild(nameSpan);
    commentContainer.appendChild(dateSpan);
    commentContainer.appendChild(commentPara);
    commentsDiv.appendChild(commentContainer);

    commentContainer.style.border = "1px solid #ddd";
    commentContainer.style.padding = "10px";
    commentContainer.style.marginBottom = "10px";
    nameSpan.style.backgroundColor = "#f36a6a87";
    nameSpan.style.padding = "2px 6px";
    nameSpan.style.borderRadius = "4px";
    dateSpan.style.float = "right";
    dateSpan.style.color = "#777";
    commentPara.style.marginTop = "5px";
    form.style.position= "fixed"
    commentsDiv.style.marginLeft = "20%"
      
  });
}

saveToLocalStorage();
displayComments();
