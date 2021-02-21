(this["webpackJsonpspacex-tdd-pwa-ts"]=this["webpackJsonpspacex-tdd-pwa-ts"]||[]).push([[0],{114:function(e,a,t){e.exports=t(134)},119:function(e,a,t){},120:function(e,a,t){},130:function(e,a,t){},134:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(19),c=t.n(r),o=(t(119),t(120),t(80)),i=t(34),s=t(165),u=t(178),m=t(167),d=t(169),h=t(73),E=t(170),b=t(105),g=t.n(b),v=t(177),p=t(33),f=[{title:"Home",url:"/"},{title:"Launches",url:"launches"}],_=t(106),k=t.n(_),N=t(76),y=t.n(N),w=t(77),x=t.n(w),L=Object(s.a)((function(e){var a;return Object(u.a)({root:{flexGrow:1},Navbar:{backgroundColor:"transparent"},ScrollNavbar:{backgroundColor:"#141414"},menuButton:Object(i.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),NavBar__button:(a={},Object(i.a)(a,e.breakpoints.down("sm"),{display:"none"}),Object(i.a)(a,"color","#fff"),Object(i.a)(a,"paddingBottom","0.4rem"),Object(i.a)(a,"padding"," 0 4rem"),Object(i.a)(a,"textTransform","capitalize"),Object(i.a)(a,"textAlign","center"),Object(i.a)(a,"fontFamily","montserrate"),Object(i.a)(a,"fontWeight","bolder"),Object(i.a)(a,"fontSize",22),Object(i.a)(a,"&:hover",{color:"lightgrey"}),a),drawer__list:{backgroundColor:"black",height:"100%",width:"100vw",display:"flex",flexDirection:"column"},dlinks:{width:"100%",height:"10vh",backgroundColor:"transparent",border:"none",color:"#fff",fontSize:"1.7rem","&:hover":{backgroundColor:"white",color:"black"}},drawer__header:{display:"flex",borderBottom:"1px solid white"},drawer__links:{display:"flex",flexDirection:"column",justifyContent:"space-around",flex:.5},activeLink:{borderBottom:"2px solid white"}})}));function j(){var e=L(),a=Object(n.useState)(!1),t=Object(o.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(!1),s=Object(o.a)(i,2),u=s[0],b=s[1];return window.addEventListener("scroll",(function(){window.scrollY>80?b(!0):b(!1)})),l.a.createElement("div",{className:e.root},l.a.createElement(m.a,{className:u?e.ScrollNavbar:e.Navbar,position:"fixed"},l.a.createElement(d.a,null,l.a.createElement(E.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return c(!r)}},l.a.createElement(g.a,null)),l.a.createElement(p.b,{to:"/"},l.a.createElement("img",{className:x.a.headlogo,src:y.a,alt:""})),f.map((function(a){return l.a.createElement(p.c,{to:a.url,style:{textDecoration:"none"},activeClassName:e.activeLink,end:"/"===a.url},l.a.createElement(h.a,{className:e.NavBar__button,color:"inherit"},a.title))})))),l.a.createElement(v.a,{anchor:"left",open:r,onClose:function(){return c(!1)}},l.a.createElement("div",{className:e.drawer__list},l.a.createElement("div",{className:e.drawer__header},l.a.createElement(E.a,{style:{color:"white"},onClick:function(){return c(!1)}},l.a.createElement(k.a,null)),l.a.createElement(p.b,{to:"/"},l.a.createElement("img",{className:x.a.headlogo,src:y.a,alt:"menulogo"}))),l.a.createElement("div",{className:e.drawer__links},f.map((function(a){return l.a.createElement(p.b,{to:a.url},l.a.createElement("button",{className:e.dlinks,onClick:function(){return c(!1)}},a.title))}))))))}var O,C,S,B,R=t(78),A=t(30);function D(){var e=Object(R.a)(["\n    query LaunchList {\n  launches {\n    flight_number\n    mission_name\n    launch_year\n    details\n    launch_success\n  }\n}\n    "]);return D=function(){return e},e}function F(){var e=Object(R.a)(["\n    query LaunchProfile($id: String!) {\n  launch(id: $id) {\n    flight_number\n    mission_name\n    launch_year\n    launch_success\n    details\n    launch_site {\n      site_name\n    }\n    rocket {\n      rocket_name\n      rocket_type\n    }\n    links {\n      flickr_images\n    }\n  }\n}\n    "]);return F=function(){return e},e}!function(e){e.Past="past",e.Upcoming="upcoming"}(O||(O={})),function(e){e.Latest="latest",e.Next="next",e.Past="past",e.Upcoming="upcoming"}(C||(C={})),function(e){e.Asc="asc",e.Desc="desc"}(S||(S={})),function(e){e.Public="PUBLIC",e.Private="PRIVATE"}(B||(B={}));var P=Object(A.gql)(F());var W=Object(A.gql)(D());var I=t(171),M=t(173),H=t(172),q=t(59),z=t.n(q),T=t(109),Q=t.n(T),U=Object(s.a)({root:{minWidth:275,backgroundColor:"#1F1F1F",border:"white",alignItems:"center",marginBottom:25,marginLeft:50,marginRight:50},pos:{marginBottom:12},text:{color:"white"},bord:{border:1,color:"white"}});function Y(e){var a=e.flight_number,t=e.mission_name,n=e.launch_year,r=e.launch_success,c=U();return l.a.createElement(I.a,{className:Q()(c.root,z.a.border),variant:"outlined"},l.a.createElement(H.a,null,l.a.createElement(h.a,{variant:"h4",gutterBottom:!0,className:c.text},a,". Mission: ",l.a.createElement("span",{style:{color:r?"green":"red"}},t)),l.a.createElement(h.a,{variant:"h6",className:c.text},"Flight Number : ",a),l.a.createElement(h.a,{variant:"h6",className:c.text},"Launch year : ",n),l.a.createElement(h.a,{variant:"h6",className:c.text},"Launch success :"," ",l.a.createElement("span",{style:{color:r?"green":"red"}},r?"Successful ":"Failed"))),l.a.createElement("div",{className:z.a.button},l.a.createElement(M.a,null,l.a.createElement(p.b,{to:"/".concat(a),style:{textDecoration:"none"}},l.a.createElement("button",{className:z.a.btn},"Launch Details")))))}var G=function(){var e,a,t=A.useQuery(W,a),n=t.data,r=t.error;return t.loading?l.a.createElement("div",null,"Loading..."):r||!n?l.a.createElement("div",null,"ERROR"):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"launchHeading",style:{fontFamily:"montserrate",color:"#fff",textAlign:"center",paddingTop:100,fontSize:50,fontWeight:"bolder"}},"Launches"),l.a.createElement("br",null),null===n||void 0===n||null===(e=n.launches)||void 0===e?void 0:e.map((function(e){var a=e.flight_number,t=e.mission_name,n=e.launch_year,r=e.details,c=e.launch_success;return l.a.createElement(Y,{flight_number:a,mission_name:t,launch_year:n,details:r,launch_success:c})})))},J=t(9),K=t(174),V=t(179),X=t(175),$=t(176),Z=Object(s.a)((function(e){return Object(u.a)({root:{width:"100%",backgroundColor:"#1F1F1F",color:"#fff"}})}));var ee=function(e){var a=e.missionName,t=e.launchYear,n=e.launchSite,r=e.launchSuccess,c=e.launchDetails,o=e.rocketName,i=e.rocketType,s=Z();return l.a.createElement("div",null,l.a.createElement(K.a,{component:"nav",className:s.root,"aria-label":"mailbox folders"},l.a.createElement(V.a,{button:!0},l.a.createElement(X.a,null,"Mission : ",a)),l.a.createElement($.a,null),l.a.createElement(V.a,{button:!0,divider:!0},l.a.createElement(X.a,null,"Launch year : ",t)),l.a.createElement(V.a,{button:!0},l.a.createElement(X.a,null,"Launch site : ",n.site_name)),l.a.createElement($.a,{light:!0}),l.a.createElement(V.a,{button:!0},l.a.createElement(X.a,null,"Launch Success :",l.a.createElement("span",{style:{color:r?"green":"red"}}," ",r?"Successful":"failed"))),l.a.createElement($.a,{light:!0}),l.a.createElement(V.a,{button:!0},l.a.createElement(X.a,null,"Rocket Name : ",o)),l.a.createElement($.a,{light:!0}),l.a.createElement(V.a,{button:!0},l.a.createElement(X.a,null," Rocket Type : ",i)),l.a.createElement($.a,{light:!0}),l.a.createElement(V.a,{button:!0},l.a.createElement(X.a,null,"Launch Details : ",c)),l.a.createElement($.a,{light:!0})))},ae=function(){var e,a,t,l,r,c=Object(J.h)().id,o=(r={variables:{id:c}},A.useQuery(P,r)),i=o.data,s=o.error;if(o.loading)return n.createElement("div",null,"Loading...");if(s)return n.createElement("div",null,"ERROR");var u=null===i||void 0===i?void 0:i.launch;return console.log(u),n.createElement(n.Fragment,null,n.createElement("h1",{style:{textAlign:"center"}},"Details"),n.createElement("div",{style:{padding:"1rem"}},n.createElement("br",null),n.createElement("h2",null,"Launch Details:"),n.createElement(ee,{missionName:null===u||void 0===u?void 0:u.mission_name,launchYear:null===u||void 0===u?void 0:u.launch_year,launchSite:null===u||void 0===u?void 0:u.launch_site,launchSuccess:null===u||void 0===u?void 0:u.launch_success,rocketName:null===u||void 0===u||null===(e=u.rocket)||void 0===e?void 0:e.rocket_name,rocketType:null===u||void 0===u||null===(a=u.rocket)||void 0===a?void 0:a.rocket_type,launchDetails:null===u||void 0===u?void 0:u.details}),n.createElement("br",null),null===u||void 0===u||null===(t=u.links)||void 0===t||null===(l=t.flickr_images)||void 0===l?void 0:l.map((function(e){return n.createElement("img",{style:{width:"100%",objectFit:"contain"},src:e,alt:"launchPic"})}))))};t(130);var te=function(){return l.a.createElement("div",{translate:"no"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"stars"}),l.a.createElement("div",{className:"stars2"}),l.a.createElement("div",{className:"stars3"}),l.a.createElement("div",{className:"heading"},l.a.createElement("span",null,"SPACEX"),l.a.createElement("br",null),l.a.createElement("span",null,"LAUNCHES"),l.a.createElement("br",null),l.a.createElement(p.b,{to:"/launches"},l.a.createElement("button",{className:"btn"},"Explore Now")))))},ne=t(79);ne.a.initializeApp({apiKey:"AIzaSyDLFHsnGAJkdDyCWCAQmgpQer3WbuREj-o",authDomain:"spacex-pwa-1398e.firebaseapp.com",projectId:"spacex-pwa-1398e",storageBucket:"spacex-pwa-1398e.appspot.com",messagingSenderId:"208399948410",appId:"1:208399948410:web:6a1e675ccdc01266d5f9c3",measurementId:"G-ZM5QG0B9H0"});var le=ne.a.messaging();var re=function(){return Notification.requestPermission().then((function(e){le.getToken().then((function(e){alert(e),prompt("token",e),console.log(e),e||console.log("No registration token available. Request permission to generate one.")})).catch((function(e){console.log("An error occurred while retrieving token. ",e)}))})),l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(J.c,null,l.a.createElement(J.a,{path:"/",element:l.a.createElement(te,null)}),l.a.createElement(J.a,{path:"/launches",element:l.a.createElement(G,null)}),l.a.createElement(J.a,{path:"/:id",element:l.a.createElement(ae,null)}))))};var ce=new A.ApolloClient({uri:"https://spacexdata.herokuapp.com/graphql",cache:new A.InMemoryCache});c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A.ApolloProvider,{client:ce},l.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)})):console.log("ServiceWorker not found")},59:function(e,a,t){e.exports={toppad:"Launches_toppad__2e3zb",border:"Launches_border__3UnvP",button:"Launches_button__xKpKO",btn:"Launches_btn__M024j",heading:"Launches_heading__3fw0W",launchHeading:"Launches_launchHeading__a5RbV",root:"Launches_root__1xLLR",headingContainer:"Launches_headingContainer__ujCYi",sfContainer:"Launches_sfContainer__lxO6x",sfMain:"Launches_sfMain__3_pse",succesBlock:"Launches_succesBlock__nRMrO",failBlock:"Launches_failBlock__2WYs3"}},76:function(e,a,t){e.exports=t.p+"static/media/logo.ab10d000.png"},77:function(e,a,t){e.exports={headlogo:"Navbar_headlogo__bHvtX"}}},[[114,1,2]]]);
//# sourceMappingURL=main.2316fa20.chunk.js.map