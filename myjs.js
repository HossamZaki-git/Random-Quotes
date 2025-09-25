quotes =[
    {
        quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
        author : "Steve Jobs"
    },
    {
        quote : "You only live once, but if you do it right, once is enough",
        author : "Mae West"
    },
    {
        quote : "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author : "Maya Angelou"
    },
    {
        quote : "Insanity is doing the same thing, over and over again, but expecting different results.",
        author : "Narcotics Anonymous"
    },
    {
        quote : "Life has no limitations, except the ones you make.",
        author : "Les Brown"
    },
    {
        quote : "Start each day with a positive thought and a grateful heart.",
        author : "Roy Bennett"
    },
    {
        quote : "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
        author : "Bill Keane"
    },
    {
        quote:"So many books, so little time.",
        author:"Frank Zappa"
    },
    {
        quote:"A room without books is like a body without a soul.",
        author:"Marcus Tullius Cicero"
    }
];
function randind()
{
    return (Math.floor(Math.random()*quotes.length))%quotes.length;
}

function getquote()
{
    ind=randind();
    document.getElementById("qu").innerHTML=`
        <h2 class="text-center">" ${quotes[ind].quote}"</h2>
        <h2 class="text-center">--${quotes[ind].author}</h2>
    `
}