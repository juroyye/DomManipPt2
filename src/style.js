
// Menu data structure
let menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//  Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main")

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "#4a4e4d"

const newDomText = document.createElement("h1")
newDomText.textContent = "Dom Manipulation"
mainEl.appendChild(newDomText) 
mainEl.style.display = "flex"
mainEl.style.justifyContent = "center"
mainEl.style.alignItems = "center"


// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
topMenuEl.style.flex = "flex-around"

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property."

menuLinks.forEach((link) => {
let newEl = document.createElement("a")
 newEl.setAttribute("href", link.href)
 newEl.innerHTML = link.text;
 topMenuEl.append(newEl)
})

