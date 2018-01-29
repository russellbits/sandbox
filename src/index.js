import Vue from 'vue'
import SVG from 'svg.js'
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



(function () {
  console.log('grr')
})

(function Bear () {
  ;['1','Two','banana'].forEach(function (n) {
    console.log(n)
  })
}())

document.body.appendChild(headerShadowRoot)
document.body.appendChild(component())

// var host = document.querySelector('.container')
// var root = host.attachShadow({mode: 'open'})
// root.innerHTML = '<svg id="drawing"></svg>'

var draw = SVG('drawing').size(300, 300)
var rect = draw.rect(100, 100).attr({ fill: '#f06' })

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
