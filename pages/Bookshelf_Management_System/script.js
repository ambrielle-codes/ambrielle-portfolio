let books = [];

function updateBookshelf(){
    const bookList = document.getElementById('bookList');
    const input = document.getElementById('bookInput');
    input.value = '';
    if (books.length === 0){
        bookList.innerHTML = "<p>No books on shelf.</p>"
        return;
    } 
    
    let html = "<strong>Front of shelf</strong><br>";
    books.forEach((i, index) => {
        html += `${index + 1}. ${i} <br>`;
    });

    html += '<strong> End of shelf </strong>'
    bookList.innerHTML = html;
    
}

function addToFront(){
    const input = document.getElementById('bookInput').value;
    console.log(input);
    books.unshift(input);
    console.log(books);
    updateBookshelf()
}

function addToEnd(){
    const input = document.getElementById('bookInput').value;
    console.log(input);
    books.push(input);
    console.log(books);
    updateBookshelf()
}

function removeFromFront(){
    const input = document.getElementById('bookInput').value;
    console.log(input);
    books.shift(input);
    console.log(books);
    updateBookshelf()
}

function removeFromEnd(){
    const input = document.getElementById('bookInput').value;
    console.log(input);
    books.pop(input);
    console.log(books);
    updateBookshelf()
}