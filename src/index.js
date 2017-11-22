import _ from 'lodash'
import './style.css';

// Adding a comment to see if webpack is watching.
const header = document.createElement('header')
const headerShadowRoot = header.attachShadow({mode: 'open'})
headerShadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>' // Could also use appendChild().

function component() {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')
  return element
}

document.body.appendChild(headerShadowRoot)
document.body.appendChild(component())

var host = document.querySelector('.container')
var root = host.attachShadow({mode: 'open'})
root.innerHTML = '<p>How <em>you</em> doin?</p>'
