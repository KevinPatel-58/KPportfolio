const quotes = [
    {
        text: "Take the stones people throw at you, and use them to build a monument.",
        author: "Sir Ratan Tata"
    },
    {
        text: "In a conflict between the heart and brain, follow your heart.",
        author: "Swami Vivekanand"
    },
    {
        text: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
        author: "Dr. APJ Abdul Kalam"
    },
    {
        text: "You can't cross the sea merely by standing and staring at the water.",
        author: "Rabindranath Tagore"
    }
];

let currentIndex = 0;

window.onload=function(){
function showQuote(index) {
    document.getElementById("quoteText").innerText = `"${quotes[index].text}"`;
    document.getElementById("quoteAuthor").innerText =  `${quotes[index].author}`;
}

function nextQuote() {
    currentIndex++;
    if (currentIndex >= quotes.length) {
        currentIndex = 0;
    }
    showQuote(currentIndex);
}

function prevQuote() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = quotes.length - 1;
    }
    showQuote(currentIndex);
}

document.querySelector('.left-arrow').onclick=prevQuote;
document.querySelector('.right-arrow').onclick=nextQuote;
};