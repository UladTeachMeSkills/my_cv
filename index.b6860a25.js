function e(e){return e&&e.__esModule?e.default:e}var n;n=JSON.parse('{"skills":[{"name":"React","score":96,"additional":["Type Script","Redux","FLUX","Hooks","MobX","Antd","Three-fiber","Three-drei","Mobx state tree","Webpack","Vite"]},{"name":"Java Script","score":98,"additional":["ES6+","jQuery","RESTful API","Webpack","Parcel","Gulp","Three JS","AJAX","WebSocket"]},{"name":"Angular","score":88,"additional":["Type Script","RxJs","Native Script","Webpack","UI material"]},{"name":"HTML / CSS","score":97,"additional":["BEM","Less","SASS","Responsive","Cross-browser","Accessebility","WCAG"]},{"name":"Node","score":87,"additional":["Mongodb","Next","Google API"]}],"languages":[{"name":"English","description":"Intermediate","score":70},{"name":"Russian","description":"Native","score":100}],"studies":[{"name":"Belarusian National Technical University","description":"Faculty of Mechanical Engineering. Mechanical engineering technology","date":"2016 - 2022"}],"experience":[{"name":"Alar Studios","period":"01/2021 - PRESENT","front":"alar.0f17a017.svg","back":"https://i.imgur.com/11jnrmi.png","description":"<p>\\nProject: Portal for the management of Organizations, their management and work on identified problems and their solutions.\\nRegion: USA.\\nStack: React, TypeSctipt, MobX, Antd, Vite.\\nResponsibilities: Change / Creation / Development / Support / Adding functionality.\\n Position: Frontend developer.\\n</p>\\n<p>\\nProject: The sister platform for helping people with their psychological or physical problems in the field of medicine.\\n Region: USA.\\nStack: JS, CoffeeScript.\\nResponsibilities: Adaptation to WCAG / Identification of bugs and their correction / Implementation of new functionality / Issuance of tasks to work / Monitoring the progress of work / Solving complex conflict situations when combining different development branches.\\nPosition: Frontend Developer / Team Lead WCAG.\\n</p>\\n<p>\\nProject: The main platform for helping people with their psychological or physical problems in the field of medicine.\\nRegion: USA.\\nStack: JS, CoffeeScript.\\nResponsibilities: Adaptation to WCAG / Identification of bugs and their correction / Implementation of new functionality.\\nPosition: Frontend developer.\\n</p>\\n<p>\\nProject: Admin panel for managing platforms to help people with their psychological or physical problems (KMS).\\nRegion: USA.\\nStack: React, TypeSctipt, Atom.\\nResponsibilities: Change / Create / Add functionality.\\nPosition: Frontend developer.\\n</p>"},{"name":"Aligned Code","period":"08/2020 - 12/2020","front":"aligned.b027a811.png","back":"https://i.imgur.com/TYQCxQN.png","description":"<p>\\nProject: SmartTV application for online cinema.\\nRegion: Belarus, Russia.\\nStack: React, TypeSctipt, Redux.\\nResponsibilities: Creation of an application from scratch / development of its architecture / its further development.\\nPosition: Frontend developer.\\n</p>\\n<p>\\nProject: Native Android app - medicine reminder.\\nRegion: Belarus, Russia.\\nStack: Angular, TypeScript, NativeScript.\\nResponsibilities: Creation of an application from scratch / development of its architecture / its further development.\\nPosition: Frontend developer.\\n</p>"},{"name":"TeachMeSkills","period":"Part time","front":"teachmeskills.afa12a89.svg","back":"https://thumb.tildacdn.com/tild6630-3466-4134-b037-353935313631/-/resize/500x500/-/format/webp/Frame_11-min.png","description":"<p>\\nPosition: Frontend teacher.\\nResponsibilities: Explaining the material / Teaching a group of up to 15 people / Reviewing the code / Conducting lectures / Checking homework / Assistance in writing correct and easy code.\\nLocation: Belarus / Russia / Ukraine / Poland / Georgia.\\n</p>"},{"name":"Peleng","period":"08/2015 - 11/2020","front":"peleng.fcf2e75c.svg","back":"https://i.imgur.com/m2OnN7Y.png","description":"<p>\\nPosition: Setup engineer, CNC machines.\\nResponsibilities: Development of technology for processing a part / Writing control programs for machine tools / Creation of a 3D model of the part / Full support of the part during processing / Reading and creating drawings / Manufacturing of high-precision parts for the space and military industries.\\nLocation: Belarus.\\n</p>"},{"name":"Freelance","period":"12/2018 - 01/2021","front":"freelance.74931cf7.svg","back":"https://i.imgur.com/BQJLzqi.png","description":"<p>\\nPosition: Software engineer.\\nResponsibilities: Creation of SPA applications / Creating a MERN stack of applications / Implementation of practical and term papers / Support for commercial projects / Creation native applications.\\nLocation: Belarus.\\n</p>\\n<p>\\nProject: Platform for interns to team up and showcase their work to recruiters.\\nRegion: Belarus.\\nStack: React, TypeSctipt, Redux, Node.js, MongoDB.\\nResponsibilities: Creating an application from scratch / developing its architecture / further developing it / delegating responsibilities / managing teams / issuing and creating tasks / managing sprints / developing the business part of the product and promoting it to the masses / managing teams in a total of 40 people.\\nPosition: Frontend developer / Team Lead / Product Owner / Project Manager.\\n</p>"}],"about":"<p>\\nSoftware Developer with 4 years of commercial development. Professional possession of HTML,\\nCSS, JavaScript, TypeScript, Angular, React, Node. Capable to work alone and in large teams.I have team leadership skills. Capable of analysis and expertise of the project and tasks.\\n\\nI have experience teaching in groups of up to 15 people in the direction of front-end\\ndevelopment.\\n</p>"}');const t=document.querySelector(".skills__main"),i=document.querySelector(".skills__language"),o=document.querySelector(".skills__studies"),a=document.querySelector(".experience__wrapper"),r=document.querySelector(".header__nav"),s=document.querySelector(".sidebar__nav"),c=document.querySelector(".header__burger button"),l=document.querySelector(".sidebar__wrapper"),p=(e,n)=>{if("A"===e.target.tagName){e.preventDefault();const n=e.target.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}n&&d()},d=()=>{l.classList.contains("active")&&(l.classList.add("close"),setTimeout((()=>{l.classList.remove("close")}),2e3)),l.classList.toggle("active")},m=e=>document.querySelector(".about__description").innerHTML=e,g=e=>{let n=document.createElement("div");n.className="skill",n.innerHTML='<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">\n      <stop offset="0%" stop-color="#00bc9b" />\n      <stop offset="100%" stop-color="#5eaefd" />\n    </linearGradient>\n  </defs>\n  <circle r="45" cx="50" cy="50" />\n  <path\n    class="meter"\n    stroke="url(#gradient)"\n    d="M5,50a45,45 0 1,0 90,0a45,45 0 1,0 -90,0"\n    stroke-dashoffset="282.78302001953125"\n    stroke-dasharray="282.78302001953125"\n  />\n  <text x="50" y="50" text-anchor="middle" dominant-baseline="central"></text>\n</svg>';let i=v(e.name);n.appendChild(i),t.appendChild(n);const o=n.querySelector("path");let a=o.getTotalLength()*((100-e.score)/100);o.getBoundingClientRect(),o.style.strokeDashoffset=Math.max(0,a),o.nextElementSibling.textContent=e.score/10},u=e=>{let n=document.createElement("div");n.className="skills__language-description",n.innerHTML=`<h4>${e.name}</h4>\n  <span style="width: ${e.score}%" class="progress" data-description="${e.description}"></span>`,i.appendChild(n)},f=e=>{let n=document.createElement("div");n.className="skills__studies-description",n.innerHTML=`\n      <h4>${e.name}</h4>\n      <p>${e.description}</p>\n      <span>${e.date}</span>\n    `,o.appendChild(n)},h=e=>{let n=document.createElement("div");n.className="job-card",n.innerHTML=`\n        <div class="front" data-period="${e.period}">\n            <img src="${e.front}" alt="${e.name}" />\n        </div>\n        <div class="back no-scroll">\n            <img src="${e.back}" alt="${e.name}" />\n            <div class="job-card__description">${e.description}</div>\n        </div>\n    `,a.appendChild(n)},v=e=>{let n=document.createElement("div");return n.className="skill__name",n.innerHTML=`<p>${e}</p>`,n};document.addEventListener("DOMContentLoaded",(()=>{const t=e(n).skills,i=e(n).languages,o=e(n).studies,a=e(n).experience;m(e(n).about),t.forEach((e=>{g(e)})),i.forEach((e=>{u(e)})),o.forEach((e=>{f(e)})),a.forEach((e=>{h(e)}));document.querySelectorAll(".no-scroll").forEach((e=>{e.addEventListener("mouseenter",(()=>document.body.style.overflow="hidden")),e.addEventListener("mouseleave",(()=>document.body.style.overflow="auto"))})),r.addEventListener("click",(e=>p(e,!1))),s.addEventListener("click",(e=>p(e,!0))),c.addEventListener("click",(()=>d()))}));
//# sourceMappingURL=index.b6860a25.js.map
