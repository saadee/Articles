(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/logo.fb7de414.svg"},178:function(e,t,a){},198:function(e,t,a){e.exports=a(411)},203:function(e,t,a){},204:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},227:function(e,t,a){},229:function(e,t,a){e.exports=a.p+"static/media/i.34dfeed2.jpg"},401:function(e,t,a){},411:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),c=(a(203),a(204),a(19)),i=a(51),s=a(23),m=a(3),d=Object(s.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.auth,a=t.isAuthenticated,n=t.loading,l=e.component,o=Object(m.a)(e,["auth","component"]);return r.a.createElement(i.b,Object.assign({},o,{render:function(e){return a||n?r.a.createElement(l,e):r.a.createElement(i.a,{to:"/"})}}))})),u=a(46),p=a(181),g=a(182),h=a(11),E={user:{},token:localStorage.getItem("token"),isAuthenticated:null,loading:!0},f=a(38),b={posts:[],post:{},Tide:{},loading:!0,error:{}},v={userDrawer:!1};var y={profile:{},loading:!0,error:{}},x=Object(u.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"USER_LOADED":return Object(h.a)({},e,{isAuthenticated:!0,loading:!1,user:n});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",n.token),Object(h.a)({},e,{},n,{isAuthenticated:!0,loading:!1});case"REGISTER_FAIL":case"LOG_OUT":case"LOGIN_FAIL":return localStorage.removeItem("token"),Object(h.a)({},e,{user:{},token:null,isAuthenticated:!1,loading:!0});default:return e}},drawerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"PROFILE_CLICKED":case"PROFILE_CLOSED":return Object(h.a)({},e,{userDrawer:n});default:return e}},ProfileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_PROFILE":return Object(h.a)({},e,{profile:n,loading:!1});case"PROFILE_ERROR":return Object(h.a)({},e,{error:n,loading:!1});case"CLEAR_PROFILE":return Object(h.a)({},e,{profile:{},repos:[],loading:!1});case"PROFILE_CREATED":return Object(h.a)({},e,{profile:n});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_POSTS":return Object(h.a)({},e,{posts:n,loading:!1});case"GET_POST":case"UPDATE_POST":return Object(h.a)({},e,{post:n,loading:!1});case"UPDATE_DATE":case"UPDATE_SHOW":return Object(h.a)({},e,{post:n.post,posts:n.posts,loading:!1});case"DELETE_POST":return Object(h.a)({},e,{posts:n.posts,loading:!1});case"ADD_POSTS":return Object(h.a)({},e,{posts:[].concat(Object(f.a)(e.posts),[n]),loading:!1});case"POSTS_ERR":return Object(h.a)({},e,{error:n,loading:!1});case"ADD_ARTICLE":return console.log(n),Object(h.a)({},e,{posts:n,loading:!1});default:return e}}}),A=[g.a],O=Object(u.createStore)(x,{},Object(p.composeWithDevTools)(u.applyMiddleware.apply(void 0,A))),w=a(21),S=a.n(w),N=function(e){e?S.a.defaults.headers.common["x-auth-token"]=e:delete S.a.defaults.headers.common["x-auth-token"]},T=a(10),j=a.n(T),C=a(22),_=function(){return function(){var e=Object(C.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S()("/api/profile/me");case 3:a=e.sent,t({type:"GET_PROFILE",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"PROFILE_ERROR",payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=Object(C.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&N(localStorage.token),e.prev=1,e.next=4,S.a.get("/api/auth");case 4:a=e.sent,t({type:"USER_LOADED",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0&&t({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},R=a(9),P=a(37),I=a(463),L=a(78),U=a(462),H=(a(227),a(457));function D(){return r.a.createElement(H.a,{style:{position:"fixed",marginLeft:"-5%",width:"50px",marginTop:"20%",marginBottom:"20%"},disableShrink:!0})}var W=a(461),F=a(122),G=a.n(F),M=a(186),z=function(){return function(){var e=Object(C.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("api/posts");case 3:a=e.sent,t({type:"GET_POSTS",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"POSTS_ERR",payload:{msg:e.t0.message}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},V=function(e){return function(){var t=Object(C.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get("/api/posts/".concat(e));case 3:n=t.sent,a({type:"GET_POST",payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"POSTS_ERR",payload:{msg:t.t0.message}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},X=a(465),B=a(469),q=a(468),J=a(464),Y=a(466),Z=a(467),K=a(183),Q=a.n(K),$=a(31),ee=(a(109),a(470)),te=a(486),ae=Object(W.a)((function(e){return{root:{width:"100%",textAlign:"center",border:"2px solid red"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},table:{minWidth:550},tableh:{fontWeight:"bold"},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},cardroot:{flexGrow:1}}})),ne=Object(s.b)((function(e){return{auth:e.auth,post:e.post}}),{getPosts:z,deletePost:function(e){return function(){var t=Object(C.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.delete("/api/posts/".concat(e));case 3:n=t.sent,r=n.data,a({type:"DELETE_POST",payload:{id:e,posts:r}}),console.log(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"POSTS_ERR",payload:{msg:t.t0.message}});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},updateDate:function(e,t){return function(){var a=Object(C.a)(j.a.mark((function a(n){var r,l,o;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r={headers:{"Content-Type":"application/json"}},l=JSON.stringify({date:t}),a.next=5,S.a.put("/api/posts/date/".concat(e),l,r);case 5:o=a.sent,n({type:"UPDATE_DATE",payload:o.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:"POSTS_ERR",payload:{msg:a.t0.message}});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},showPost:function(e,t){return function(){var a=Object(C.a)(j.a.mark((function a(n){var r,l,o;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r={headers:{"Content-Type":"application/json"}},l=JSON.stringify({show:t}),a.next=5,S.a.put("/api/posts/show/".concat(e),l,r);case 5:o=a.sent,n({type:"UPDATE_SHOW",payload:o.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:"POSTS_ERR",payload:{msg:a.t0.message}});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){e.auth.user;var t=e.getPosts,a=e.deletePost,l=e.updateDate,o=e.showPost,i=e.post,s=i.posts,m=i.loading;i._id,i.Tide;Object(n.useEffect)((function(){t()}),[t]);var d=Object(n.useState)({checked:null,date:new Date}),u=Object(P.a)(d,2),p=u[0],g=u[1],E=ae();return m&&null===s?r.a.createElement(D,null):r.a.createElement(n.Fragment,null,r.a.createElement(U.a,{maxWidth:"lg",style:{marginTop:"5%"}},r.a.createElement(L.a,{variant:"h4",style:{margin:"auto"}}),r.a.createElement("br",null),r.a.createElement(c.b,{to:"/write",style:{textDecoration:"none"}},r.a.createElement(I.a,{variant:"outlined",color:"primary",style:{margin:"auto"}},r.a.createElement(L.a,{variant:"object"},"Write an Article"),r.a.createElement(G.a,null)))," ",r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(c.b,{to:"/articles",style:{textDecoration:"none"}},r.a.createElement(I.a,{variant:"outlined",color:"secondary",style:{margin:"auto"}},r.a.createElement(L.a,{variant:"object"},"View All Article")))," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(J.a,{component:M.a,style:{width:"fit-content",margin:"auto"}},r.a.createElement(X.a,{className:E.table,"aria-label":"simple table"},r.a.createElement(Y.a,null,r.a.createElement(Z.a,null,r.a.createElement(q.a,{className:E.tableh},"Image"),r.a.createElement(q.a,{align:"center",className:E.tableh},"Author"),r.a.createElement(q.a,{align:"center",className:E.tableh},"Title"),r.a.createElement(q.a,{align:"center",className:E.tableh},"Edit")," ",r.a.createElement(q.a,{align:"center",className:E.tableh},"Change Date")," ",r.a.createElement(q.a,{align:"center",className:E.tableh},"Delete"),r.a.createElement(q.a,{align:"center",className:E.tableh},"Hide"))),r.a.createElement(B.a,null,s.map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(q.a,{component:"th",scope:"post"},r.a.createElement("img",{src:(e.length,e.image),alt:"",style:{width:"50px"}})),r.a.createElement(q.a,{align:"center"},e.name,r.a.createElement("span",null,e.Tide)),r.a.createElement(q.a,{align:"center"},e.title),r.a.createElement(q.a,{align:"center"},r.a.createElement(c.b,{to:"/article/edit/".concat((e.length,e._id))},r.a.createElement(G.a,null)))," ",r.a.createElement(q.a,{align:"center"},r.a.createElement("span",{style:{fontWeight:"bold"}},new Date(e.date).toDateString())," ",r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("input",{type:"date",id:e._id,name:"Date",onChange:function(t){l(e._id,t.target.value),$.b.success("Date Has Been Upated")}})),r.a.createElement(q.a,{align:"center"},r.a.createElement(Q.a,{onClick:function(t){a(e._id),$.b.warn("Post been Deleted"),console.log("Tidde",e.Tide?e.Tide:"")}}),r.a.createElement($.a,{autoClose:2e3})),r.a.createElement(q.a,{align:"center"},"true"==e.show?r.a.createElement(L.a,{component:"span"},"Show"):r.a.createElement(L.a,{component:"span"},"Hide"),r.a.createElement(ee.a,{control:r.a.createElement(te.a,{onChange:function(t){!function(e){g(Object(h.a)({},p,Object(R.a)({},e.target.name,e.target.checked))),1==e.target.checked?$.b.error("Post has been Hide",{position:$.b.POSITION.TOP_CENTER}):$.b.error("Post has been visible"),console.log("Elefante",e.target.checked)}(t),o(e._id,t.target.checked)},name:"checked",color:"primary"})})))})))))))})),re=a(474),le=a(472),oe=a(473),ce=Object(W.a)((function(e){return{root:{flexGrow:1,width:"99vw"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontSize:"35px",fontWeight:"bold",letterSpacing:"10px",color:"black",fontFamily:"Lobster Two",marginTop:"-15px"}}}));function ie(){var e=ce();return r.a.createElement("div",{className:e.root},r.a.createElement(le.a,{className:"animated bounceInDown",position:"static",style:{height:"50px",background:"radial-gradient(circle, rgba(241,239,240,0.4822303921568627) 0%, rgba(15,15,15,0.6166841736694677) 100%)"}},r.a.createElement(oe.a,null,r.a.createElement(L.a,{variant:"h3",style:{},className:e.title},"Articles"))))}var se=a(475),me=a(477),de=a(76),ue=a.n(de),pe=a(478),ge=a(123),he=a(476),Ee=a(479),fe=a(471),be=a(69),ve=a.n(be),ye=(a(229),a(230),a(43)),xe=a.n(ye),Ae=Object(W.a)((function(e){var t;return{root:{flexGrow:1,margin:"auto"},root1:{maxWidth:470},paper:(t={padding:e.spacing(2),margin:"auto"},Object(R.a)(t,"margin","0.5rem"),Object(R.a)(t,"maxWidth",500),t),image:{width:130,height:130},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},img1:{display:"inline",width:"fit-content",maxWidth:"100%",maxHeight:"100%"},paper1:{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"center",margin:"0.5rem"},gridParent:{margin:"auto"},gridFlex:{display:"flex",marginLeft:"50px"},gridFlexs:{margin:"auto",display:"flex"},ReadingB:{textAlign:"left"},card:{display:"flex",maxWidth:750,maxHeight:300,margin:"auto"},title:{fontWeight:"bold",fontSize:"25px"},description:{textAlign:"justfy",margin:"1rem",padding:"1rem"},Generalimg:{},author:{margin:"10px",textAlign:"left"},mediaDiv:{margin:"10px"},link:{textDecoration:"none"},media:{height:"90px",width:"150px",paddingTop:"30.25%",border:"1px solid red"}}})),Oe=Object(s.b)((function(e){return{post:e.post,user:e.auth.user,isAuthenticated:e.auth.isAuthenticated}}),{getPosts:z,getCurrentProfile:_})((function(e){var t=e.getPosts,a=e.post,l=a.posts,o=(a.loading,a._id,e.user,e.getCurrentProfile);e.isAuthenticated;Object(n.useEffect)((function(){o(),t()}),[t]);var i=Ae();console.log("hey",l[0]);var s=[],m=[],d=[],u=[],p=[];l.forEach((function(e){switch(e.category){case"General":d.push(e);break;case"Medical":s.push(e);break;case"Social":m.push(e);break;case"Crisis":u.push(e);break;case"Humor":p.push(e)}})),console.log("Medical",s);var g=d[0]?d[0].titleImg:"",h=s[0]?s[0].titleImg:"",E=m[0]?m[0].titleImg:"",f=(p[0]&&p[0].titleImg,u[0]?u[0].titleImg:";");return r.a.createElement("div",{className:i.root},r.a.createElement(ie,null),r.a.createElement(re.a,{container:!0,spacing:3,className:i.gridParent},r.a.createElement(re.a,{item:!0,xs:12}),r.a.createElement(re.a,{item:!0,xs:6,style:{marginLeft:"0.5rem"}},r.a.createElement(se.a,{className:"animated zoomIn",style:{maxWidth:"650px"}},r.a.createElement(he.a,null,r.a.createElement(me.a,{component:"img",height:"250",className:i.Generalimg,image:d.length?g:""}),r.a.createElement(pe.a,null,r.a.createElement(L.a,{variant:"body2",component:"p",style:{maxHeight:"130px",overflow:"hidden",fontWeight:"bold",fontSize:"1.5rem"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.length?d[0].title:""}})))),r.a.createElement(Ee.a,{style:{height:"20px"}},r.a.createElement(c.b,{to:"/article/".concat(d.length?d[0]._id:d._id),className:i.link},r.a.createElement(fe.a,null," ",r.a.createElement("span",{style:{fontSize:"15px"}},"See More"),r.a.createElement(ve.a,{style:{float:"right"}})))))),r.a.createElement(re.a,{item:!0,xs:5,style:{height:"400px",width:"200px",marginLeft:"0rem",overflow:"scroll",boxShadow:" 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.19)",overflowX:"hidden"}},d.slice(1).map((function(e){return r.a.createElement("div",Object(R.a)({className:i.root},"className","animated fadeIn delay-1s"),r.a.createElement(M.a,{className:i.paper,style:{marginLeft:"0.5rem"}},r.a.createElement(re.a,{container:!0,spacing:2},r.a.createElement(re.a,{item:!0},r.a.createElement(ge.a,{className:i.image},r.a.createElement("img",{className:i.img,alt:"complex",src:(e.titleImg,e.titleImg)}))),r.a.createElement(re.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(re.a,{item:!0,container:!0,direction:"column",spacing:2},r.a.createElement(re.a,{item:!0,xs:!0},r.a.createElement(L.a,{variant:"h5",gutterBottom:!0,style:{maxHeight:"200px",maxWidth:"340px",overflow:"hidden"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.title}}))," ",r.a.createElement(L.a,{variant:"p",color:"secondary"}," ",r.a.createElement("span",{style:{color:"black"}},"Author:")," ",e.name)),r.a.createElement(re.a,{item:!0},r.a.createElement(c.b,{to:"/article/".concat(e._id),className:i.link},r.a.createElement(fe.a,null," ",r.a.createElement("span",{style:{fontSize:"15px"}},"See More"),r.a.createElement(ve.a,{style:{float:"right"}})))))),r.a.createElement(re.a,{item:!0,style:{marginTop:"0px"}}))))}))),r.a.createElement(re.a,{item:!0,xs:4,className:"animated bounceIn delay-1s"},r.a.createElement(re.a,{item:!0},r.a.createElement(se.a,{className:i.root1},r.a.createElement(he.a,null,r.a.createElement(me.a,{component:"img",alt:"Contemplative Reptile",height:"150",width:"120",image:s.length?h:ue.a,title:"Contemplative Reptile"}),r.a.createElement(pe.a,null,r.a.createElement(L.a,{variant:"body2",color:"textSecondary",component:"p",style:{maxWidth:"400px",maxHeight:"130px",overflow:"hidden",fontWeight:"bold",fontSize:"1.2rem"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.length?s[0].title:""}})))),r.a.createElement(Ee.a,null,r.a.createElement(c.b,{to:"/article/".concat(s.length?s[0]._id:s._id),className:i.link},r.a.createElement(fe.a,null," ",r.a.createElement("span",{style:{fontSize:"15px"}},"See More"),r.a.createElement(ve.a,{style:{float:"right"}}))))))),r.a.createElement(re.a,{item:!0,xs:4,className:"animated bounceIn delay-2s"},r.a.createElement(re.a,{item:!0},r.a.createElement(se.a,{className:i.root1},r.a.createElement(he.a,null,r.a.createElement(me.a,{component:"img",alt:"Contemplative Reptile",height:"150",width:"100",image:m.length?E:ue.a,title:"Contemplative Reptile"}),r.a.createElement(pe.a,null,r.a.createElement(L.a,{variant:"body2",color:"textSecondary",component:"p",style:{maxWidth:"400px",fontWeight:"bold",fontSize:"1.2rem",maxHeight:"130px",overflow:"hidden"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m.length?m[0].title:""}})))),r.a.createElement(Ee.a,null,r.a.createElement(c.b,{to:"/article/".concat(m.length?m[0]._id:m._id),className:i.link},r.a.createElement(fe.a,null," ",r.a.createElement("span",{style:{fontSize:"15px"}},"See More"),r.a.createElement(ve.a,{style:{float:"right"}}))))))),r.a.createElement(re.a,{item:!0,xs:4,className:"animated bounceIn delay-3s"},r.a.createElement(re.a,{item:!0},r.a.createElement(se.a,{className:i.root1},r.a.createElement(he.a,null,r.a.createElement(me.a,{component:"img",alt:"Contemplative Reptile",height:"150",width:"100",image:u.length?f:ue.a,title:"Contemplative Reptile"}),r.a.createElement(pe.a,null,r.a.createElement(L.a,{variant:"body2",color:"textSecondary",component:"p",style:{maxWidth:"400px",fontWeight:"bold",fontSize:"1.2rem",maxHeight:"130px",overflow:"hidden"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.length?u[0].title:""}})))),r.a.createElement(Ee.a,null,r.a.createElement(c.b,{to:"/article/".concat(u.length?u[0]._id:u._id),className:i.link},r.a.createElement(fe.a,null," ",r.a.createElement("span",{style:{fontSize:"15px"}},"See More"),r.a.createElement(ve.a,{style:{float:"right"}})))))))))})),we=a(64),Se=a(39),Ne=a(97),Te=a(98),je=a(104),Ce=a(29),_e=a(103),ke=a(99),Re=a(100),Pe=a.n(Re),Ie=(a(177),a(487)),Le=a(480),Ue=a(485),He=a(488);function De(e,t){var a=new XMLHttpRequest;a.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(a.response)},a.open("GET",e),a.responseType="blob",a.send()}var We=["General","Social","Medical","Crisis"],Fe=function(e){function t(){var e,a;Object(we.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(Ne.a)(this,(e=Object(Te.a)(t)).call.apply(e,[this].concat(r)))).state={editorState:Ce.EditorState.createEmpty(),image:"",category:""},a.changeFileHandle=function(e){e.target.files[0].size>52e3&&alert("File size is too big!"),De(URL.createObjectURL(e.target.files[0]),(function(e){console.log("RESULT:",e),a.setState({image:e})}))},a.onCategory=function(e){a.setState(Object(h.a)({},a.state,Object(R.a)({},e.target.name,e.target.value)))},a.onChange=function(e){a.setState({editorState:e,editorContentHtml:Object(_e.a)(e.getCurrentContent())})},a.onPublish=function(){var e=a.state.image,t=(a.state.editorContentHtml,a.props.loggedInUserId),n=a.state.category;console.log("checking"),console.log(xe()(a.state.editorContentHtml).find("h1").prevObject),console.log("Image",xe()(a.state.editorContentHtml).find("img").prevObject);var r={title:xe()(a.state.editorContentHtml).find("h1").prevObject[0].innerText||"Untitled Article",content:Pe()(Object(Ce.convertToRaw)(a.state.editorState.getCurrentContent())),image:e,ctg:n,id:t};r.ArtImg=xe()(a.state.editorContentHtml).find("img").prevObject[0].src,a.props.addArticle(r),$.b.success("Article has been Publshed")},a}return Object(je.a)(t,e),Object(Se.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"textEditorDiv"},r.a.createElement("div",{style:{width:"1000px",height:"600px",overflow:"scroll",backgroundColor:"#C0C0C0",margin:"auto"}},r.a.createElement(ke.Editor,{style:{overflow:"scroll",border:"12px solid green"},id:"textEditorID",editorState:this.state.editorState,wrapperClassName:"demo-wrapper",editorClassName:"editer-content",onEditorStateChange:this.onChange,value:"Begin Typing here",toolbar:{image:{uploadEnabled:!0,previewImage:!0,urlEnabled:!0,uploadCallback:function(e){return new Promise((function(t,a){De(URL.createObjectURL(e),(function(e){t({data:{link:e}})}))}))}}}})),r.a.createElement("div",null,r.a.createElement(Le.a,{variant:"filled",style:{width:"200px"}},r.a.createElement(He.a,{id:"demo-simple-select-filled-label"},"Select Category"),r.a.createElement(Ue.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",name:"category",value:this.state.category,onChange:function(t){return e.onCategory(t)}},We.map((function(e){return r.a.createElement(Ie.a,{value:e},e)}))))),r.a.createElement("div",{id:"editorPublishButton",style:{width:"fit-content",margin:"auto",marginTop:"1rem"}},r.a.createElement(I.a,{onClick:this.onPublish,variant:"contained",color:"secondary"},"PUBLISH"),r.a.createElement($.a,null)))}}]),t}(n.Component),Ge=Object(s.b)((function(e){return{loggedInUserId:e.auth.user._id}}),{addArticle:function(e){return function(){var t=Object(C.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.post("/api/posts",e);case 3:n=t.sent,a({type:"ADD_ARTICLE",payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(Fe),Me=(a(401),a(4),a(483)),ze=a(105),Ve=a(184),Xe=a.n(Ve),Be=Object(W.a)((function(e){return{root:{maxWidth:900,margin:"auto",marginTop:"3%"},media:{height:0,paddingTop:"40%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:ze.a[500]},mainCardContainer:{margin:"auto",width:"80%",marginTop:"3%"},heading:{fontFamily:" ",textAlign:"left",fontWeight:"bold",height:"10%",width:"80%",margin:"auto"},name:{textAlign:"left",width:"fit-content"}}})),qe=Object(s.b)((function(e){return{post:e.post}}),{getPost:V})((function(e){var t=e.getPost,a=e.post,l=a.post,o=a.loading,c=e.match,i=Be();return Object(n.useEffect)((function(){t(c.params.id),console.log("Post Title",l.title)}),[t]),null==o?r.a.createElement(D,null):r.a.createElement(U.a,{maxWidth:"xl"},r.a.createElement("div",{style:{marginLeft:"-20px"}},r.a.createElement(ie,null)),r.a.createElement(U.a,{maxWidth:"lg",className:i.mainCardContainer},r.a.createElement(U.a,null,r.a.createElement(se.a,{className:i.root},r.a.createElement(Me.a,{title:r.a.createElement(L.a,{variant:"h5",className:i.name},r.a.createElement(L.a,{variant:"body2",component:"p",color:"secondary"},"Submitted By"," "),l.name),subheader:r.a.createElement(L.a,{variant:"p",className:i.date},new Date(l.date).toDateString()),action:r.a.createElement(fe.a,{"aria-label":"share"},r.a.createElement(Xe.a,null))}),r.a.createElement(pe.a,null,r.a.createElement(L.a,{component:"div"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l.content}})))))))})),Je=a(484),Ye=a(490),Ze=(a(178),a(102)),Ke=a.n(Ze),Qe=Object(s.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(C.a)(j.a.mark((function a(n){var r,l,o,c;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},l=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,S.a.post("/api/auth",l,r);case 5:o=a.sent,n({type:"LOGIN_SUCCESS",payload:o.data}),n(k()),n(_()),a.next=16;break;case 11:a.prev=11,a.t0=a.catch(2),c=a.t0.response.data.errors,console.error(c),n({type:"LOGIN_FAIL"});case 16:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,l=Object(n.useState)({email:"",password:""}),o=Object(P.a)(l,2),s=o[0],m=o[1],d=s.email,u=s.password,p=function(e){return m(Object(h.a)({},s,Object(R.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(C.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t(d,u);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?r.a.createElement(i.a,{to:"/dashboard"}):r.a.createElement("form",{className:"sign_up_main_div",id:"login-form",onSubmit:function(e){return g(e)}},r.a.createElement(n.Fragment,null,r.a.createElement(Je.a,null),r.a.createElement(U.a,{maxWidth:"sm"},r.a.createElement(L.a,{component:"div",style:{boxShadow:"grey 1px 5px 5px 2px",backgroundColor:"white",height:"auto"}},r.a.createElement("div",{className:"top_border"},r.a.createElement("span",{className:"text"}," Student Sign Up")),r.a.createElement("div",{className:"logo_text_div"},r.a.createElement("div",{className:"img_div"},r.a.createElement("img",{className:"img_Styling",src:Ke.a,alt:""})),r.a.createElement("div",{className:"text_div"},r.a.createElement("span",{className:"text_span"},"Presidential Initiative for ",r.a.createElement("br",null),"  Artificial Intelligence and Computing."))),r.a.createElement("div",{className:"form_main_div"},r.a.createElement("div",{className:"cnic"},"Email"),r.a.createElement("div",null,r.a.createElement("input",{className:"cnic_input",type:"text",id:"ename",name:"email",placeholder:"Enter email address",value:d,onChange:function(e){return p(e)}})),r.a.createElement("div",{className:"cnic"},"Password"),r.a.createElement("div",null,r.a.createElement(Ye.a,{id:"outlined-password-input",label:"Password",name:"password",type:"password",autoComplete:"current-password",variant:"outlined",value:u,onChange:function(e){return p(e)},minLength:"6"})),r.a.createElement("div",{className:"already"},r.a.createElement("div",{className:"al"},r.a.createElement("span",{className:"already-text"},"Not a member?"),r.a.createElement("span",null,r.a.createElement(c.b,{to:"signup",className:"link"},r.a.createElement("a",{href:"",className:"signin_text"},"Sign Up ")))),r.a.createElement("span",null,r.a.createElement("a",{href:"",className:"how"},"Forget Password?")),r.a.createElement("div",{className:"button_div"},r.a.createElement("button",{className:"button"},"Login"))))))))})),$e=(a(402),Object(s.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e){var t=e.cnic,a=e.email,n=e.password;return(function(){var e=Object(C.a)(j.a.mark((function e(r){var l,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{headers:{"Content-Type":"application/json"}},l={cnic:t,email:a,password:n},e.prev=2,e.next=5,S.a.post("/api/users",l);case 5:o=e.sent,r({type:"REGISTER_SUCCESS",payload:o.data}),r(k()),r(_()),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.message),r({type:"REGISTER_FAIL"});case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}())}})((function(e){var t=e.register,a=e.isAuthenticated,l=Object(n.useState)({cnic:"",email:"",password:""}),o=Object(P.a)(l,2),s=o[0],m=o[1],d=s.cnic,u=s.email,p=s.password,g=function(e){return m(Object(h.a)({},s,Object(R.a)({},e.target.name,e.target.value)))};return a?r.a.createElement(i.a,{to:"/dashboard"}):r.a.createElement("form",{className:"sign_up_main_div",onSubmit:function(e){return function(e){e.preventDefault(),console.log(s),t({cnic:d,email:u,password:p})}(e)}},r.a.createElement(n.Fragment,null,r.a.createElement(Je.a,null),r.a.createElement(U.a,{maxWidth:"sm"},r.a.createElement(L.a,{component:"div",style:{boxShadow:"grey 1px 5px 5px 2px",backgroundColor:"white",height:"auto"}},r.a.createElement("div",{className:"top_border"},r.a.createElement("span",{className:"text"}," Student Sign Up")),r.a.createElement("div",{className:"logo_text_div"},r.a.createElement("div",{className:"img_div"},r.a.createElement("img",{className:"img_Styling",src:Ke.a,alt:""})),r.a.createElement("div",{className:"text_div"},r.a.createElement("span",{className:"text_span"},"Presidential Initiative for ",r.a.createElement("br",null),"  Artificial Intelligence and Computing."))),r.a.createElement("div",{className:"form_main_div"},r.a.createElement("div",{className:"cnic"},"CNIC"),r.a.createElement("div",{className:"verrify_text"},"Please provide your valid CNIC or B-Form number, we will verify it."),r.a.createElement("div",null,r.a.createElement("input",{className:"cnic_input",type:"text",id:"cname",name:"cnic",placeholder:"Enter CNIC",value:d,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"cnic"},"Email"),r.a.createElement("div",null,r.a.createElement("input",{className:"cnic_input",type:"text",id:"ename",name:"email",placeholder:"Enter email address",value:u,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"cnic"},"Password"),r.a.createElement("div",null,r.a.createElement(Ye.a,{id:"outlined-password-input",label:"Password",name:"password",type:"password",autoComplete:"current-password",variant:"outlined",value:p,onChange:function(e){return g(e)},minLength:"6"})),r.a.createElement("div",{className:"already"},r.a.createElement("div",{className:"al"},r.a.createElement("span",{className:"already-text"},"Already a member?"),r.a.createElement("span",null,r.a.createElement(c.b,{to:"login",className:"link"},r.a.createElement("a",{href:"",className:"signin_text"},"Sign in ")))),r.a.createElement("span",null,r.a.createElement("a",{href:"",className:"how"},"How it Works?")),r.a.createElement("div",{className:"button_div"},r.a.createElement("button",{className:"button"},"Sign up"))))))))}))),et=a(185),tt=a.n(et),at=!1;function nt(e,t){var a=new XMLHttpRequest;a.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(a.response)},a.open("GET",e),a.responseType="blob",a.send()}var rt=function(e){function t(){var e,a;Object(we.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(Ne.a)(this,(e=Object(Te.a)(t)).call.apply(e,[this].concat(r)))).state={editorState:Ce.EditorState.createEmpty(),image:""},a.componentDidMount=function(){a.props.getPost(a.props.match.params.id)},a.componentWillUnmount=function(){at=!1},a.componentWillUpdate=function(e,t){if(a.props.post.post.content){if(at)return!1;at=!0;var n=tt()(a.props.post.post.content);if(n){var r=Ce.ContentState.createFromBlockArray(n.contentBlocks),l=Ce.EditorState.createWithContent(r);a.setState({editorState:l})}}},a.changeFileHandle=function(e){e.target.files[0].size>52e3&&alert("File size is too big!"),nt(URL.createObjectURL(e.target.files[0]),(function(e){console.log("RESULT:",e),a.setState({image:e})}))},a.onCategory=function(e){a.setState(Object(h.a)({},a.state,Object(R.a)({},e.target.name,e.target.value)))},a.onChange=function(e){a.setState({editorState:e,editorContentHtml:Object(_e.a)(e.getCurrentContent())})},a.updatef=function(){var e=a.state.image;a.state.editorContentHtml,a.props.loggedInUserId;console.log("checking"),console.log(xe()(a.state.editorContentHtml).find("h1").prevObject);var t={title:xe()(a.state.editorContentHtml).find("h1").prevObject[0].innerText||"Untitled Article",content:Pe()(Object(Ce.convertToRaw)(a.state.editorState.getCurrentContent())),image:e,_id:a.props.post.post._id};a.props.updatePost(t),$.b.success("Your Post Has benn Updated !")},a}return Object(je.a)(t,e),Object(Se.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"textEditorDiv"},r.a.createElement("div",{style:{width:"1000px",height:"600px",overflow:"scroll",backgroundColor:"#C0C0C0",margin:"auto"}},r.a.createElement(ke.Editor,{style:{overflow:"scroll",border:"12px solid green"},id:"textEditorID",editorState:this.state.editorState,wrapperClassName:"demo-wrapper",editorClassName:"editer-content",onEditorStateChange:this.onChange,value:"Begin Typing here",toolbar:{image:{uploadEnabled:!0,previewImage:!0,urlEnabled:!0,uploadCallback:function(e){return new Promise((function(t,a){nt(URL.createObjectURL(e),(function(a){e.size>65700&&alert("File size is too big!"),t({data:{link:a}})}))}))}}}})),r.a.createElement("div",{id:"editorPublishButton",style:{width:"fit-content",margin:"auto",marginTop:"1rem"}}," ",r.a.createElement("input",{accept:"image/*",className:"editorUploadButton",style:{display:"none"},id:"contained-button-file",multiple:!0,type:"file",name:"User-Image",onChange:function(t){return e.changeFileHandle(t)}}),r.a.createElement("label",{htmlFor:"contained-button-file"},r.a.createElement(I.a,{variant:"contained",color:"primary",component:"span"},"Upload image")),r.a.createElement(I.a,{onClick:this.updatef,variant:"contained",color:"secondary"},"PUBLISH"),r.a.createElement($.a,{autoClose:2e3})))}}]),t}(n.Component),lt=Object(s.b)((function(e){return{loggedInUserId:e.auth.user._id,post:e.post}}),{getPost:V,updatePost:function(e){return function(){var t=Object(C.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.put("/api/posts/".concat(e._id),e);case 3:n=t.sent,a({type:"UPDATE_POST",payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"POSTS_ERR",payload:{msg:t.t0.message}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(rt);localStorage.token&&N(localStorage.token);var ot=function(){return Object(n.useEffect)((function(){O.dispatch(k())}),[]),r.a.createElement(s.a,{store:O},r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:Qe}),r.a.createElement(i.b,{exact:!0,path:"/s",component:$e}),r.a.createElement(d,{exact:!0,path:"/dashboard",component:ne}),r.a.createElement(i.b,{exact:!0,path:"/articles",component:Oe}),r.a.createElement(i.b,{exact:!0,path:"/write",component:Ge}),r.a.createElement(i.b,{exact:!0,path:"/article/:id",component:qe}),r.a.createElement(i.b,{exact:!0,path:"/article/edit/:id",component:lt})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAAEYBAMAAAD4zbPrAAAAG1BMVEXMzMwAAACysrKZmZl/f39MTEwZGRlmZmYzMzNO6yBrAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADoElEQVR4nO3Yy3PaVhTA4VtJIJaRMTJLeTKhXpqBcbdQ8lpaSepmiZwm3Zo2TbxETTL5t3Ofkq4cMp4MYvX7FvggdNHxuS8JIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgmK/O74YynmU/bpXVYdVqVh3duydFkiQv2qGIZZy+2N1KnpkuqjOTlzoM8uro3l0kf65mt8mNH4qw+Hs1vz3e3errap6PdXLyzNmT5FLFy/G/86tx1kmiTxf6wsd+KKYnOomdrX5Xn5Zb+TrRZ56N5EuUqiGQrztJNNOvYeqHQXG+q0GjVV/9T/lCx6VscDpUUW+0/yxrZeaFvZ2d3hSpvk9NPJV9n+tRI4psV4M92Jx74XR7r1aJrL2t3y/bKufl5X5z8+TnXpj/uOedwks0OrHhes/JNZV++M7/NF6Yv9GNf1wmWnX9jegNTTgYdpCgFY68MGjNh74dssu1f1x2fTWZMjF4YI7G9xrgP+fi2gujYxG+fvel3qUKnU2UZl6rQE2mSTXVXZe7IdCBR3UGOoyHUTF+XaRVphNdpOW13yxWGYVqhwhKOYFOt+Zw2NH69Pjjldv2XNg7yj/Jq2+qPtQlbRdU9I/U61n66rfyL1Enqgu9f4HcqT9nfjg40b0XJlVmqqTtgoqNWYcukkTX8PSy00TFbPasHGVeODBbt1hu3UmypHcKGpgDj5Kv/xUnmVnzu0xUfXV+7YV9u+Y0FprJ8Z2CDvTIiNN/ZO3LN91XVIlSL+zbeduYv0HRLqjIdWKm/0N5c9DxGLUXXTRDV8nm/N20F5143Dxluu581mvuIiZ0iTZqE6VmLa2ZATw4Mu/kbcwB1lFvf5Zh726iy+uJv+HYudUo4yF2plai7lL1VirTCvyS2rnVmOqH2Ov1XVodulFWd6JKyytpbOdWY6of5O5peumFhcnC1cj0s1fSzf82q609Y3Sg+9GFF27M/dzp2h4z/dwoac+NXtfPalHt9A7ffGmU+qG5JRLlQthj+rNGSUtXtdAOAXUH2Okz01t9nc3QD6NEpXTmLtm3m9JkbQ9M6hVo80Znp/K1T6HtHWw/8vH72fzKXKEOxTJ9P3ueuBv6IPP/iuLtH5p8H8tHfPlcr7Pr8rk++KB+87hphSK4qn7++J7EWsj4V/VLyWfTKq++oAMPH6++E4qHq/s94B3stycAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDD+QYfoYtjzyeT/AAAAABJRU5ErkJggg=="}},[[198,1,2]]]);
//# sourceMappingURL=main.456894da.chunk.js.map