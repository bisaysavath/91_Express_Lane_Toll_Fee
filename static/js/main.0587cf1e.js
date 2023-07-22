(()=>{"use strict";var e={8832:(e,t,r)=>{r.r(t),r.d(t,{default:()=>W});var n=r(4942),l=r(885),a=r(9526),o=r(4333),i=r(1133),u=r(9233),s=r(8252),c=r(9876),d=r(477),f=r(2063),h=r(1019),y=function(e){switch(e){case 0:return"12:00 am";case 1:return"1:00 am";case 2:return"2:00 am";case 3:return"3:00 am";case 4:return"4:00 am";case 5:return"5:00 am";case 6:return"6:00 am";case 7:return"7:00 am";case 8:return"8:00 am";case 9:return"9:00 am";case 10:return"10:00 am";case 11:return"11:00 am";case 12:return"12:00 pm";case 13:return"1:00 pm";case 14:return"2:00 pm";case 15:return"3:00 pm";case 16:return"4:00 pm";case 17:return"5:00 pm";case 18:return"6:00 pm";case 19:return"7:00 pm";case 20:return"8:00 pm";case 21:return"9:00 pm";case 22:return"10:00 pm";case 23:return"11:00 pm";default:return"Unknown Time"}},p=function(e){return(Math.round(100*e)/100).toFixed(2)},b=r(7557);function m(e){var t=e.time,r=e.regPrice,n=e.hov3Price,l=e.isHoliday;return(0,b.jsxs)(i.default,{style:g.container,children:[(0,b.jsx)(u.default,{style:g.time,children:t}),(0,b.jsxs)(i.default,{style:g.tollGroup,children:[(0,b.jsx)(u.default,{style:g.label,children:"Reg.:"}),(0,b.jsx)(i.default,{style:l&&g.isHoliday,children:(0,b.jsxs)(u.default,{style:g.tollAmount,children:["$",p(r)]})})]}),(0,b.jsxs)(i.default,{style:g.tollGroup,children:[(0,b.jsx)(u.default,{style:g.label,children:"HOV3+:"}),(0,b.jsx)(i.default,{style:l&&g.isHoliday,children:(0,b.jsx)(u.default,{style:g.tollAmount,children:n>0?"$"+p(n):"FREE"})})]})]})}var g=o.default.create({container:{flex:.3},time:{fontSize:10},label:{fontSize:12},holidayRate:{fontStyle:"italic"},tollGroup:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},tollAmount:{fontSize:14,fontWeight:"bold",fontStyle:"italic"},isHoliday:{borderBottomColor:"orange",borderBottomWidth:1}}),j=r(4457),w=r(6735);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e){var t=e.title,r=e.currentDate,n=e.data,l=(0,h.default)(),s=600;l.width<768&&(s=.95*l.width);for(var c={},d=[],f=0;f<n.length;f++){var g=n[f],x=g.hour,O=g.price,T=g.hov3Price,D=g.isHoliday,C=y(x);0===f?c={time:C,price:O,hov3Price:T,isHoliday:D}:d.push((0,b.jsxs)(a.Fragment,{children:[(0,b.jsx)(m,{time:C,regPrice:O,hov3Price:T,isHoliday:D}),f<n.length-1&&(0,b.jsx)(i.default,{style:{borderLeftColor:"#737373",borderLeftWidth:o.default.hairlineWidth}})]},C))}return(0,b.jsxs)(i.default,{style:v(v({},S.card),{},{width:s}),children:[(0,b.jsx)(u.default,{style:S.title,children:t}),(0,b.jsxs)(i.default,{style:S.currentTollContainer,children:[(0,b.jsx)(u.default,{style:{alignSelf:"center",fontStyle:"italic"},children:r.toDateString()}),(0,b.jsx)(u.default,{style:S.time,children:c.time}),(0,b.jsxs)(i.default,{style:S.currentTollAmountGroup,children:[(0,b.jsxs)(i.default,{style:S.currentTollAmountContainer,children:[(0,b.jsx)(u.default,{children:"Regular Lane:"}),(0,b.jsxs)(u.default,{style:S.currentTollAmount,children:["$",p(c.price)]}),c.isHoliday&&(0,b.jsx)(u.default,{style:S.holidayRate,children:"*holiday rate"})]}),(0,b.jsxs)(i.default,{style:S.currentTollAmountContainer,children:[(0,b.jsxs)(u.default,{children:["HOV3+ Lane"," ",(0,b.jsx)(j.Popable,{content:(0,b.jsx)(i.default,{style:{padding:10,alignItems:"flex-start",justifyContent:"flex-start",color:"white"},children:(0,b.jsx)(u.default,{children:"Carpools of 3+ with active FastTrak transponder required"})}),position:"top",children:(0,b.jsx)(w.default,{name:"info-circle",color:"#000000",size:13})}),":"]}),(0,b.jsx)(u.default,{style:S.currentTollAmount,children:0===c.hov3Price?"FREE":"$"+p(c.hov3Price)}),c.isHoliday&&(0,b.jsx)(u.default,{style:S.holidayRate,children:"*holiday rate"})]})]}),(0,b.jsx)(u.default,{children:c.isHoliday})]}),(0,b.jsx)(i.default,{style:S.futureAmount,children:d})]})}var S=o.default.create({card:{marginVertical:10,marginHorizontal:20,backgroundColor:"white",elevation:10,boxShadow:"5px 10px 20px 0px rgba(46, 61, 73, 0.35)",borderRadius:20,shadowColor:"black",shadowRadius:10,shadowOffset:{width:5,height:10},shadowOpacity:.35,paddingVertical:10,paddingHorizontal:10},currentTollContainer:{marginVertical:20},currentTollAmount:{fontSize:40,fontWeight:"bold",fontStyle:"italic"},currentTollAmountGroup:{flexDirection:"row",justifyContent:"space-between"},currentTollAmountContainer:{flex:1,alignItems:"center"},time:{alignSelf:"center",fontSize:30,fontWeight:"bold",marginBottom:30},futureAmount:{flexDirection:"row",justifyContent:"space-evenly"},holidayRate:{fontStyle:"italic",backgroundColor:"orange"},title:{fontSize:15,fontWeight:"bold",alignSelf:"center"}}),T=r(6236);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e){return(0,b.jsxs)(T.default,C(C({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:26,height:60,overflow:"visible",viewBox:"0 0 385 401"},e),{},{children:[(0,b.jsxs)(T.G,{clipRule:"evenodd",children:[(0,b.jsx)(T.Path,{fill:"#FFF",fillRule:"evenodd",d:"M.5 262.02C.5 139.257 81.231 35.353 192.5.5c111.269 34.853 192 138.757 192 261.52v63.641c0 29.994-21.304 55.015-49.602 60.76l-.189.039-.187.037-.187.037C288.411 395.702 241.018 400.5 192.5 400.5c-48.519 0-95.911-4.798-141.835-13.966l-.187-.037-.187-.037-.19-.038C21.804 380.676.5 355.655.5 325.662V262.02z"}),(0,b.jsx)(T.Path,{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:3.864,d:"M.5 262.02C.5 139.257 81.231 35.353 192.5.5c111.269 34.853 192 138.757 192 261.52v63.641c0 29.994-21.304 55.015-49.602 60.76l-.189.039-.187.037-.187.037C288.411 395.702 241.018 400.5 192.5 400.5c-48.519 0-95.911-4.798-141.835-13.966l-.187-.037-.187-.037-.19-.038C21.804 380.676.5 355.655.5 325.662V262.02z"})]}),(0,b.jsx)(T.Path,{fill:"#006B54",fillRule:"evenodd",d:"M192.5 13.104c104.55 34.419 180 132.87 180 248.916v63.641c0 24.173-17.166 44.366-39.982 49-45.164 9.015-92.303 13.839-140.018 13.839s-94.33-4.719-139.491-13.734C30.19 370.132 12.5 349.834 12.5 325.66V262.02c0-116.046 75.45-214.497 180-248.916z",clipRule:"evenodd"}),(0,b.jsx)(T.Path,{fill:"#FFF",fillRule:"evenodd",d:"M80.844 145.72a11.176 11.176 0 0 1-.887 3.466 13.638 13.638 0 0 1-1.826 3.05 13.559 13.559 0 0 1-2.599 2.492 14.582 14.582 0 0 1-3.204 1.792c-1.881.76-3.714 1.086-5.498.979a11.8 11.8 0 0 1-5.044-1.469c-1.578-.87-3.017-2.113-4.315-3.727-1.3-1.614-2.398-3.532-3.296-5.755-.91-2.252-1.455-4.402-1.636-6.45s-.004-3.928.533-5.636 1.411-3.214 2.625-4.517c1.215-1.303 2.762-2.335 4.644-3.095 2.308-.933 4.675-1.25 7.098-.954 2.425.298 4.602 1.233 6.53 2.808l-3.547 4.268c-.64-.437-1.153-.744-1.54-.92a5.855 5.855 0 0 0-1.332-.406c-.755-.226-1.607-.304-2.557-.235s-1.81.259-2.58.57c-1.31.53-2.29 1.265-2.937 2.206s-1.058 1.977-1.231 3.108-.146 2.305.08 3.523a18.21 18.21 0 0 0 1.014 3.495c1.267 3.135 2.861 5.317 4.784 6.546 1.922 1.23 3.966 1.406 6.132.531a8.124 8.124 0 0 0 1.697-.909 6.9 6.9 0 0 0 1.297-1.22 8.376 8.376 0 0 0 1.068-1.725c.324-.678.66-1.485 1.011-2.423l5.516.606zM111.655 142.417l-5.04-6.077-12.876 3.936-.736 7.844-5.82 1.779 3.401-33.345 5.38-1.645 21.379 25.769-5.688 1.739zm-16.13-19.322-1.097 11.233 8.29-2.535-7.193-8.698zM122.64 140.019l-5.894-30.326 5.43-1.056 4.99 25.664 17.244-3.352.906 4.662zM152.297 103.834l3.764 30.663-5.492.674-3.764-30.663zM167.857 107.96l.438 6.257 9.613-.673.393 5.612-9.613.672.938 13.431-5.611.393-2.156-30.818 23.045-1.612.386 5.52zM217.816 117.521c-.085 2.427-.462 4.621-1.13 6.582-.667 1.96-1.58 3.628-2.735 5.002s-2.537 2.426-4.146 3.155c-1.61.728-3.399 1.057-5.365.989-2.273-.08-4.215-.617-5.826-1.61-1.61-.995-2.926-2.272-3.949-3.83s-1.753-3.306-2.193-5.244a22.591 22.591 0 0 1-.558-5.81c.085-2.457.462-4.659 1.13-6.604.667-1.945 1.594-3.589 2.778-4.932a11.438 11.438 0 0 1 4.237-3.035c1.638-.682 3.47-.987 5.499-.916 1.904.067 3.627.511 5.167 1.334a12.12 12.12 0 0 1 3.942 3.367c1.088 1.423 1.905 3.12 2.452 5.092.546 1.972.778 4.126.697 6.46zm-5.535-.054c.115-3.257-.427-5.829-1.622-7.716s-2.96-2.872-5.295-2.953-4.194.776-5.58 2.574c-1.386 1.796-2.135 4.323-2.249 7.58-.115 3.318.455 5.921 1.711 7.81 1.258 1.89 3.053 2.875 5.388 2.957 1.474.052 2.691-.229 3.651-.842a6.91 6.91 0 0 0 2.299-2.41c.572-.996.988-2.112 1.247-3.348.259-1.237.41-2.454.45-3.652zM243.01 136.45l-3.242-12.702-8.174-1.148-1.688 12.008-5.48-.77 4.3-30.592 14.064 1.976c1.126.158 2.072.384 2.838.678s1.51.74 2.233 1.338a9 9 0 0 1 3.002 3.822c.65 1.55.855 3.193.612 4.928-.245 1.735-.9 3.25-1.966 4.543-1.068 1.293-2.451 2.255-4.155 2.885l3.775 13.894-6.118-.86zm2.984-21.232c.168-1.188-.096-2.187-.789-2.998-.692-.811-1.725-1.313-3.094-1.506l-8.675-1.22-1.073 7.626 8.676 1.22c1.37.192 2.5.001 3.387-.572s1.41-1.424 1.568-2.55zM274.827 143.273l-9.13-24.183-5.142 20.625-5.28-1.317 7.475-29.975 5.28 1.316 8.804 23.2 4.93-19.775 5.19 1.294-7.474 29.976zM301.947 119.047l-9.547 29.38-5.262-1.709 9.547-29.38zM321.208 159.229l-.093-7.895-12.483-5.043-5.508 5.632-5.644-2.28 23.63-23.773 5.215 2.107.398 33.48-5.515-2.228zm-.375-25.166-7.923 8.039 8.037 3.247-.114-11.286z",clipRule:"evenodd"}),(0,b.jsx)(T.G,{fill:"#FFF",fillRule:"evenodd",clipRule:"evenodd",children:(0,b.jsx)(T.Path,{d:"M210.514 225.838c0 10.605-1.422 21.172-4.266 31.7a141.036 141.036 0 0 1-12.103 30.317 142.002 142.002 0 0 1-18.905 26.974c-7.378 8.3-15.524 15.524-24.438 21.671l-11.758-20.749c4.611-3.689 8.723-7.263 12.334-10.72 3.612-3.459 6.878-7.032 9.799-10.72 2.92-3.69 5.61-7.609 8.069-11.758 2.46-4.15 4.84-8.762 7.147-13.833-4.457.768-7.877 1.305-10.26 1.614-2.382.307-5.11.46-8.184.46-7.224 0-14.025-1.23-20.404-3.689s-11.95-5.801-16.714-10.029c-4.765-4.226-8.53-9.22-11.297-14.984s-4.15-11.874-4.15-18.33c0-6.608 1.384-12.795 4.15-18.559 2.767-5.763 6.494-10.758 11.181-14.985 4.688-4.227 10.222-7.57 16.6-10.029 6.378-2.459 13.256-3.689 20.634-3.689 7.377 0 14.294 1.269 20.75 3.805 6.454 2.535 12.026 5.994 16.714 10.374 4.688 4.38 8.376 9.568 11.066 15.562 2.69 5.994 4.035 12.527 4.035 19.597zm-24.438-2.075c0-2.921-.769-5.764-2.305-8.53-1.538-2.767-3.574-5.149-6.11-7.147-2.536-1.998-5.495-3.612-8.876-4.842s-6.993-1.845-10.836-1.845-7.416.578-10.72 1.73-6.225 2.728-8.761 4.726-4.534 4.38-5.994 7.147c-1.46 2.767-2.19 5.686-2.19 8.76s.73 5.957 2.19 8.646c1.46 2.69 3.458 5.033 5.994 7.031s5.456 3.575 8.76 4.727 6.878 1.73 10.721 1.73 7.492-.578 10.95-1.73 6.456-2.728 8.993-4.727c2.535-1.998 4.533-4.341 5.994-7.03a17.845 17.845 0 0 0 2.19-8.646zM254.717 333.734V208.547h-14.064V188.95h1.615c3.227 0 6.455-.846 9.682-2.536 3.228-1.69 5.917-4.073 8.07-7.147h19.596v154.467h-24.9z"})})]}))}const z=JSON.parse("[[1.85,1.85,1.85,1.85,1.85,1.85,1.85],[1.85,1.85,1.85,1.85,1.85,1.85,1.85],[1.85,1.85,1.85,1.85,1.85,1.85,1.85],[1.85,1.85,1.85,1.85,1.85,1.85,1.85],[1.85,3.35,3.35,3.35,3.35,3.35,1.85],[1.85,5.4,5.4,5.4,5.4,5.15,1.85],[1.85,5.6,5.6,5.6,5.6,5.4,1.85],[1.85,6.15,6.15,6.15,6.15,5.95,2.3],[2.3,5.6,5.6,5.6,5.6,5.4,2.8],[2.3,4.5,4.5,4.5,4.5,4.5,3.5],[3.5,2.8,2.8,2.8,2.8,2.8,3.5],[3.5,2.8,2.8,2.8,2.8,2.8,3.9],[3.5,2.8,2.8,2.8,2.8,2.8,3.9],[3.9,2.8,2.8,2.8,2.8,2.8,3.9],[3.9,2.8,2.8,2.8,2.8,2.8,3.9],[3.9,2.8,2.8,2.8,2.8,3.5,3.9],[4.05,2.8,2.8,2.8,2.8,3.5,4.05],[4.05,2.8,2.8,2.8,2.8,3.5,4.05],[4.05,2.8,2.8,2.8,2.8,4,3.5],[3.5,1.85,1.85,1.85,1.85,2.8,2.8],[3.5,1.85,1.85,1.85,1.85,1.85,1.85],[3.5,1.85,1.85,1.85,1.85,1.85,1.85],[1.85,1.85,1.85,1.85,1.85,1.85,1.85],[1.85,1.85,1.85,1.85,1.85,1.85,1.85]]"),M=JSON.parse("[[1.85,1.85,1.85,1.85,1.85,1.85,1.85],[1.85,1.85,1.85,1.85,1.85,1.85,1.85],[1.85,1.85,1.85,1.85,1.85,1.85,1.85],[1.85,1.85,1.85,1.85,1.85,1.85,1.85],[1.85,1.85,1.85,1.85,1.85,1.85,1.85],[1.85,1.85,1.85,1.85,1.85,1.85,1.85],[1.85,2.8,2.8,2.8,2.8,2.8,1.85],[1.85,2.8,2.8,2.8,2.8,2.8,1.85],[2.2,2.8,2.8,2.8,2.8,2.8,2.8],[2.2,2.8,2.8,2.8,2.8,2.8,2.8],[3.5,2.8,2.8,2.8,2.8,2.8,3.5],[3.5,2.8,2.8,2.8,2.8,2.8,3.5],[4,2.8,2.8,2.8,2.8,4.15,4],[4,3.85,3.85,3.85,4.15,6.6,4],[4,5.6,5.6,5.6,8.2,8.85,4],[3.5,5.95,5.9,7.9,7.9,8.4,4],[3.5,5.25,4.75,6.9,7.4,6.45,4],[3.5,5.1,5.05,5.7,7.1,7.15,4],[3.5,5.95,4.25,4.25,4.15,7.15,3.5],[3.5,4.15,4.15,4.15,6.1,6.65,2.8],[3.5,2.8,2.8,2.8,3.85,6.1,2.8],[2.8,2.8,2.8,2.8,2.8,3.85,2.8],[1.85,1.85,1.85,1.85,1.85,2.8,1.85],[1.85,1.85,1.85,1.85,1.85,1.85,1.85]]"),Z=JSON.parse('[{"name":"4th of July","date":"2023-07-04T07:00:00.000Z","westbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,2.8,4.7,5.4,5.4,5.4,5.4,5.4,5.4,4.7,4.7,3.9,3.9,3.9,3.9,3.9,1.85],"eastbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,2.8,2.8,4.7,4.7,4.7,4.7,4.7,4.7,4.7,4.7,4.7,4.7,4.7,4.7,6.15,6.15]},{"name":"Thurs Before Labor Day","date":"8/31/2023","westbound":[1.85,1.85,1.85,1.85,3.35,5.4,5.6,6.15,6.15,6.15,6.15,5.4,3.5,3.85,3.85,3.85,3.85,3.85,3.5,1.85,1.85,1.85,1.85,1.85],"eastbound":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},{"name":"Fri Before Labor Day","date":"9/1/2023","westbound":[1.85,1.85,1.85,1.85,3.35,5.4,5.6,5.95,5.75,5,4.15,3.85,3.5,3.85,3.85,4.15,4.15,4.15,4,2.8,1.85,1.85,1.85,1.85],"eastbound":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},{"name":"Labor Day","date":"2023-09-04T07:00:00.000Z","westbound":[1.85,1.85,1.85,1.85,1.85,1.85,2.8,2.8,2.8,4,5.15,5.15,6.1,6.1,6.1,4.7,4,2.8,2.8,2.8,2.8,2.8,1.85,1.85],"eastbound":[1.85,1.85,1.85,1.85,1.85,1.85,2.8,2.8,2.8,2.8,2.8,2.8,4.55,4.9,4.9,4.9,4.9,4.9,4.9,4.9,4.55,2.8,1.85,1.85]},{"name":"Wed Before Thanksgiving","date":"11/22/2023","westbound":[1.85,1.85,1.85,1.85,3.35,5.6,5.75,6.3,6.3,5.75,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,3.35,1.85,1.85,1.85,1.85],"eastbound":[1.85,1.85,1.85,1.85,1.85,1.85,2.8,2.8,2.8,3.35,5.4,5.6,6.3,6.6,8.15,9.25,9.25,9.25,6.6,6.3,6.3,5.6,2.8,1.85]},{"name":"Thanksgiving","date":"2023-11-23T08:00:00.000Z","westbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,2.8,5.4,5.75,6.3,6.3,6.3,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,2.8],"eastbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,2.8,3.35,5.4,5.75,6.3,6.3,6.3,5.75,5.4,5.4,5.4,5.75,5.75,5.75,5.75,5.4,2.8]},{"name":"Friday After Thanksgiving","date":"11/24/2023","westbound":[1.85,1.85,1.85,1.85,1.85,1.85,2.8,3.35,3.35,4.15,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,3.35,1.85,1.85,1.85,1.85],"eastbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,3.35,5.4,5.4,5.4,5.75,5.4,5.4,5.4,5.4,5.4,5.4,5.4,3.35,2.8,2.8,1.85]},{"name":"Christmas Day","date":"2023-12-25T08:00:00.000Z","westbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,3.35,3.5,5.1,5.6,5.6,5.6,5.6,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.1],"eastbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,2.8,3.35,5.4,5.6,6.6,6.6,6.6,6.6,6.6,6.6,6.6,6.6,6.6,5.6,2.8,1.85]},{"name":"New Years Day","date":"2024-01-01T08:00:00.000Z","westbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,3.35,3.35,5.1,5.6,5.6,5.6,5.6,5.6,5.6,5.6,5.1,5.1,3.35,3.35,1.85],"eastbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,2.8,3.35,3.35,5.1,5.1,5.1,5.6,5.6,5.6,5.6,5.6,5.1,5.1,3.35,3.35,1.85]},{"name":"Easter Sunday","date":"4/9/2023","westbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,2.3,2.3,3.5,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,1.85],"eastbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,2.3,2.3,3.5,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,2.8,1.85,1.85]},{"name":"Mother\'s Day","date":"2023-05-14T07:00:00.000Z","westbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,2.8,5.4,5.95,6.35,6.35,6.35,5.95,5.95,5.95,5.95,5.95,5.95,5.4,5.4,4.7,1.85],"eastbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,2.8,2.8,4.7,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,5.4,4.7,1.85,1.85]},{"name":"Memorial Day","date":"2023-05-22T07:00:00.000Z","westbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,2.8,3.9,3.9,5.4,5.4,5.4,5.4,5.4,3.9,3.9,3.9,3.9,3.9,3.9,1.85,1.85],"eastbound":[1.85,1.85,1.85,1.85,1.85,1.85,1.85,1.85,2.8,2.8,3.9,4.7,4.7,4.7,4.7,4.7,4.7,4.7,4.7,4.7,3.9,3.9,1.85,1.85]}]'),H=JSON.parse("[[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,3.35,3.35,3.35,3.35,3.35,2.2],[2.2,10,10,10,10,7.75,2.2],[2.2,12.3,12.7,12.7,13.05,7.75,2.2],[2.2,10,11.15,11.15,10,7.75,3.35],[2.2,7.75,10,10,7.75,6,3.35],[3.35,6,7.75,6,6,6,3.35],[3.35,3.35,3.35,3.35,3.35,3.35,6],[6,3.35,3.35,3.35,3.35,3.35,6],[6,3.35,3.35,3.35,3.35,3.35,6],[6,3.35,3.35,3.35,3.35,3.35,6],[6,3.35,3.35,3.35,3.35,3.35,6],[3.35,3.35,3.35,3.35,3.35,3.35,6],[3.35,3.35,3.35,3.35,3.35,3.35,6],[3.35,2.2,3.35,3.35,3.35,3.35,3.35],[3.35,2.2,2.2,2.2,2.2,3.35,3.35],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2]]"),k=JSON.parse("[[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,2.2],[2.2,2.2,2.2,2.2,2.2,2.2,3.35],[2.2,2.2,2.2,2.2,2.2,2.2,3.35],[3.35,2.2,2.2,2.2,2.2,3.35,3.35],[3.35,3.35,3.35,3.35,3.35,3.35,3.35],[3.35,3.35,3.35,3.35,3.35,6,3.35],[3.35,6,6,6,6,6,3.35],[3.35,6,6,6,6,6,3.35],[3.35,3.35,6,6,3.35,3.35,3.35],[3.35,3.35,3.35,3.35,3.35,3.35,3.35],[3.35,3.35,3.35,3.35,3.35,3.35,3.35],[3.35,3.35,3.35,3.35,3.35,3.35,3.35],[3.35,2.2,3.35,3.35,3.35,3.35,3.35],[2.2,2.2,2.2,2.2,2.2,3.35,3.35],[2.2,2.2,2.2,2.2,2.2,2.2,3.35],[2.2,2.2,2.2,2.2,2.2,2.2,2.2]]"),R=JSON.parse("[[1.75,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,2.55,2.55,2.55,2.55,2.55,1.75],[1.75,11.65,15.05,15.05,13.5,7.8,1.75],[1.75,20.65,21.8,21.8,20.65,13.15,1.75],[1.75,18.1,20.45,20.45,19.35,8.85,2.55],[1.75,10.35,11.9,12.25,11.1,6,2.55],[2.55,6,7.8,7.8,7.8,4.75,2.55],[4.75,4.75,4.75,4.75,4.75,4.75,6],[4.75,2.55,2.55,2.55,2.55,2.55,7.8],[7.8,2.55,2.55,2.55,2.55,2.55,7.8],[7.8,2.55,2.55,2.55,2.55,2.55,7.8],[4.75,2.55,2.55,2.55,2.55,4.75,7.8],[4.75,2.55,2.55,2.55,2.55,4.75,7.8],[4.75,2.55,2.55,2.55,2.55,6,7.8],[4.75,2.55,2.55,2.55,2.55,6,7.8],[2.55,2.55,2.55,2.55,2.55,4.75,4.75],[2.55,1.75,1.75,1.75,1.75,2.55,2.55],[2.55,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,1.75,1.75,1.75,1.75,1.75,1.75]]"),F=JSON.parse("[[1.75,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,1.75,1.75,1.75,1.75,1.75,1.75],[1.75,1.75,2.55,1.75,2.55,1.75,1.75],[1.75,2.55,2.55,2.55,2.55,2.55,1.75],[1.75,2.55,2.55,2.55,2.55,2.55,2.55],[1.75,2.55,2.55,2.55,2.55,2.55,2.55],[2.55,2.55,2.55,2.55,2.55,4.75,4.75],[2.55,2.55,2.55,2.55,2.55,6,4.75],[2.55,2.55,2.55,2.55,4.75,9.3,6],[2.55,4.75,4.75,6,7.8,23,6],[4.75,6,7.8,11.3,16.2,27.9,7.8],[4.75,7.8,10.1,14.25,18.4,27.6,9.3],[4.75,6,7.8,7.8,10.05,18.4,7.8],[4.75,6,6,6,7.8,8.95,7.8],[4.75,6,6,6,6,6,6],[2.55,2.55,4.75,4.75,6,6,4.75],[2.55,2.55,2.55,2.55,2.55,4.75,4.75],[2.55,1.75,2.55,1.75,2.55,2.55,4.75],[1.75,1.75,1.75,1.75,1.75,2.55,2.55],[1.75,1.75,1.75,1.75,1.75,1.75,2.55]]"),L=JSON.parse('[{"name":"4th of July","date":"2023-07-04T07:00:00.000Z","westbound":[1.75,1.75,1.75,1.75,1.75,1.75,1.75,1.75,1.75,2.55,2.55,4.75,4.75,4.75,4.75,4.75,2.55,2.55,1.75,1.75,1.75,1.75,1.75,1.75],"eastbound":[1.75,1.75,1.75,1.75,1.75,1.75,1.75,1.75,1.75,1.75,1.75,1.75,2.55,2.55,2.55,2.55,1.75,1.75,1.75,1.75,1.75,2.55,6,6]}]'),A=JSON.parse('[{"name":"4th of July","date":"2023-07-04T07:00:00.000Z","westbound":[2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,3.35,3.35,3.35,3.35,3.35,3.35,3.35,2.2,2.2,2.2,2.2,2.2,2.2,2.2],"eastbound":[2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,2.2,3.35,3.35]}]'),E=JSON.parse('["2023-07-30T19:00:00.000Z","2023-08-20T19:00:00.000Z","2023-09-10T19:00:00.000Z","2023-10-01T19:00:00.000Z","2023-10-22T19:00:00.000Z","2023-11-19T19:00:00.000Z","2023-12-10T19:00:00.000Z","2024-01-07T19:00:00.000Z","2024-01-28T19:00:00.000Z","2024-02-25T19:00:00.000Z","2024-03-19T19:00:00.000Z","2024-04-07T19:00:00.000Z","2024-04-28T19:00:00.000Z","2024-05-19T19:00:00.000Z","2024-06-19T19:00:00.000Z","2024-06-30T19:00:00.000Z","2024-07-21T19:00:00.000Z"]');function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=f.default.statusBarHeight,I=function(e,t){return e.find((function(e){return new Date(e.date).toLocaleDateString()===t.toLocaleDateString()}))},N=function(e,t,r){for(var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=[],a=0;a<4;a++){var o=new Date(r.toISOString());o.setHours(o.getHours()+a);var i=o.getDay(),u=o.getHours(),s=I(t,o),c=0,d=!1;if(s)d=!0,c=(n?s.eastbound:s.westbound)[u];else c=e[u][i];var f=0;n&&i>0&&i<7&&u>15&&u<19&&(f=c-.5*c),l.push({day:i,hour:u,price:c,hov3Price:f,isHoliday:d})}return l};function W(){var e=(0,a.useState)(new Date),t=(0,l.default)(e,2),r=t[0],n=t[1],o=(0,a.useState)(!1),f=(0,l.default)(o,2),h=f[0],y=f[1],p=E.find((function(e){var t=new Date(e).getTime()-r.getTime();return t>=0&&t<=5616e5})),m=new Date(r.toISOString());m.setHours(m.getHours()+1);var g=new Date(r.toISOString());g.setHours(g.getHours()+2);var j=new Date(r.toISOString());j.setHours(j.getHours()+3);var w=[{title:"SR-55 \u2b05\ufe0f County Line",currentDate:r,data:N(z,Z,r)},{title:"SR-55 \u27a1\ufe0f County Line",currentDate:r,data:N(M,Z,r,!0)},{title:"County Line \u2b05\ufe0f McKinley St",currentDate:r,data:N(R,L,r)},{title:"County Line \u27a1\ufe0f McKinley St",currentDate:r,data:N(F,L,r,!0)},{title:"County Line \u2b05\ufe0f I-15",currentDate:r,data:N(H,A,r)},{title:"County Line \u27a1\ufe0f I-15",currentDate:r,data:N(k,A,r,!0)}];return(0,b.jsxs)(d.default,{style:_.safeAreaViewContainer,children:[p&&(0,b.jsx)(i.default,{style:_.stickyBanner,children:(0,b.jsx)(u.default,{style:_.bannerText,children:"Scheduled Maintenance This Sunday 6 AM - 12 PM"})}),(0,b.jsxs)(c.default,{horizontal:!1,style:B(B({},_.scrollViewContainer),{},{marginTop:p?10:0}),refreshControl:(0,b.jsx)(s.default,{refreshing:h,onRefresh:function(){y(!0),setTimeout((function(){n(new Date),y(!1)}),1200)}}),children:[(0,b.jsxs)(i.default,{style:_.headerContainer,children:[(0,b.jsx)(P,{}),(0,b.jsx)(u.default,{style:_.headerText,children:"Express Lanes Toll Fee"})]}),(0,b.jsx)(i.default,{style:_.cardContainer,children:w.map((function(e){return(0,b.jsx)(O,{title:e.title,currentDate:e.currentDate,data:e.data},e.title)}))})]})]})}var _=o.default.create({safeAreaViewContainer:{flex:1,marginTop:J},stickyBanner:{alignItems:"center",justifyContent:"center",width:"100%",height:25,marginBottom:5,position:"fixed",backgroundColor:"#dd062d",zIndex:5},bannerText:{fontWeight:"bold",color:"white"},scrollViewContainer:{paddingBottom:15},cardContainer:{justifyContent:"space-evenly",flexDirection:"row",flexWrap:"wrap"},headerContainer:{flexDirection:"row",justifyContent:"center",alignItems:"center",gap:5},headerText:{fontSize:20,fontWeight:"bold"}})}},t={};function r(n){var l=t[n];if(void 0!==l)return l.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,l,a)=>{if(!n){var o=1/0;for(c=0;c<e.length;c++){for(var[n,l,a]=e[c],i=!0,u=0;u<n.length;u++)(!1&a||o>=a)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(i=!1,a<o&&(o=a));if(i){e.splice(c--,1);var s=l();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,l,a]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/91_Express_Lane_Toll_Fee/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var l,a,[o,i,u]=n,s=0;if(o.some((t=>0!==e[t]))){for(l in i)r.o(i,l)&&(r.m[l]=i[l]);if(u)var c=u(r)}for(t&&t(n);s<o.length;s++)a=o[s],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[481],(()=>r(9484)));n=r.O(n)})();
//# sourceMappingURL=main.0587cf1e.js.map