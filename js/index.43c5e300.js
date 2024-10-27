(function(){"use strict";var e={1239:function(e,t,n){var r=n(5130),a=n(6768);const o={id:"app"},s={class:"content-wrapper"};function i(e,t,n,r,i,l){const c=(0,a.g2)("NavbarComponent"),d=(0,a.g2)("router-view"),u=(0,a.g2)("FooterComponent");return(0,a.uX)(),(0,a.CE)("div",o,[(0,a.bF)(c),(0,a.Lk)("div",s,[(0,a.bF)(d)]),(0,a.bF)(u)])}var l=n(4232);const c={class:"container"},d={class:"brand-logo"};function u(e,t,n,r,o,s){const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("nav",{class:(0,l.C4)(["navbar",{"navbar-scrolled":o.isScrolled,"navbar-reduced":o.isScrolled}])},[(0,a.Lk)("div",c,[(0,a.Lk)("div",d,[(0,a.bF)(i,{to:"/welcome",class:"logo-link nav-item"},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.Lk)("i",{class:"fas fa-home"},null,-1),(0,a.eW)(" My E-Portfolio ")]))),_:1})]),(0,a.Lk)("button",{class:"menu-toggle",onClick:t[0]||(t[0]=(...e)=>s.toggleMenu&&s.toggleMenu(...e))},t[2]||(t[2]=[(0,a.Lk)("i",{class:"fas fa-bars"},null,-1)])),(0,a.Lk)("ul",{class:(0,l.C4)(["nav-links",{active:o.isMenuOpen}])},[(0,a.Lk)("li",null,[(0,a.bF)(i,{to:"/welcome",class:(0,l.C4)(["nav-item",{"active-link":"/welcome"===e.$route.path}])},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.Lk)("i",{class:"fas fa-home"},null,-1),(0,a.eW)(" Welcome ")]))),_:1},8,["class"])]),(0,a.Lk)("li",null,[(0,a.bF)(i,{to:"/engineering-course",class:(0,l.C4)(["nav-item",{"active-link":"/engineering-course"===e.$route.path}])},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.Lk)("i",{class:"fas fa-book"},null,-1),(0,a.eW)(" Engineering Course ")]))),_:1},8,["class"])]),(0,a.Lk)("li",null,[(0,a.bF)(i,{to:"/international-mobility",class:(0,l.C4)(["nav-item",{"active-link":"/international-mobility"===e.$route.path}])},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.Lk)("i",{class:"fas fa-globe"},null,-1),(0,a.eW)(" International Mobility ")]))),_:1},8,["class"])]),(0,a.Lk)("li",null,[(0,a.bF)(i,{to:"/sustainability",class:(0,l.C4)(["nav-item",{"active-link":"/sustainability"===e.$route.path}])},{default:(0,a.k6)((()=>t[6]||(t[6]=[(0,a.Lk)("i",{class:"fas fa-leaf"},null,-1),(0,a.eW)(" Sustainability & Civic Engagement ")]))),_:1},8,["class"])]),(0,a.Lk)("li",null,[(0,a.bF)(i,{to:"/sport-activities",class:(0,l.C4)(["nav-item",{"active-link":"/sport-activities"===e.$route.path}])},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.Lk)("i",{class:"fas fa-basketball-ball"},null,-1),(0,a.eW)(" Sport & Other Activities ")]))),_:1},8,["class"])]),(0,a.Lk)("li",null,[(0,a.bF)(i,{to:"/career-development",class:(0,l.C4)(["dropdown-toggle nav-item",{"active-link":e.$route.path.startsWith("/career-development")}])},{default:(0,a.k6)((()=>t[8]||(t[8]=[(0,a.Lk)("i",{class:"fas fa-briefcase"},null,-1),(0,a.eW)(" Career Development ")]))),_:1},8,["class"])])],2)])],2)}var f={name:"NavbarComponent",data(){return{isMenuOpen:!1,isScrolled:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},handleScroll(){this.isScrolled=window.scrollY>50}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}},p=n(1241);const m=(0,p.A)(f,[["render",u],["__scopeId","data-v-2ecff04c"]]);var g=m;const h={class:"footer"};function b(e,t,n,r,o,s){return(0,a.uX)(),(0,a.CE)("footer",h,t[0]||(t[0]=[(0,a.Lk)("div",{class:"footer-content max-w-7xl mx-auto text-center"},[(0,a.Lk)("p",null,"© 2024 Théo Armaghan. All Rights Reserved."),(0,a.Lk)("p",null,"Contact: theo12.armaghan@gmail.com")],-1)]))}var v={name:"FooterComponent"};const x=(0,p.A)(v,[["render",b],["__scopeId","data-v-48a12f38"]]);var k=x,C={name:"App",components:{NavbarComponent:g,FooterComponent:k}};const L=(0,p.A)(C,[["render",i]]);var y=L,w=n(1387);const A={class:"welcome-page bg-gradient-to-b from-secondary via-accent to-primary min-h-screen p-12 flex flex-col items-center"},O={class:"grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl mb-12"},I={class:"profile-image-container flex justify-center"},E=["src"],M={class:"text-center mt-10"},F={class:"text-5xl font-extrabold text-gray-100"},_={class:"mt-8 text-gray-200 leading-relaxed text-xl"},$={class:"flex flex-wrap justify-center gap-6"},P={class:"more-about-me bg-primary shadow-lg rounded-xl p-12 z-0"},W={class:"text-gray-200 leading-relaxed text-xl"};function S(e,t,n,r,o,s){return(0,a.uX)(),(0,a.CE)("div",A,[(0,a.Lk)("div",O,[(0,a.Lk)("div",{class:"profile-card bg-primary shadow-2xl rounded-xl p-12 col-span-1 md:col-span-2 z-10 transition-all duration-500 transform",onMouseover:t[0]||(t[0]=e=>s.focusCard("profile")),onMouseleave:t[1]||(t[1]=e=>s.unfocusCard("profile")),ref:"profileCard"},[(0,a.Lk)("div",I,[(0,a.Lk)("img",{src:o.profileImage,alt:"Profile Picture",class:"profile-image w-48 h-48 rounded-md object-cover border-4 border-gray-400"},null,8,E)]),(0,a.Lk)("div",M,[(0,a.Lk)("h1",F,(0,l.v_)(o.introTitle),1),(0,a.Lk)("p",_,(0,l.v_)(o.introText),1)])],544),(0,a.Lk)("div",{class:"hobbies bg-primary shadow-lg rounded-xl p-12 z-0 transition-all duration-500 transform",onMouseover:t[2]||(t[2]=e=>s.focusCard("hobbies")),onMouseleave:t[3]||(t[3]=e=>s.unfocusCard("hobbies")),ref:"hobbiesCard"},[t[4]||(t[4]=(0,a.Lk)("h2",{class:"text-4xl font-semibold text-gray-100 text-center mb-8"},"My Interests & Hobbies",-1)),(0,a.Lk)("ul",$,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.hobbies,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e,class:"bg-accent text-white px-8 py-4 rounded-full shadow-md"},(0,l.v_)(e),1)))),128))])],544)]),(0,a.Lk)("div",P,[t[5]||(t[5]=(0,a.Lk)("h2",{class:"text-4xl font-semibold text-gray-100 text-center mb-8"},"More About Me",-1)),(0,a.Lk)("p",W,(0,l.v_)(o.aboutMeText),1)])])}var j=n(4187),T={name:"WelcomePage",data(){return{profileImage:"Theo.png",introTitle:"Welcome to My E-Portfolio!",introText:"Hello! I'm Théo Armaghan, an engineering student passionate about technology, sustainability, and innovation.",linkedInUrl:"https://www.linkedin.com/in/theo-armaghan",cvUrl:"/CV.pdf",hobbies:["Traveling","Gaming","Coding","Sports","Chess"],videoUrl:"https://youtube.com/",aboutMeText:"I am currently a first year engineering student at ENSEEIHT. My interests lie in IA, software development, and sustainable technologies. I enjoy collaborating on innovative and opensource projects and am always eager to learn new skills. Feel free to contact me on LinkedIn or via email if you would like to connect or collaborate!"}},methods:{focusCard(e){this.isCardFocused&&this.focusedCard===e||(this.isCardFocused=!0,this.focusedCard=e,(0,j.A)({targets:this.$refs[`${e}Card`],scale:1.15,zIndex:20,boxShadow:"0 30px 40px rgba(0, 0, 0, 0.3)",duration:500,easing:"easeOutQuad"}),this.blurOtherCards(e))},unfocusCard(e){this.focusedCard===e&&(this.isCardFocused=!1,(0,j.A)({targets:this.$refs[`${e}Card`],scale:1,zIndex:10,boxShadow:"0 10px 15px rgba(0, 0, 0, 0.1)",duration:500,easing:"easeOutQuad"}),this.unblurOtherCards())},blurOtherCards(e){Object.keys(this.$refs).forEach((t=>{t!==`${e}Card`&&(0,j.A)({targets:this.$refs[t],filter:"blur(5px)",duration:500,easing:"easeOutQuad"})}))},unblurOtherCards(){Object.keys(this.$refs).forEach((e=>{(0,j.A)({targets:this.$refs[e],filter:"blur(0px)",duration:500,easing:"easeOutQuad"})}))}}};const X=(0,p.A)(T,[["render",S],["__scopeId","data-v-5c8093c0"]]);var z=X;const R={class:"engineering-course"};function Q(e,t,n,r,o,s){const i=(0,a.g2)("WorkInProgressComponent");return(0,a.uX)(),(0,a.CE)("div",R,[(0,a.bF)(i)])}const H={class:"work-in-progress flex items-center justify-center min-h-screen"};function V(e,t,n,r,o,s){return(0,a.uX)(),(0,a.CE)("div",H,t[0]||(t[0]=[(0,a.Lk)("div",{class:"message-container text-center flex flex-col items-center justify-center"},[(0,a.Lk)("p",{class:"text-5xl font-bold text-primary mb-6"},"Work in Progress"),(0,a.Lk)("p",{class:"text-lg text-gray-500 mb-6"},"This section is under development. Please check back later!"),(0,a.Lk)("div",{class:"loader mt-6"})],-1)]))}var J={name:"WorkInProgressComponent"};const N=(0,p.A)(J,[["render",V],["__scopeId","data-v-d72f82a6"]]);var U=N,D={name:"EngineeringCourse",components:{WorkInProgressComponent:U}};const K=(0,p.A)(D,[["render",Q]]);var G=K;function Y(e,t,n,r,o,s){const i=(0,a.g2)("WorkInProgressComponent");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(i)])}var q={name:"InternationalMobility",components:{WorkInProgressComponent:U}};const B=(0,p.A)(q,[["render",Y]]);var Z=B;const ee={class:"sustainability"};function te(e,t,n,r,o,s){const i=(0,a.g2)("WorkInProgressComponent");return(0,a.uX)(),(0,a.CE)("div",ee,[(0,a.bF)(i)])}var ne={name:"SustainabilityCivicEngagement",components:{WorkInProgressComponent:U}};const re=(0,p.A)(ne,[["render",te]]);var ae=re;function oe(e,t,n,r,o,s){const i=(0,a.g2)("WorkInProgressComponent");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(i)])}var se={name:"SportActivities",components:{WorkInProgressComponent:U}};const ie=(0,p.A)(se,[["render",oe]]);var le=ie;const ce={class:"career-page bg-gradient-to-b from-secondary via-accent to-primary min-h-screen p-12 flex flex-col items-center"},de={class:"grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12 w-full max-w-7xl mb-12"},ue={class:"internship-details mb-12"},fe=["href"],pe={class:"icons flex gap-8 justify-center"},me=["href"],ge=["href"],he={class:"video-section bg-secondary shadow-lg rounded-xl p-12 w-full max-w-7xl mt-12 flex flex-col items-center"},be={class:"video-container w-full max-w-3xl"},ve=["src"];function xe(e,t,n,r,o,s){return(0,a.uX)(),(0,a.CE)("div",ce,[(0,a.Lk)("div",de,[(0,a.Lk)("section",{class:"career-card bg-primary shadow-2xl rounded-xl p-12 col-span-1 md:col-span-2 z-10 transition-all duration-500 transform",onMouseover:t[0]||(t[0]=e=>s.focusCard("internships")),onMouseleave:t[1]||(t[1]=e=>s.unfocusCard("internships")),ref:"internshipsCard"},[t[7]||(t[7]=(0,a.Lk)("h2",{class:"text-5xl font-semibold text-gray-100 mb-8"},"Internships",-1)),(0,a.Lk)("div",ue,[t[4]||(t[4]=(0,a.Lk)("h3",{class:"text-4xl font-bold text-accent mb-6"},"Airbus Helicopters (June 2023)",-1)),t[5]||(t[5]=(0,a.Lk)("p",{class:"text-lg text-gray-200 leading-relaxed mb-6"}," Role: Assistant Product Owner at Airbus Helicopters, Digital Transformation Service. ",-1)),t[6]||(t[6]=(0,a.Lk)("p",{class:"text-base text-gray-200 leading-relaxed mb-8"}," Responsibilities: Assisted in the development of a web application using Agile methodology and the SAFE framework. Participated in non-regression tests, set up internal procedures, created JIRA dashboards, and reviewed the user manual. ",-1)),(0,a.Lk)("a",{href:o.internshipReportLink,target:"_blank",class:"btn-link bg-accent text-white px-8 py-3 rounded-lg shadow-lg hover:bg-secondary transition-transform transform hover:scale-105 mb-12"}," View Internship Report ",8,fe)]),t[8]||(t[8]=(0,a.Lk)("div",{class:"internship-details mb-12"},[(0,a.Lk)("h3",{class:"text-3xl font-bold text-accent mb-6"},"LIA (Laboratory of Computer Science of Avignon) (June 2024)"),(0,a.Lk)("p",{class:"text-base text-gray-200 leading-relaxed mb-6"}," Project: Exploration of LLM language models for low-resource languages. "),(0,a.Lk)("p",{class:"text-base text-gray-200 leading-relaxed mb-8"}," Objectives: Conduct a state-of-the-art review and pilot experiments on underrepresented languages, such as Amerindian languages. Work supervised by Juan-Manuel Torres. ")],-1))],544),(0,a.Lk)("div",{class:"links bg-primary shadow-lg rounded-xl p-6 flex flex-col items-center z-0 transition-all duration-500 transform h-auto text-center",onMouseover:t[2]||(t[2]=e=>s.focusCard("links")),onMouseleave:t[3]||(t[3]=e=>s.unfocusCard("links")),ref:"linksCard"},[t[11]||(t[11]=(0,a.Lk)("h3",{class:"text-3xl font-bold text-gray-100 mb-6"},"Connect with Me",-1)),(0,a.Lk)("div",pe,[(0,a.Lk)("a",{href:o.cvLink,target:"_blank",class:"flex flex-col items-center text-gray-200 hover:text-accent transition-transform transform hover:scale-110"},t[9]||(t[9]=[(0,a.Lk)("i",{class:"fas fa-file-alt text-6xl mb-2"},null,-1),(0,a.Lk)("span",{class:"text-lg"},"CV",-1)]),8,me),(0,a.Lk)("a",{href:o.linkedinLink,target:"_blank",class:"flex flex-col items-center text-gray-200 hover:text-accent transition-transform transform hover:scale-110"},t[10]||(t[10]=[(0,a.Lk)("i",{class:"fab fa-linkedin text-6xl mb-2"},null,-1),(0,a.Lk)("span",{class:"text-lg"},"LinkedIn",-1)]),8,ge)])],544)]),(0,a.Lk)("div",he,[t[12]||(t[12]=(0,a.Lk)("h2",{class:"text-4xl font-semibold text-gray-100 text-center mb-12"},"Elevator Pitch Video",-1)),(0,a.Lk)("div",be,[(0,a.Lk)("iframe",{src:o.videoLink,class:"w-full h-64 md:h-96 rounded-lg shadow-lg",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,ve)])])])}var ke={name:"CareerDevelopment",data(){return{cvLink:"CV.pdf",linkedinLink:"https://www.linkedin.com/in/th%C3%A9o-armaghan-3540412b7/",videoLink:"https://www.youtube.com/embed/K8Ak1z18tC0",internshipReportLink:"RapportStageL2_ArmaghanThéo.pdf",llmReportLink:"/LLM_pi.pdf",isCardFocused:!1,focusedCard:null}},methods:{focusCard(e){this.isCardFocused&&this.focusedCard===e||(this.isCardFocused=!0,this.focusedCard=e,(0,j.A)({targets:this.$refs[`${e}Card`],scale:1.15,zIndex:20,boxShadow:"0 30px 40px rgba(0, 0, 0, 0.3)",duration:500,easing:"easeOutQuad"}),this.blurOtherCards(e))},unfocusCard(e){this.focusedCard===e&&(this.isCardFocused=!1,(0,j.A)({targets:this.$refs[`${e}Card`],scale:1,zIndex:10,boxShadow:"0 10px 15px rgba(0, 0, 0, 0.1)",duration:500,easing:"easeOutQuad"}),this.unblurOtherCards())},blurOtherCards(e){Object.keys(this.$refs).forEach((t=>{t!==`${e}Card`&&(0,j.A)({targets:this.$refs[t],filter:"blur(5px)",duration:500,easing:"easeOutQuad"})}))},unblurOtherCards(){Object.keys(this.$refs).forEach((e=>{(0,j.A)({targets:this.$refs[e],filter:"blur(0px)",duration:500,easing:"easeOutQuad"})}))}}};const Ce=(0,p.A)(ke,[["render",xe],["__scopeId","data-v-560a95e5"]]);var Le=Ce;const ye=[{path:"/welcome",component:z},{path:"/engineering-course",component:G},{path:"/international-mobility",component:Z},{path:"/sustainability",component:ae},{path:"/sport-activities",component:le},{path:"/career-development",component:Le},{path:"/",redirect:"/welcome"}],we=(0,w.aE)({history:(0,w.LA)("/My-Eportfolio/"),routes:ye});var Ae=we;(0,r.Ef)(y).use(Ae).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],a=e[d][1],o=e[d][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={57:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,s=r[0],i=r[1],l=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(l)var d=l(n)}for(t&&t(r);c<s.length;c++)o=s[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1239)}));r=n.O(r)})();
//# sourceMappingURL=index.43c5e300.js.map