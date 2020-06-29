const quotes = [
{
quote : "Never interrupt your enemy when he is making a mistake.",
name : "Napoleon Bonaparte"
},
{
quote : "Make foes of bowmen if you must, never of penmen.",
name : "Thiruvalluvar"  
},
{
quote : "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
name : "Terry Pratchett"
},
{
quote : "The only thing I’ve found that brings closure is when everyone’s finally in the ground.",
name : "Taliesin Jaffe" 
},
{
quote : `All opinions are not equal. Some are a very great deal more robust, sophisticated and well supported in logic and argument than others.`,
name : "Douglas Adams"
},
{
quote : `Science is not only compatible with spirituality, it is a profound source of spirituality`,
name : "Carl Sagan"
},
{
quote : "Language is not made to be believed but to be obeyed, and to compel obedience newspapers, news, proceed by rendundancy in that they tell us what we 'must' think, retain, expect, etc. Language is neither informational nor communicational. It is not the communication of information but something quite different: the transmission of order-words, either from one statement to another or within each statement, insofar as each statement accomplishes an act and the act is accomplished in the statement.",
name : "Gilles Deleuze"  
},
{
quote : `The police says that there is nothing to see on a road, that there is nothing to do but move along. It asserts that the space of circulating is nothing other than the space of circulation. Politics, in contrast, consists in transforming this space of ‘moving-along’ into a space for the appearance of a subject: i.e., the people, the workers, the citizens: It consists in refiguring the space, of what there is to do there, what is to be seen or named therein. It is the established litigation of the perceptible.", 
.`,
name : "Jacques Rancière"
},
{
quote : "You could not step twice into the same river, for other waters are ever flowing on to you.",
name : "Heraclitus" 
},

{
quote : `The secret of happiness, you see is not found in seeking more, but in developing the capacity to enjoy less.`,
name : "Socrates"
},
{
quote : "To demand of strength that it should not express itself as strength, that it should not be a desire to overcome, a desire to throw down, a desire to become master, a thirst for enemies and resistances and triumphs, is just as absurd as to demand of weakness that it should express itself as strength.",
name : "Friedrich Nietzche"
},
{
quote : `I have been and still am a seeker, but I have ceased to question stars and books; I have begun to listen to the teaching my blood whispers to me.`,
name : "Herman Hesse"  
},
{
quote : "The truth of our faith becomes a matter of ridicule among the infidels if any Catholic, not gifted with the necessary scientific learning, presents as dogma what scientific scrutiny shows to be false.",
name : "Thomas Aquinas"
},
{
quote: "The greatest happiness of the greatest number is the foundation of morals and legislation.",
name: "Jeremy Bantham"
},
{
quote: `One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another.`,
name:  "René Descartes"
},
{
quote: `Philosophy is a battle against the bewitchment of our intelligence by means of language.`,
name: `Ludwig Wittgenstein`
},
{
quote: `Is man merely a mistake of God's? Or God merely a mistake of man's?`,
name: "Friedrich Nietzche"
},
{
quote: "Life can only be understood backwards; but it must be lived forwards.",
name: "Søren Kierkegaard"
},
{
quote: `Philosophers have hitherto only interpreted the world in various ways; the point, however, is to change it.`,
name: "Karl Marx"
},
{
quote: "As is a tale, so is life: not how long it is, but how good it is, is what matters.",
name: "Seneca the Younger"
},
{
quote: "If you are depressed you are living in the past, if you are anxious you are living in the future. If you are at peace, you are living in the present.",
name: "Lao Tzu"
},
{
quote: "Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.",
name: "Francis Bacon"
},
{
quote: "The mob is the mother of tyrants.",
name: "Diogenes"
},
{
quote: "Know how to listen and you will profit even from those who talk badly.",
name: "Plutarch"
},
{
quote: "Medicine to produce health must examine disease; and music, to create harmony must investigate discord.",
name: "Plutarch"
},
{
quote: "Withdraw into yourself and look. And if you do not find yourself beautiful yet, act as does the creator of a statue that is to be made beautiful: he cuts away here, he smoothes there, he makes this line lighter, this other purer. ... Cut away all that is excessive, straighten all that is crooked, bring light to all that is overcast, labor to make all one glow or beauty and never cease chiseling your statue, until there shall shine out on you from it the godlike splendor of virtue.",
name: "Plotinus"
},
{
quote: `In every battle there comes a time when both sides consider themselves beaten; then he who continues the attack wins.`,
name: "Ulysses S. Grant"
},
{
quote: `Whoever said the pen is mightier than the sword obviously never encountered automatic weapons.`,
name: "Douglas McArthur"
},
{
quote: "Each time a woman stands up for herself, without knowing it possibly, without claiming it, she stands up for all women.",
name: "Maya Angelou"
},
{
quote: `I’m tough, I’m ambitious, and I know exactly what I want. If that makes me a bitch, OK.`,
name: "Madonna"
},
{
quote: "My mother did not raise me to ask for permission to lead.",
name: "Ayanna Pressley"
},
{
quote: `Have no fear of perfection; you’ll never reach it.`,
nme: "Marie Curie"
},
{
quote: `We are here, not because we are law-breakers; we are here in our efforts to become law-makers.`,
name: "Emmeline Pankhurst"
},
{
quote: `Under the leadership of a man you have all chosen to flee. We shall see how you prove yourselves under the hand of a woman.`,
name: "Ching Shih"
},
{
quote: `My mother always taught us that if people don’t agree with you, the important thing is to listen to them. But if you’ve listened to them carefully and you still think that you’re right, then you must have the courage of your convictions.`,
name: "Dr Jane Goodall"
},
{
quote: "If you want something said, ask a man; if you want something done, ask a woman.",
name: "Margaret Thatcher"
},
{
quote: `I will have my voice: Indian, Spanish, white. I will have my serpent’s tongue—my woman’s voice, my sexual voice, my poet’s voice. I will overcome the tradition of silence.`,
name: "Gloria E. Anzaldúa"
},
{
quote: "All I was doing was trying to get home from work.",
name: "Rosa Parks"
},
{
quote: `Before mass leaders seize the power to fit reality to their lies, their propaganda is marked by its extreme contempt for facts as such, for in their opinion fact depends entirely on the power of man who can fabricate it.`,
name: "Hannah Arendt"
},
{
quote: "The issue is once more the negation of the dimension of the political and the belief that the aim of politics – whether at the national or the international level – is to establish consensus on one single model, thereby foreclosing the possibility of legitimate dissent. The lack of political channels for challenging the hegemony of the neo-liberal model of globalization is, I contend, at the origin of the proliferation of radical negation of the established order.",
name: "Chantal Mouffe"
},
{
quote: "The most important decision is to act; the rest is merely tenacity.",
name: "Amelia Earhart"
},
{
quote: "The world is put back by the death of every one who has to sacrifice the development of his or her peculiar gifts to conventionality.",
name: "Florence Nightingale"
},
{
quote: "To show your true ability is always, in a sense, to surpass the limits of your ability, to go a little beyond them: to dare, to seek, to invent; it is at such a moment that new talents are revealed, discovered, and realized.",
name: "Simone de Beauvoir"
},
{
quote : "Experience is a hard teacher. First you get the test, and then you get the lesson.",
author: "Brian D. Krueger"
},
{
quote : "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
author : "Aristotle"
},
{
quote  : "If you don't stand for something, you'll fall for anything.",
author : "Irene Dunne"
},
{
quote  : "If you fail to plan, you are planning to fail!",
author : "Benjamin Franklin"
},
{
quote  : "Don't say you don't have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein.",
author : "H. Jackson Brown"
},
{
quote  : "Things are never so bad they can't be made worse.",
author : "Humphrey Bogart"
},
{
quote  : "Wise men talk because they have something to say. Fools talk because they have to say something.",
author : "Plato"
},
{
quote  : "It's not so much how busy you are, but why you are busy. The bee is praised. The mosquito is swatted.",
author : "Mary O'Connor"
},
{
quote  : "Some people stop [looking for work] because they're tired of change. Others because they're happy. And some people stop because they're being paid well enough to be unhappy.",
author : "Mark Stanley"
},
{
quote  : "Religion is excellent stuff for keeping common people quiet.",
author : "Napoleon Bonaparte"
},
{
quote  : "Extraordinary claims require extraordinary evidence",
author : "Carl Sagan "
},
{
quote  : "The foolish reject what they see and not what they think; the wise reject what they think and not what they see.",
author : "Huang Po"
},
{ 
quote  : "If the price is right, I'll fight a lion.",
author : "Mike Tyson"
},
{
quote  : "Death makes you popular. People who didn't even like you in life would come and say you were a nice guy. And flowers! You'll get more flowers than you ever got in your lifetime! Too bad it's too late.",
author : "George Carlin"
},
{
quote  : "A witty saying proves nothing",
author : "Voltaire"
},
{
quote  : "The only difference between genius and stupidity is that genius has its limits.",
author : "Albert Einstein"
},
{
quote  : "A fanatic is someone who won't change his mind and won't change the subject.",
author : "Winston Churchill"
},
{
quote  : "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
author : "Rick Cook"
},
{
quote  : "In three words I can sum up everything I learned about life. It goes on.",
author : "Robert Frost"
},
{
quote  : "You see things and say 'Why?' But I dream things that never were and say 'Why not?'",
author : "George Bernard Shaw"
},
{
quote  : "Education is the ability to listen to almost anything without losing your temper.",
author : "Robert Frost"
},
{
quote  : "To acquire knowledge, one must study; but to acquire wisdom, one must observe.",
author : "Marilyn vos Savant"
},
{
quote : `Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.`,
author : `Francis of Assisi`
},
{
quote : `Believe you can and you're halfway there.`,
name : `Theodore Roosevelt`
},
{
quote : `It does not matter how slowly you go as long as you do not stop.`,
name : `Confucius`
},
{
quote : `Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.`,
name : 'Thomas A. Edison'
},
{
quote : `The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.`,
name : "Confucius"
},
{
quote : `Don't watch the clock; do what it does. Keep going.",
name : "Sam Levenson`
}, 
{
quote : `A creative man is motivated by the desire to achieve, not by the desire to beat others.",
name : "Ayn Rand`
},
{
quote : `A creative man is motivated by the desire to achieve, not by the desire to beat others.",
name : Ayn Rand`
},
{
quote : "Expect problems and eat them for breakfast.",
name : "Alfred A. Montapert"
},
{
quote : "Start where you are. Use what you have. Do what you can.",
name:"Arthur Ashe"
},
{
quote : "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
name : "Samuel Beckett"
},
{
quote : "Be yourself; everyone else is already taken.",
name:"Oscar Wilde"
},
{
quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
name : "Albert Einstein"
},
{
quote : "Always remember that you are absolutely unique. Just like everyone else.",
name : "Margaret Mead"
},
{
quote : "Do not take life too seriously. You will never get out of it alive.",
name : "Elbert Hubbard"
},
{
quote : "People who think they know everything are a great annoyance to those of us who do.",
name : "Isaac Asimov"
},
{
quote : "Procrastination is the art of keeping up with yesterday.",
name : "Don Marquis"
},
{
quote : "Get your facts first, then you can distort them as you please.",
name : "Mark Twain"
},
{
quote : "A day without sunshine is like, you know, night.",
name : "Steve Martin"
},
{
quote : "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
name : "Ellen DeGeneres"
},
{
quote : "Don't sweat the petty things and don't pet the sweaty things.",
name : "George Carlin"
},
{
quote : "Always do whatever's next.",
name : "George Carlin"
},
{
quote : "Atheism is a non-prophet organization.",
name : "George Carlin"
},
{
quote : "Hapiness is not something ready made. It comes from your own actions.",
name : "Dalai Lama"
},
]

const initialState = {
    quotes: [...quotes],
    currentQuote: randomQuote(quotes)
}

function randomQuote(quotes) {
    return Math.floor( Math.random() * quotes.length)
}

const ActionType = {
    randomQuote: "Generate Random Quote"
};

export const ActionCreators = {
    randomQuote() {
        return {type : ActionType.randomQuote}
    }
}


export default function quoteMachineState(state = initialState, action) {
    switch (action.type) {
        case (ActionType.randomQuote):
            return {...state, currentQuote : randomQuote(state.quotes)}
        default:
        return state;
    }
}
