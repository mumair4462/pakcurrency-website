let addBtn = document.getElementById('addBtn');
display();
addBtn.addEventListener('click', function (e) {
    console.log("Clicked");
    let comment_txt = document.getElementById('comment_txt');
    let localmemory = localStorage.getItem('comments3');
    let commentObj;
    if (localmemory == null) {
        commentObj = [];
    }
    else {
        commentObj = JSON.parse(localmemory);
    }
    commentObj.push(comment_txt.value);
    let a = [];
    a.push(comment_txt.value);
    // console.log(a);
    // console.log(comment_txt.lenght);
    if (!(a[0] == "" || a[0] == " ")) {
        localStorage.setItem('comments3', JSON.stringify(commentObj));
        comment_txt.value = " ";
    }
    display();
    // console.log(commentObj);

})
function display() {
    let localmemory = localStorage.getItem('comments3');
    let commentObj;
    let counter = 0;
    if (localmemory == null) {
        commentObj = [];
    }
    else {
        commentObj = JSON.parse(localmemory);
    }
    let html = " ";
    commentObj.forEach(function (element) {
        html += `
                <div class="comment-body">
                       <ul><li> <p>${element}</p></li></ul>
                </div>
        `;
        counter = counter + 1;
    });
    let comment = document.getElementById('comment');
    if (commentObj.lenght != 0) {
        comment.innerHTML = html;
    }
    let tcomm = document.getElementById('tcomm');
    tcomm.innerHTML = `Comment's(${counter})`;
    if (counter == 0) {
        comment.innerHTML = `
                <div class="comment-body">
                       <p style = "color: green;">No Comments</p>
                </div>
        `;
    }
}