const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 69 celifrick in outside, so :insertx: went for a wee bit of a jogger. Eventually they had arrived at the best place ever, the magical :inserty:, after staring at the sun for a little bit too long, :insertx: decided to :insertz:. Blue Will Smith saw the whole ordeal in its entirety and said to :insertx: “yaaaaaaa its rewind time” and sent :insertx: back in time to :insertk:. It was quite the sunny day and :insertx: saw a 420 ton T-Rex and now :insertx: wanted to go and eat some eggs.';
const insertX = ['Willy Will Smith', 'Will Will Smith smith Will Smith', 'Jeff'];
const insertY = ['Australia', 'Kansas', 'bathroom'];
const insertZ = ['Yell cuss words at the wall', 'Slap Chris Rock', 'eat the floor'];
const insertK = ['2020', 'Jesus Land (Year 0)', '2020 two electric boogaloo'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  const kItem = randomValueFromArray(insertK);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);
  newStory = newStory.replaceAll(':insertk:',kItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Blue Will Smith', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(420-351)} stone`;
    const temperature =  `${Math.round((69+351))} centigrade`;
    newStory = newStory.replaceAll('69 celifrick', temperature);
    newStory = newStory.replaceAll('420 ton', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
