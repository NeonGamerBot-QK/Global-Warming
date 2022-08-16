
console.log('Made by an Sfs student :)')

function createTitle(text, doc, namespace) {
   const exists = document.getElementById(`${namespace}-title`)
    if(!exists) {
      const title = document.createElement('h1');
    title.innerText = text;
    title.id = namespace+'-title'
    if(namespace == 'area51') title.className = 'redd'
    doc.append(title)
    } else {
      exists.innerText = text;
    }
}
function createFooter(text, doc, namespace) {
  const exists = document.getElementById(`${namespace}-footer`)
  if(!exists) {
    const f = document.createElement('footer');
    f.innerText = text;
    f.id = namespace+'-footer'
   setTimeout(() => doc.append(f),1)
  } else {
    exists.innerText = text;
  }
}
function createSources (sources, doc, namespace) {
  
    doc.append(document.createElement('br'))
    let title = document.createElement('h2')
    title.innerText= 'Sources'
    doc.append(title)
    sources.forEach((link, i) => {
    doc.append(document.createElement('br'))
    const f = document.createElement('a');
    f.href = link;
    f.innerText = link;
    f.id = namespace+'-source-'+i
    f.className = 'sources blu'
  doc.append(f)
  
    doc.append(document.createElement('br'))
    })
    doc.append(document.createElement('br'))

}
function createBody(filename, doc, namespace) {
    return new Promise((resolve, reject) => {
  const exists = document.getElementById(`body-${namespace}`)
    if(!exists){
        const p = document.createElement('p')
    p.className = 'lead'
    p.id = `body-${namespace}`
 fetch(`/${filename}`).then(res => res.text()).then(text => {
        p.innerHTML = ejs.render(text);
	let i = namespace
	 console.log(i === 0 ? doc.innerHTML.endsWith(`<hr class="divider" id="${i-1}">`) : true)
    if( i === 0 ? doc.innerHTML.endsWith(`<hr class="divider" id="${i-1}">`) : true) doc.append(p)
    resolve(text);
 })
    } else {
fetch(`/${filename}`).then(res => res.text()).then(text => {
        exists.innerHTML = ejs.render(text);
         resolve(text)
 })
    }
    })
}
function refresh() {
    if(window.location.pathname.toLowerCase() == '/area51') {
     // console.log(ejs)
        fetch('/area51.json').then(res => res.json()).then(async ({ title, footer, body,  sources }) => {
            const div = document.getElementById('area51')
            if(title) {
                createTitle(title, div, 'area51')
            }
            if(body) await createBody(body, div, 'area51') 
            
            if(footer) {
                createFooter(footer, div, 'area51')
            }
            if(sources && Array.isArray(sources)) {
              createSources(sources, div, 'area51')
            }
            
        })
    } else if(window.location.pathname.toLowerCase() == '/flatearth'){
fetch('/flatearth.json').then(res => res.json()).then(async ({ title, footer, body, sources }) => {
            const div = document.getElementById('flatearth')
            if(title) {
                createTitle(title, div, 'flatearth')
            }
            if(body) await createBody(body, div, 'flatearth') 
            
            if(footer) {
                createFooter(footer, div, 'flatearth')
            }
            if(sources && Array.isArray(sources)) {
              createSources(sources, div, 'flatearth')
            }
        })
    
    }
    else if(window.location.pathname === '/pizzaflu') {
      fetch('/michealjordan.json').then(res => res.json()).then(async ({ title, footer, body, sources }) => {
            const div = document.getElementById('michal')
            if(title) {
                createTitle(title, div, 'michal')
            }
            if(body) await createBody(body, div, 'michal') 
            
            if(footer) {
                createFooter(footer, div, 'michal')
            }
            if(sources && Array.isArray(sources)) {
              createSources(sources, div, 'michal')
            }
        })
    
    }    else if(window.location.pathname === '/palm') {
      fetch('/palmcartiny.json').then(res => res.json()).then(async ({ title, footer, body, sources }) => {
            const div = document.getElementById('palm')
            if(title) {
                createTitle(title, div, 'michal')
            }
            if(body) await createBody(body, div, 'michal') 
            
            if(footer) {
                createFooter(footer, div, 'michal')
            }
            if(sources && Array.isArray(sources)) {
              createSources(sources, div, 'michal')
            }
        })
    
    }
    else if(window.location.pathname === "/") {
      console.log('A home page :)')
	
function homepagethings() {
	const bodys = [];
		    const bodysDiv = document.getElementById("home-page");
    
	    const footer = document.createElement("footer");
	    footer.innerHTML = "Made by Abby, Saahil, Gabe and Davion."
	    footer.id = "credits"
const addFooter = () => {
bodysDiv.appendChild(document.createElement('br'))
	bodysDiv.append(footer)
}
	    let max = 4;
for (var i = 0; i < max; i++) {
	let ni = `${i}`
let hr = document.createElement("hr")
		hr.className = "divider";
	hr.id = i
	const promise = () => {
	let prom = createBody('body-'+i+'.txt', bodysDiv, i.toString()).then(() => {
		console.log("STAE", document.getElementsByTagName('hr').length-1 !== max)
	if(document.getElementsByTagName('hr').length-1 !== max)	bodysDiv.append(hr)
		// console.debug(ni+1,i,max)
				if(ni == max-1 && !document.getElementById('credits')) setTimeout(addFooter, 50)
	})

		
		
		prom.index = i
		return prom;
}

	bodys.push(promise());
}
	let fixed = [];
	bodys.forEach(e => {
		console.log(e)
		if(e.index) {
			
			fixed[e.index] = e;
		}
	})
	return Promise.all(fixed);
}
	    // homepagethings().then(console.log)
	    window.watch = () => {
		    console.debug("[DEV] file watcher started...")
		
		    let oldtext =[];
const it = () => homepagethings().then((texts) => {
texts.forEach((text, i) => {
	if(!oldtext[i]) {
	console.debug("No OldText, setting oldtext")
	// console.log(text)
	// console.log(oldtext)
	oldtext[i] = text;
}
	else if(oldtext !== text) {
	oldtext[i] = text;	console.debug("[DEV]: Text Changed")
		console.debug("[DEV]: body changed")
	} else {
		// console.debug("text did not change", oldtext)
	}
})
	it()
});
		    it()		
	    }
    }
    else {
	    console.log("404: page")
    }
}
refresh()
// var isDark = false;
// function Toggle() {
//   document.body.style.backgroundColor = isDark ? '#FFFFFF' : '#111'
//   // document.getElementsByClassName('div').forEach(div => {
//   //   div.style.backgroundColor = isDark ? '#FFFFFF' : '#111'
//   // })
  
//   document.getElementById('navbar').classList.toggle("dark-mode");
//   document.getElementById('footer').classList.toggle("dark-mode");
// isDark ? isDark = false : isDark = true;
// document.getElementById('mode').innerHTML = isDark ? 'light' : 'dark'
// }
var interval;
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
   // interval = setInterval(refresh,15000)
//document.getElementById('mode').innerHTML = 'dark'
});