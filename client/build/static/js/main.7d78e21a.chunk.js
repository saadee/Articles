(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/logo.fb7de414.svg"},176:function(e,t,a){},199:function(e,t,a){e.exports=a(412)},204:function(e,t,a){},205:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},228:function(e,t,a){},230:function(e,t,a){e.exports=a.p+"static/media/i.34dfeed2.jpg"},402:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),i=a.n(o),l=(a(204),a(205),a(19)),c=a(51),s=a(23),m=a(3),d=Object(s.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.auth,a=t.isAuthenticated,n=t.loading,o=e.component,i=Object(m.a)(e,["auth","component"]);return r.a.createElement(c.b,Object.assign({},i,{render:function(e){return a||n?r.a.createElement(o,e):r.a.createElement(c.a,{to:"/"})}}))})),u=a(46),p=a(179),g=a(180),h=a(11),E={user:{},token:localStorage.getItem("token"),isAuthenticated:null,loading:!0},f=a(37),b={posts:[],post:{},Tide:{},loading:!0,error:{}},v={userDrawer:!1};var y={profile:{},loading:!0,error:{}},A=Object(u.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"USER_LOADED":return Object(h.a)({},e,{isAuthenticated:!0,loading:!1,user:n});case"REGISTER_SUCCESS":case"LOGIN_SUCCESS":return localStorage.setItem("token",n.token),Object(h.a)({},e,{},n,{isAuthenticated:!0,loading:!1});case"REGISTER_FAIL":case"LOG_OUT":case"LOGIN_FAIL":return localStorage.removeItem("token"),Object(h.a)({},e,{user:{},token:null,isAuthenticated:!1,loading:!0});default:return e}},drawerReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"PROFILE_CLICKED":case"PROFILE_CLOSED":return Object(h.a)({},e,{userDrawer:n});default:return e}},ProfileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_PROFILE":return Object(h.a)({},e,{profile:n,loading:!1});case"PROFILE_ERROR":return Object(h.a)({},e,{error:n,loading:!1});case"CLEAR_PROFILE":return Object(h.a)({},e,{profile:{},repos:[],loading:!1});case"PROFILE_CREATED":return Object(h.a)({},e,{profile:n});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_POSTS":return Object(h.a)({},e,{posts:n,loading:!1});case"GET_POST":case"UPDATE_POST":return Object(h.a)({},e,{post:n,loading:!1});case"UPDATE_DATE":case"UPDATE_SHOW":return Object(h.a)({},e,{post:n.post,posts:n.posts,loading:!1});case"DELETE_POST":return Object(h.a)({},e,{posts:n.posts,loading:!1});case"ADD_POSTS":return Object(h.a)({},e,{posts:[].concat(Object(f.a)(e.posts),[n]),loading:!1});case"POSTS_ERR":return Object(h.a)({},e,{error:n,loading:!1});case"ADD_ARTICLE":return console.log(n),Object(h.a)({},e,{posts:n,loading:!1});default:return e}}}),x=[g.a],w=Object(u.createStore)(A,{},Object(p.composeWithDevTools)(u.applyMiddleware.apply(void 0,x))),O=a(21),S=a.n(O),T=function(e){e?S.a.defaults.headers.common["x-auth-token"]=e:delete S.a.defaults.headers.common["x-auth-token"]},j=a(9),C=a.n(j),N=a(22),_=function(){return function(){var e=Object(N.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S()("/api/profile/me");case 3:a=e.sent,t({type:"GET_PROFILE",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"PROFILE_ERROR",payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=Object(N.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&T(localStorage.token),e.prev=1,e.next=4,S.a.get("/api/auth");case 4:a=e.sent,t({type:"USER_LOADED",payload:a.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0&&t({type:"AUTH_ERROR"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},R=a(10),P=a(38),I=a(467),L=a(76),D=a(466),U=(a(228),a(461));function H(){return r.a.createElement(U.a,{style:{position:"fixed",marginLeft:"-5%",width:"50px",marginTop:"20%",marginBottom:"20%"},disableShrink:!0})}var W=a(465),F=a(74),G=a.n(F),z=a(186),V=function(){return function(){var e=Object(N.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("api/posts");case 3:a=e.sent,t({type:"GET_POSTS",payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"POSTS_ERR",payload:{msg:e.t0.message}});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},M=function(e){return function(){var t=Object(N.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.get("/api/posts/".concat(e));case 3:n=t.sent,a({type:"GET_POST",payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"POSTS_ERR",payload:{msg:t.t0.message}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},X=a(469),B=a(473),q=a(472),J=a(468),Y=a(470),Z=a(471),K=a(184),Q=a.n(K),$=a(31),ee=(a(107),a(474)),te=a(490),ae=Object(W.a)((function(e){return{root:{width:"100%",textAlign:"center",border:"2px solid red"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},table:{minWidth:550},tableh:{fontWeight:"bold"},paper:{padding:e.spacing(2),margin:"auto",maxWidth:500},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},cardroot:{flexGrow:1}}})),ne=Object(s.b)((function(e){return{auth:e.auth,post:e.post,isAuthenticated:e.auth.isAuthenticated}}),{getPosts:V,deletePost:function(e){return function(){var t=Object(N.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.delete("/api/posts/".concat(e));case 3:n=t.sent,r=n.data,a({type:"DELETE_POST",payload:{id:e,posts:r}}),console.log(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:"POSTS_ERR",payload:{msg:t.t0.message}});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},updateDate:function(e,t){return function(){var a=Object(N.a)(C.a.mark((function a(n){var r,o,i;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r={headers:{"Content-Type":"application/json"}},o=JSON.stringify({date:t}),a.next=5,S.a.put("/api/posts/date/".concat(e),o,r);case 5:i=a.sent,n({type:"UPDATE_DATE",payload:i.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:"POSTS_ERR",payload:{msg:a.t0.message}});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},showPost:function(e,t){return function(){var a=Object(N.a)(C.a.mark((function a(n){var r,o,i;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r={headers:{"Content-Type":"application/json"}},o=JSON.stringify({show:t}),a.next=5,S.a.put("/api/posts/show/".concat(e),o,r);case 5:i=a.sent,n({type:"UPDATE_SHOW",payload:i.data}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),n({type:"POSTS_ERR",payload:{msg:a.t0.message}});case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){e.auth.user;var t=e.getPosts,a=e.deletePost,o=e.isAuthenticated,i=e.updateDate,s=e.showPost,m=e.post,d=m.posts,u=m.loading;m._id;Object(n.useEffect)((function(){t()}),[t]);var p=Object(n.useState)({checked:null,date:new Date}),g=Object(P.a)(p,2),E=g[0],f=g[1],b=ae();return o?null==u?r.a.createElement(n.Fragment,null,r.a.createElement(H,null)):r.a.createElement(n.Fragment,null,r.a.createElement(D.a,{maxWidth:"lg",style:{marginTop:"5%"}},r.a.createElement(L.a,{variant:"h4",style:{margin:"auto"}},"Welcome"),r.a.createElement("br",null),r.a.createElement(l.b,{to:"/write",style:{textDecoration:"none"}},r.a.createElement(I.a,{variant:"outlined",color:"primary",style:{margin:"auto"}},r.a.createElement(L.a,{variant:"object"},"Write an Article"),r.a.createElement(G.a,null)))," ",r.a.createElement("br",null),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(l.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(I.a,{variant:"outlined",color:"secondary",style:{margin:"auto"}},r.a.createElement(L.a,{variant:"object"},"View All Article")))," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(J.a,{component:z.a,style:{width:"fit-content",margin:"auto"}},r.a.createElement(X.a,{className:b.table,"aria-label":"simple table"},r.a.createElement(Y.a,null,r.a.createElement(Z.a,null,r.a.createElement(q.a,{className:b.tableh},"Image"),r.a.createElement(q.a,{align:"center",className:b.tableh},"Title"),r.a.createElement(q.a,{align:"center",className:b.tableh},"Edit")," ",r.a.createElement(q.a,{align:"center",className:b.tableh},"Change Date")," ",r.a.createElement(q.a,{align:"center",className:b.tableh},"Delete"),r.a.createElement(q.a,{align:"center",className:b.tableh},"Hide"))),r.a.createElement(B.a,null,d.map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(q.a,{component:"th",scope:"post"},r.a.createElement("img",{src:(e.length,e.titleImg),alt:"",style:{width:"50px"}})),r.a.createElement(q.a,{align:"center"},e.title),r.a.createElement(q.a,{align:"center"},r.a.createElement(l.b,{to:"/article/edit/".concat((e.length,e._id))},r.a.createElement(G.a,null)))," ",r.a.createElement(q.a,{align:"center"},r.a.createElement("span",{style:{fontWeight:"bold"}},new Date(e.date).toDateString())," ",r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("input",{type:"date",id:e._id,name:"Date",onChange:function(t){i(e._id,t.target.value),$.b.success("Date Has Been Upated")}})),r.a.createElement(q.a,{align:"center"},r.a.createElement(Q.a,{onClick:function(t){a(e._id),$.b.warn("Post been Deleted"),console.log("Tidde",e.Tide?e.Tide:"")}}),r.a.createElement($.a,{autoClose:2e3})),r.a.createElement(q.a,{align:"center"},"true"==e.show?r.a.createElement(L.a,{component:"span"},"Show"):r.a.createElement(L.a,{component:"span"},"Hide"),r.a.createElement(ee.a,{control:r.a.createElement(te.a,{onChange:function(t){!function(e){f(Object(h.a)({},E,Object(R.a)({},e.target.name,e.target.checked))),1==e.target.checked?$.b.error("Post has been Hide",{position:$.b.POSITION.TOP_CENTER}):$.b.error("Post has been visible"),console.log("Elefante",e.target.checked)}(t),s(e._id,t.target.checked)},name:"checked",color:"primary"})})))}))))))):r.a.createElement(c.a,{to:"/"})})),re=a(478),oe=a(476),ie=a(477),le=Object(W.a)((function(e){return{root:{flexGrow:1,width:"99vw"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontSize:"35px",fontWeight:"bold",letterSpacing:"10px",color:"black",fontFamily:"Lobster Two",marginTop:"-15px"}}}));function ce(){var e=le();return r.a.createElement("div",{className:e.root},r.a.createElement(oe.a,{className:"animated bounceInDown",position:"static",style:{height:"50px",background:"radial-gradient(circle, rgba(241,239,240,0.4822303921568627) 0%, rgba(15,15,15,0.6166841736694677) 100%)"}},r.a.createElement(ie.a,null,r.a.createElement(L.a,{variant:"h3",style:{},className:e.title},"Articles"))))}var se=a(479),me=a(481),de=a(67),ue=a.n(de),pe=a(482),ge=a(480),he=a(483),Ee=a(475),fe=a(121),be=a.n(fe),ve=(a(230),a(231),a(43)),ye=a.n(ve),Ae=Object(W.a)((function(e){var t;return{root:{flexGrow:1,margin:"auto"},root1:{maxWidth:400},paper:(t={padding:e.spacing(2),margin:"auto"},Object(R.a)(t,"margin","0.5rem"),Object(R.a)(t,"maxWidth",500),t),image:{width:130,height:130},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},img1:{display:"inline",width:"fit-content",maxWidth:"100%",maxHeight:"100%"},paper1:{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"center",margin:"0.5rem"},gridParent:{margin:"auto"},gridFlex:{display:"flex",marginLeft:"50px"},gridFlexs:{margin:"auto",display:"flex"},ReadingB:{textAlign:"left"},card:{display:"flex",maxWidth:750,maxHeight:300,margin:"auto"},title:{fontWeight:"bold",fontSize:"25px"},description:{textAlign:"justfy",margin:"1rem",padding:"1rem"},Generalimg:{},author:{margin:"10px",textAlign:"left"},mediaDiv:{margin:"10px"},link:{textDecoration:"none"},media:{height:"90px",width:"150px",paddingTop:"30.25%",border:"1px solid red"}}})),xe=Object(s.b)((function(e){return{post:e.post,user:e.auth.user,isAuthenticated:e.auth.isAuthenticated}}),{getPosts:V,getCurrentProfile:_})((function(e){var t=e.getPosts,a=e.post,o=a.posts,i=a.loading,c=(a._id,e.user,e.getCurrentProfile);e.isAuthenticated;Object(n.useEffect)((function(){c(),t()}),[t]);var s=Ae();console.log("hey",o[0]);var m=[],d=[],u=[],p=[],g=[];o.forEach((function(e){switch(e.category){case"General":u.push(e);break;case"Medical":m.push(e);break;case"Social":d.push(e);break;case"Crisis":p.push(e);break;case"Humor":g.push(e)}})),console.log("Medical",m);var h=u[0]?u[0].titleImg:"",E=m[0]?m[0].titleImg:"",f=d[0]?d[0].titleImg:"";return null===i?r.a.createElement("div",null,"Hi "):r.a.createElement("div",{className:s.root},r.a.createElement(ce,null),r.a.createElement(re.a,{container:!0,spacing:3,className:s.gridParent},r.a.createElement(re.a,{item:!0,xs:12}),r.a.createElement(re.a,{item:!0,xs:6,style:{marginLeft:"0.5rem"}},r.a.createElement(l.b,{to:"/article/".concat(u.length?u[0]._id:u._id),className:s.link},r.a.createElement(se.a,{style:{width:"100%",height:"400px"},className:"animated zoomIn delay-1s"}," ",r.a.createElement(D.a,{style:{background:"url(".concat(u.length?h:ue.a,")"),height:"400px",width:"100%",color:"white",backgroundSize:"cover",backgroundRepeat:"no-repeat"}},r.a.createElement("div",{style:{top:"60%",position:"relative",border:"1px solid red",width:"100%"}},r.a.createElement("div",{style:{height:"150px",border:"1px solid green",paddingTop:"5%",paddingBottom:"5%",width:"100%",fontSize:"25px",fontWeight:"bold",background:"linear-gradient(90deg, rgba(122,109,109,0) 0%, rgba(207,207,221,0.6334908963585435) 45%, rgba(227,237,238,0) 100%)"},dangerouslySetInnerHTML:{__html:u.length?u[0].title:""}})))))),r.a.createElement(re.a,{className:"animated fadeIn delay-2s",item:!0,xs:5,style:{height:"400px",marginLeft:"0rem",overflow:"scroll",overflowX:"hidden"}},u.slice(1).map((function(e){return r.a.createElement(l.b,{to:"/article/".concat((u.length,e._id)),className:s.link},r.a.createElement(z.a,{style:{width:"500px"}},r.a.createElement(se.a,{style:{width:"fit-content"}}," ",r.a.createElement(D.a,{style:{background:"url(".concat(u.length?e.titleImg:ue.a,")"),height:"250px",width:"500px",margin:"0.5rem",backgroundSize:"cover",backgroundRepeat:"no-repeat"}},r.a.createElement("div",{style:{top:"60%",position:"relative",width:"100%",textAlign:"center",height:"10rem"}},r.a.createElement("div",{style:{fontSize:"25px",opacity:"1",width:"100%",height:"400px",paddingTop:"5%",paddingBottom:"5%",background:"linear-gradient(90deg, rgba(122,109,109,0) 0%, rgba(207,207,221,0.6334908963585435) 45%, rgba(227,237,238,0) 100%)",fontWeight:"bold"},dangerouslySetInnerHTML:{__html:u.length?e.title:""}}))))))}))),r.a.createElement(re.a,{item:!0,xs:4,className:"animated bounceIn delay-3s"},r.a.createElement(re.a,{item:!0},r.a.createElement(se.a,{className:s.root1},r.a.createElement(ge.a,null,r.a.createElement(me.a,{component:"img",alt:"Contemplative Reptile",height:"150",width:"120",image:m.length?E:ue.a,title:"Contemplative Reptile"}),r.a.createElement(pe.a,null,r.a.createElement(L.a,{variant:"body2",color:"textSecondary",component:"p",style:{maxWidth:"400px",maxHeight:"130px",overflow:"hidden",fontWeight:"bold",fontSize:"1.2rem"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m.length?m[0].title:""}})))),r.a.createElement(he.a,null,r.a.createElement(l.b,{to:"/article/".concat(m.length?m[0]._id:m._id),className:s.link},r.a.createElement(Ee.a,null," ",r.a.createElement("span",{style:{fontSize:"15px"}},"See More"),r.a.createElement(be.a,{style:{float:"right"}}))))))),r.a.createElement(re.a,{item:!0,xs:4,className:"animated bounceIn delay-4s"},r.a.createElement(re.a,{item:!0},r.a.createElement(se.a,{className:s.root1},r.a.createElement(ge.a,null,r.a.createElement(me.a,{component:"img",alt:"Contemplative Reptile",height:"150",width:"100",image:d.length?f:ue.a,title:"Contemplative Reptile"}),r.a.createElement(pe.a,null,r.a.createElement(L.a,{variant:"body2",color:"textSecondary",component:"p",style:{maxWidth:"400px",fontWeight:"bold",fontSize:"1.2rem",maxHeight:"130px",overflow:"hidden"}},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.length?d[0].title:""}})))),r.a.createElement(he.a,null,r.a.createElement(l.b,{to:"/article/".concat(d.length?d[0]._id:d._id),className:s.link},r.a.createElement(Ee.a,null," ",r.a.createElement("span",{style:{fontSize:"15px"}},"See More"),r.a.createElement(be.a,{style:{float:"right"}})))))))))})),we=a(64),Oe=a(39),Se=a(96),Te=a(97),je=a(103),Ce=a(29),Ne=a(102),_e=a(98),ke=a(99),Re=a.n(ke),Pe=(a(175),a(493)),Ie=a(484),Le=a(489),De=a(492);function Ue(e,t){var a=new XMLHttpRequest;a.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(a.response)},a.open("GET",e),a.responseType="blob",a.send()}var He=["General","Social","Medical","Crisis"],We=function(e){function t(){var e,a;Object(we.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(Se.a)(this,(e=Object(Te.a)(t)).call.apply(e,[this].concat(r)))).state={editorState:Ce.EditorState.createEmpty(),image:"",category:""},a.changeFileHandle=function(e){e.target.files[0].size>52e3&&alert("File size is too big!"),Ue(URL.createObjectURL(e.target.files[0]),(function(e){console.log("RESULT:",e),a.setState({image:e})}))},a.onCategory=function(e){a.setState(Object(h.a)({},a.state,Object(R.a)({},e.target.name,e.target.value)))},a.onChange=function(e){a.setState({editorState:e,editorContentHtml:Object(Ne.a)(e.getCurrentContent())})},a.onPublish=function(){var e=a.state.image,t=(a.state.editorContentHtml,a.props.loggedInUserId),n=a.state.category;console.log("checking"),console.log(ye()(a.state.editorContentHtml).find("h1").prevObject),console.log("Image",ye()(a.state.editorContentHtml).find("img").prevObject);var r={title:ye()(a.state.editorContentHtml).find("h1").prevObject[0].innerText||"Untitled Article",content:Re()(Object(Ce.convertToRaw)(a.state.editorState.getCurrentContent())),image:e,ctg:n,id:t};r.ArtImg=ye()(a.state.editorContentHtml).find("img").prevObject[0].src,a.props.addArticle(r),$.b.success("Article has been Publshed")},a}return Object(je.a)(t,e),Object(Oe.a)(t,[{key:"render",value:function(){var e=this;return this.props.isAuthenticated?r.a.createElement("div",{id:"textEditorDiv"},r.a.createElement("div",{style:{width:"1000px",height:"600px",overflow:"scroll",backgroundColor:"#C0C0C0",margin:"auto"}},r.a.createElement(_e.Editor,{style:{overflow:"scroll",border:"12px solid green"},id:"textEditorID",editorState:this.state.editorState,wrapperClassName:"demo-wrapper",editorClassName:"editer-content",onEditorStateChange:this.onChange,value:"Begin Typing here",toolbar:{image:{uploadEnabled:!0,previewImage:!0,urlEnabled:!0,uploadCallback:function(e){return new Promise((function(t,a){Ue(URL.createObjectURL(e),(function(e){t({data:{link:e}})}))}))}}}})),r.a.createElement("div",null,r.a.createElement(Ie.a,{variant:"filled",style:{width:"200px"}},r.a.createElement(De.a,{id:"demo-simple-select-filled-label"},"Select Category"),r.a.createElement(Le.a,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",name:"category",value:this.state.category,onChange:function(t){return e.onCategory(t)}},He.map((function(e){return r.a.createElement(Pe.a,{value:e},e)}))))),r.a.createElement("div",{id:"editorPublishButton",style:{width:"fit-content",margin:"auto",marginTop:"1rem"}},r.a.createElement(I.a,{onClick:this.onPublish,variant:"contained",color:"secondary"},"PUBLISH"),r.a.createElement($.a,null),r.a.createElement(l.b,{to:"/",style:{textDecoration:"none",margin:"1rem"}},r.a.createElement(I.a,{variant:"outlined",color:"primary",style:{margin:"1rem"}},"View Articles")))):r.a.createElement(c.a,{to:"/login"})}}]),t}(n.Component),Fe=Object(s.b)((function(e){return{loggedInUserId:e.auth.user._id,isAuthenticated:e.auth.isAuthenticated}}),{addArticle:function(e){return function(){var t=Object(N.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.post("/api/posts",e);case 3:n=t.sent,a({type:"ADD_ARTICLE",payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(We),Ge=(a(402),a(4),a(487)),ze=a(104),Ve=Object(W.a)((function(e){return{root:{maxWidth:900,margin:"auto",marginTop:"3%"},media:{height:0,paddingTop:"40%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:ze.a[500]},mainCardContainer:{margin:"auto",width:"80%",marginTop:"3%"},heading:{fontFamily:" ",textAlign:"left",fontWeight:"bold",height:"10%",width:"80%",margin:"auto"},name:{textAlign:"left",width:"fit-content"}}})),Me=Object(s.b)((function(e){return{post:e.post}}),{getPost:M})((function(e){var t=e.getPost,a=e.post,o=a.post,i=a.loading,c=e.match,s=Ve();return Object(n.useEffect)((function(){t(c.params.id),console.log("Post Title",o.title)}),[t]),null==i?r.a.createElement(H,null):r.a.createElement(D.a,{maxWidth:"xl"},r.a.createElement("div",{style:{marginLeft:"-20px"}},r.a.createElement(ce,null)),r.a.createElement(D.a,{maxWidth:"lg",className:s.mainCardContainer},r.a.createElement(D.a,null,r.a.createElement(se.a,{className:s.root},r.a.createElement(Ge.a,{subheader:r.a.createElement(L.a,{variant:"p",className:s.date},new Date(o.date).toDateString()),action:r.a.createElement(l.b,{to:"/article/edit/".concat(o._id),style:{textDecoration:"none"}},r.a.createElement(Ee.a,{"aria-label":"share",variant:"outlined"},r.a.createElement(L.a,null,"Edit"),r.a.createElement("span",null," ",""),r.a.createElement(G.a,null)))}),r.a.createElement(pe.a,null,r.a.createElement(L.a,{component:"div"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o.content}})))))))})),Xe=a(488),Be=a(491),qe=(a(176),a(101)),Je=a.n(qe),Ye=Object(s.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(N.a)(C.a.mark((function a(n){var r,o,i,l;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"Content-Type":"application/json"}},o=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,S.a.post("/api/auth",o,r);case 5:i=a.sent,n({type:"LOGIN_SUCCESS",payload:i.data}),n(k()),n(_()),a.next=16;break;case 11:a.prev=11,a.t0=a.catch(2),l=a.t0.response.data.errors,console.error(l),n({type:"LOGIN_FAIL"});case 16:case"end":return a.stop()}}),a,null,[[2,11]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,o=Object(n.useState)({email:"",password:""}),i=Object(P.a)(o,2),s=i[0],m=i[1],d=s.email,u=s.password,p=function(e){return m(Object(h.a)({},s,Object(R.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(N.a)(C.a.mark((function e(a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t(d,u);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?r.a.createElement(c.a,{to:"/dashboard"}):r.a.createElement("form",{className:"sign_up_main_div",id:"login-form",onSubmit:function(e){return g(e)}},r.a.createElement(n.Fragment,null,r.a.createElement(Xe.a,null),r.a.createElement(D.a,{maxWidth:"sm"},r.a.createElement(L.a,{component:"div",style:{boxShadow:"grey 1px 5px 5px 2px",backgroundColor:"white",height:"auto"}},r.a.createElement("div",{className:"top_border"},r.a.createElement("span",{className:"text"}," Student Sign Up")),r.a.createElement("div",{className:"logo_text_div"},r.a.createElement("div",{className:"img_div"},r.a.createElement("img",{className:"img_Styling",src:Je.a,alt:""})),r.a.createElement("div",{className:"text_div"},r.a.createElement("span",{className:"text_span"},"Presidential Initiative for ",r.a.createElement("br",null),"  Artificial Intelligence and Computing."))),r.a.createElement("div",{className:"form_main_div"},r.a.createElement("div",{className:"cnic"},"Email"),r.a.createElement("div",null,r.a.createElement("input",{className:"cnic_input",type:"text",id:"ename",name:"email",placeholder:"Enter email address",value:d,onChange:function(e){return p(e)}})),r.a.createElement("div",{className:"cnic"},"Password"),r.a.createElement("div",null,r.a.createElement(Be.a,{id:"outlined-password-input",label:"Password",name:"password",type:"password",autoComplete:"current-password",variant:"outlined",value:u,onChange:function(e){return p(e)},minLength:"6"})),r.a.createElement("div",{className:"already"},r.a.createElement("div",{className:"al"},r.a.createElement("span",{className:"already-text"},"Not a member?"),r.a.createElement("span",null,r.a.createElement(l.b,{to:"signup",className:"link"},r.a.createElement("a",{href:"",className:"signin_text"},"Sign Up ")))),r.a.createElement("span",null,r.a.createElement("a",{href:"",className:"how"},"Forget Password?")),r.a.createElement("div",{className:"button_div"},r.a.createElement("button",{className:"button"},"Login"))))))))})),Ze=(a(403),Object(s.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e){var t=e.cnic,a=e.email,n=e.password;return(function(){var e=Object(N.a)(C.a.mark((function e(r){var o,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{headers:{"Content-Type":"application/json"}},o={cnic:t,email:a,password:n},e.prev=2,e.next=5,S.a.post("/api/users",o);case 5:i=e.sent,r({type:"REGISTER_SUCCESS",payload:i.data}),r(k()),r(_()),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.message),r({type:"REGISTER_FAIL"});case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}())}})((function(e){var t=e.register,a=e.isAuthenticated,o=Object(n.useState)({cnic:"",email:"",password:""}),i=Object(P.a)(o,2),s=i[0],m=i[1],d=s.cnic,u=s.email,p=s.password,g=function(e){return m(Object(h.a)({},s,Object(R.a)({},e.target.name,e.target.value)))};return a?r.a.createElement(c.a,{to:"/dashboard"}):r.a.createElement("form",{className:"sign_up_main_div",onSubmit:function(e){return function(e){e.preventDefault(),console.log(s),t({cnic:d,email:u,password:p})}(e)}},r.a.createElement(n.Fragment,null,r.a.createElement(Xe.a,null),r.a.createElement(D.a,{maxWidth:"sm"},r.a.createElement(L.a,{component:"div",style:{boxShadow:"grey 1px 5px 5px 2px",backgroundColor:"white",height:"auto"}},r.a.createElement("div",{className:"top_border"},r.a.createElement("span",{className:"text"}," Student Sign Up")),r.a.createElement("div",{className:"logo_text_div"},r.a.createElement("div",{className:"img_div"},r.a.createElement("img",{className:"img_Styling",src:Je.a,alt:""})),r.a.createElement("div",{className:"text_div"},r.a.createElement("span",{className:"text_span"},"Presidential Initiative for ",r.a.createElement("br",null),"  Artificial Intelligence and Computing."))),r.a.createElement("div",{className:"form_main_div"},r.a.createElement("div",{className:"cnic"},"CNIC"),r.a.createElement("div",{className:"verrify_text"},"Please provide your valid CNIC or B-Form number, we will verify it."),r.a.createElement("div",null,r.a.createElement("input",{className:"cnic_input",type:"text",id:"cname",name:"cnic",placeholder:"Enter CNIC",value:d,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"cnic"},"Email"),r.a.createElement("div",null,r.a.createElement("input",{className:"cnic_input",type:"text",id:"ename",name:"email",placeholder:"Enter email address",value:u,onChange:function(e){return g(e)}})),r.a.createElement("div",{className:"cnic"},"Password"),r.a.createElement("div",null,r.a.createElement(Be.a,{id:"outlined-password-input",label:"Password",name:"password",type:"password",autoComplete:"current-password",variant:"outlined",value:p,onChange:function(e){return g(e)},minLength:"6"})),r.a.createElement("div",{className:"already"},r.a.createElement("div",{className:"al"},r.a.createElement("span",{className:"already-text"},"Already a member?"),r.a.createElement("span",null,r.a.createElement(l.b,{to:"login",className:"link"},r.a.createElement("a",{href:"",className:"signin_text"},"Sign in ")))),r.a.createElement("span",null,r.a.createElement("a",{href:"",className:"how"},"How it Works?")),r.a.createElement("div",{className:"button_div"},r.a.createElement("button",{className:"button"},"Sign up"))))))))}))),Ke=a(185),Qe=a.n(Ke),$e=!1;function et(e,t){var a=new XMLHttpRequest;a.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(a.response)},a.open("GET",e),a.responseType="blob",a.send()}var tt=function(e){function t(){var e,a;Object(we.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(Se.a)(this,(e=Object(Te.a)(t)).call.apply(e,[this].concat(r)))).state={editorState:Ce.EditorState.createEmpty(),image:""},a.componentDidMount=function(){a.props.getPost(a.props.match.params.id)},a.componentWillUnmount=function(){$e=!1},a.componentWillUpdate=function(e,t){if(a.props.post.post.content){if($e)return!1;$e=!0;var n=Qe()(a.props.post.post.content);if(n){var r=Ce.ContentState.createFromBlockArray(n.contentBlocks),o=Ce.EditorState.createWithContent(r);a.setState({editorState:o})}}},a.changeFileHandle=function(e){e.target.files[0].size>52e3&&alert("File size is too big!"),et(URL.createObjectURL(e.target.files[0]),(function(e){console.log("RESULT:",e),a.setState({image:e})}))},a.onCategory=function(e){a.setState(Object(h.a)({},a.state,Object(R.a)({},e.target.name,e.target.value)))},a.onChange=function(e){a.setState({editorState:e,editorContentHtml:Object(Ne.a)(e.getCurrentContent())})},a.updatef=function(){var e=a.state.image;a.state.editorContentHtml,a.props.loggedInUserId;console.log("checking"),console.log(ye()(a.state.editorContentHtml).find("h1").prevObject);var t={title:ye()(a.state.editorContentHtml).find("h1").prevObject[0].innerText||"Untitled Article",content:Re()(Object(Ce.convertToRaw)(a.state.editorState.getCurrentContent())),image:e,_id:a.props.post.post._id};a.props.updatePost(t),$.b.success("Your Post Has benn Updated !")},a}return Object(je.a)(t,e),Object(Oe.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"textEditorDiv"},r.a.createElement("div",{style:{width:"1000px",height:"600px",overflow:"scroll",backgroundColor:"#C0C0C0",margin:"auto"}},r.a.createElement(_e.Editor,{style:{overflow:"scroll",border:"12px solid green"},id:"textEditorID",editorState:this.state.editorState,wrapperClassName:"demo-wrapper",editorClassName:"editer-content",onEditorStateChange:this.onChange,value:"Begin Typing here",toolbar:{image:{uploadEnabled:!0,previewImage:!0,urlEnabled:!0,uploadCallback:function(e){return new Promise((function(t,a){et(URL.createObjectURL(e),(function(a){e.size>65700&&alert("File size is too big!"),t({data:{link:a}})}))}))}}}})),r.a.createElement("div",{id:"editorPublishButton",style:{width:"fit-content",margin:"auto",marginTop:"1rem"}}," ",r.a.createElement(I.a,{onClick:this.updatef,variant:"contained",color:"secondary"},"PUBLISH"),r.a.createElement($.a,{autoClose:2e3})))}}]),t}(n.Component),at=Object(s.b)((function(e){return{loggedInUserId:e.auth.user._id,post:e.post}}),{getPost:M,updatePost:function(e){return function(){var t=Object(N.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.a.put("/api/posts/".concat(e._id),e);case 3:n=t.sent,a({type:"UPDATE_POST",payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"POSTS_ERR",payload:{msg:t.t0.message}});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})(tt);localStorage.token&&T(localStorage.token);var nt=function(){return Object(n.useEffect)((function(){w.dispatch(k())}),[]),r.a.createElement(s.a,{store:w},r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/login",component:Ye}),r.a.createElement(c.b,{exact:!0,path:"/signup",component:Ze}),r.a.createElement(d,{exact:!0,path:"/dashboard",component:ne}),r.a.createElement(c.b,{exact:!0,path:"/",component:xe}),r.a.createElement(d,{exact:!0,path:"/write",component:Fe}),r.a.createElement(c.b,{exact:!0,path:"/article/:id",component:Me}),r.a.createElement(c.b,{exact:!0,path:"/article/edit/:id",component:at})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(nt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAAEYBAMAAAD4zbPrAAAAG1BMVEXMzMwAAACysrKZmZl/f39MTEwZGRlmZmYzMzNO6yBrAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADoElEQVR4nO3Yy3PaVhTA4VtJIJaRMTJLeTKhXpqBcbdQ8lpaSepmiZwm3Zo2TbxETTL5t3Ofkq4cMp4MYvX7FvggdNHxuS8JIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgmK/O74YynmU/bpXVYdVqVh3duydFkiQv2qGIZZy+2N1KnpkuqjOTlzoM8uro3l0kf65mt8mNH4qw+Hs1vz3e3errap6PdXLyzNmT5FLFy/G/86tx1kmiTxf6wsd+KKYnOomdrX5Xn5Zb+TrRZ56N5EuUqiGQrztJNNOvYeqHQXG+q0GjVV/9T/lCx6VscDpUUW+0/yxrZeaFvZ2d3hSpvk9NPJV9n+tRI4psV4M92Jx74XR7r1aJrL2t3y/bKufl5X5z8+TnXpj/uOedwks0OrHhes/JNZV++M7/NF6Yv9GNf1wmWnX9jegNTTgYdpCgFY68MGjNh74dssu1f1x2fTWZMjF4YI7G9xrgP+fi2gujYxG+fvel3qUKnU2UZl6rQE2mSTXVXZe7IdCBR3UGOoyHUTF+XaRVphNdpOW13yxWGYVqhwhKOYFOt+Zw2NH69Pjjldv2XNg7yj/Jq2+qPtQlbRdU9I/U61n66rfyL1Enqgu9f4HcqT9nfjg40b0XJlVmqqTtgoqNWYcukkTX8PSy00TFbPasHGVeODBbt1hu3UmypHcKGpgDj5Kv/xUnmVnzu0xUfXV+7YV9u+Y0FprJ8Z2CDvTIiNN/ZO3LN91XVIlSL+zbeduYv0HRLqjIdWKm/0N5c9DxGLUXXTRDV8nm/N20F5143Dxluu581mvuIiZ0iTZqE6VmLa2ZATw4Mu/kbcwB1lFvf5Zh726iy+uJv+HYudUo4yF2plai7lL1VirTCvyS2rnVmOqH2Ov1XVodulFWd6JKyytpbOdWY6of5O5peumFhcnC1cj0s1fSzf82q609Y3Sg+9GFF27M/dzp2h4z/dwoac+NXtfPalHt9A7ffGmU+qG5JRLlQthj+rNGSUtXtdAOAXUH2Okz01t9nc3QD6NEpXTmLtm3m9JkbQ9M6hVo80Znp/K1T6HtHWw/8vH72fzKXKEOxTJ9P3ueuBv6IPP/iuLtH5p8H8tHfPlcr7Pr8rk++KB+87hphSK4qn7++J7EWsj4V/VLyWfTKq++oAMPH6++E4qHq/s94B3stycAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDD+QYfoYtjzyeT/AAAAABJRU5ErkJggg=="}},[[199,1,2]]]);
//# sourceMappingURL=main.7d78e21a.chunk.js.map