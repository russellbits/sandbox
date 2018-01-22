import Vue from 'vue'
import _ from 'lodash'
// import SVG from 'svg.js'
// import Snap from 'snapsvg'
import './style.css'
import Message from './message.vue'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';


// Write statement to page that confirms above URL check
const header = document.createElement('div')
const headerShadowRoot = header.attachShadow({mode: 'open'})
headerShadowRoot.innerHTML = '<h1>Javascript Sandbox</h1>' // Could also use appendChild().
document.body.appendChild(headerShadowRoot)

/** Checking URL so scripts below only run on index.html
 * or the desired function, placed in the results component
**/
const url = new URL(window.location)
var gate
var msg = ['Hello', 'der', 'webpack']


/**
 * Check the parameters for the sandbox
 */
if(url.search.substr(1).length < -1) {
  gate = 'index'
} else {
  gate = url.searchParams.get("fn")
}

/**
 * Here's an alternate function from css-tricks
 * This function can retrieve multilpe parameters
 **/
function getQueryVariable(variable)
{
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}

/**
 * Switch based on the gate
 * TODO: get selectWithLoss or encase to run inside this component gate
 * which could mean giving component a function as opposed to an array
 */
switch(gate) {
  case 'index':
    document.body.appendChild(component(['A', 'Custom', 'Component!']))
    break
  case 'nominal':
    document.body.appendChild(component(['Hello', 'from', 'nominal']))
    break
  case 'kate':
    document.body.appendChild(component(['Hi', 'there', 'Kate']))
    break
  default:
    document.body.appendChild(component(['Hello', 'from', 'default']))
}

/**
 * This component requires an array (msg) as input
 */
function component(msg) {
  var element = document.createElement('div')
  element.classList.add('hello') // this should be the result
  element.classList.add('transition') // this should be the result
  element.innerHTML = _.join(msg, ' ') // this should come from the switch
  return element
}

/**
 * Returns an array with a random selection removed from the array
 * as well as the new shortened array
 * [selection, array]
 */
function selectWithLoss(arr) {
  // Choose a random number based on length of array
  var selectionIndex = Math.floor(Math.random() * (arr.length - 0 + 1)) + 0;
  // Based on the random selection
  var selection = arr.splice(selectionIndex, 1);
  return [selection, arr]
}

let cardDeck = ['Ace','King','Queen','Jack','Ten','Nine','Eight','Seven','Six','Five','Four','Three']
let n = cardDeck.length
let i = 0

// Demonstration
for(i=0; i < n; i++) {
  var results = selectWithLoss(cardDeck)
  cardDeck = results[1]
  console.log("You chose: " + results[0])
  console.log(cardDeck)
  console.log(cardDeck.length)
}
