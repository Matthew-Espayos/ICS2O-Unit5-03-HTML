// The code below will make the first header font color to #201a23
document.getElementById('myheader').style.color = '#201a23'
// The code below will make the first paragraph font color to #201a23
document.getElementById('myparagraph').style.color = '#201a23'
// The code below will display an image of Spongebob Squarepants and Patrick Star
document.getElementById('myimage').src = './images/spongebobandpatrick.jpg'
// The code below will add an event listener to the button
document.getElementById('mybutton').addEventListener('click', myFunction)
function myFunction () {
  alert(document.getElementById('myinput').value)
}
