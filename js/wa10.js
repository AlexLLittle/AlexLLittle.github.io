const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar'); // the bar of images

const btn = document.querySelector('button'); // the light dark button
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg']
/* Declaring the alternative text for each image file */
const alts = { // since the alts relate to images use colon adding them to the images
    'pic1.jpg' :'HA YOU JUST GOT WEEZED',
    'pic2.jpg' : 'im a bad bad man',
    'pic3.jpg' : 'i have a bit of a full moon fever' ,
    'pic4.jpg' : 'my soul is made of rubber',
    'pic5.jpg' : 'me and my passed away dog.'

}
/* Looping through images */
for (const image of images) {

    const newImage = document.createElement('img'); //img is the html element. We are changing it which is why we are using the variable
    newImage.setAttribute('src', `/img/images/${image}`); // we are grabbing the image
    newImage.setAttribute('alt', `alts[img]`); // setting the alt text in relation
    thumbBar.appendChild(newImage); // showing all of the images
    newImage.addEventListener('click', e => { // detecting clicks to chaneg somet
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
      });
    } 

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => { // making it so that you can click the dark/light button
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light'); // making the button change
      btn.textContent = 'Lighten'; // text of button is now lighten
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });