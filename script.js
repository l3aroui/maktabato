fetch('data.json')
    .then(responce=>{
        if(!responce.ok){
            throw new Error('Network response was not ok' + responce.statusText)
        }
        return responce.json();
    })
    .then(data=>{
        const bookContainer=document.getElementById('books-container')
        data.books.forEach(book => {
            const bookDiv=document.createElement('div')
            bookDiv.classList.add('book');
            bookDiv.innerHTML=`
                <a href="${book.Link}">
                <img src="${book.imagePath}" alt="${book.title}" >
                <strong>${book.title}</strong>
                </a>
                <button class="whatsapp-button" 
                    onclick="window.open('https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}', '_blank')">
                    طلب عبر WhatsApp
                </button>
            `;
            bookContainer.appendChild(bookDiv);
        });
    })
    .catch(error=>{
        console.error('There was a problem with the fetch operation:', error)
    })
    // Sauvegarder la position de défilement avant de quitter la page
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
});

// Restaurer la position de défilement après le chargement de la page
window.addEventListener('load', () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
});