import Vue from 'vue'
import _ from 'lodash'
import './style.css'
import Message from './message.vue'

// Adding a comment to see if webpack is watching.
const url = new URL(window.location)

if(url.pathname === '/') {

  const header = document.createElement('header')
  const headerShadowRoot = header.attachShadow({mode: 'open'})
  headerShadowRoot.innerHTML = '<h1>You are on the home page.</h1>' // Could also use appendChild().

  function component() {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'der', 'webpack'], ' ')
    element.classList.add('hello')
    return element
  }

  document.body.appendChild(headerShadowRoot)
  document.body.appendChild(component())

  var host = document.querySelector('.container')
  var root = host.attachShadow({mode: 'open'})
  root.innerHTML = '<p>How <em>you</em> doin?</p>'

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
