(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1191:function(module,exports,__webpack_require__){"use strict";__webpack_require__(6),__webpack_require__(63),__webpack_require__(44),__webpack_require__(39),__webpack_require__(51),__webpack_require__(1192),__webpack_require__(1193),__webpack_require__(12),__webpack_require__(50);var _clientApi=__webpack_require__(67),_clientLogger=__webpack_require__(43),_configFilename=__webpack_require__(1194);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1194:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on.*"}}},1195:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(425).configure)([__webpack_require__(1196)],module,!1)}).call(this,__webpack_require__(134)(module))},1196:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":1433};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1196},1228:function(module,exports){},1233:function(module,exports){},1248:function(module,exports){},1249:function(module,exports){},1433:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Example",(function(){return Example}));__webpack_require__(44),__webpack_require__(18),__webpack_require__(25),__webpack_require__(14),__webpack_require__(26),__webpack_require__(215),__webpack_require__(7),__webpack_require__(13),__webpack_require__(21),__webpack_require__(238);var jsx_runtime=__webpack_require__(29),makeStyles=__webpack_require__(1482),react=__webpack_require__(0),AppBar=__webpack_require__(1466),Toolbar=__webpack_require__(1469),Typography=__webpack_require__(1470),IconButton=__webpack_require__(1471),Badge=__webpack_require__(1472),Menu=__webpack_require__(1483),MenuItem=__webpack_require__(1484),Grid=__webpack_require__(1480),Divider=__webpack_require__(1481),Group=__webpack_require__(1473),SignalCellularConnectedNoInternet0Bar=__webpack_require__(1474),SignalCellular0Bar=__webpack_require__(1475),SignalCellular1Bar=__webpack_require__(1476),SignalCellular2Bar=__webpack_require__(1477),SignalCellular3Bar=__webpack_require__(1478),SignalCellular4Bar=__webpack_require__(1479),src=(__webpack_require__(124),__webpack_require__(583)),src_default=__webpack_require__.n(src);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Context=Object(react.createContext)({ipfs:null}),src_IpfsProvider=function IpfsProvider(_ref){var children=_ref.children,opts=_ref.opts,livelinessProbe=_ref.livelinessProbe,probeInterval=_ref.probeInterval,ipfsPromise=function useIpfsPromise(args){var _useState2=_slicedToArray(Object(react.useState)(Promise.resolve(null)),2),ipfsPromise=_useState2[0],setIpfsPromise=_useState2[1];return Object(react.useEffect)((function(){var ipfs=src_default()(args);return setIpfsPromise(Promise.resolve(ipfs)),function(){return setIpfsPromise(Promise.resolve(null))}}),[args]),ipfsPromise}(opts),_useState4=_slicedToArray(Object(react.useState)(null),2),ipfs=_useState4[0],setIpfs=_useState4[1],_useState6=_slicedToArray(Object(react.useState)(),2),error=_useState6[0],setError=_useState6[1];return Object(react.useEffect)((function(){ipfsPromise.then((function(ipfs){if(ipfs)return ipfs.id().then((function(){setIpfs(ipfs),setError(void 0)}));setIpfs(null),setError(void 0)})).catch((function(e){setIpfs(null),setError(e)}))}),[ipfsPromise]),Object(react.useEffect)((function(){var jobs=[];return livelinessProbe&&jobs.push(setInterval((function(){return null==ipfs?void 0:ipfs.id().then((function(){error&&setError(void 0)})).catch((function(e){setError(e)}))}),probeInterval||5e3)),function(){return jobs.forEach((function(job){return clearInterval(job)}))}}),[ipfs,error]),Object(jsx_runtime.jsx)(Context.Provider,{value:{ipfs:ipfs,error:error},children:children})};src_IpfsProvider.displayName="IpfsProvider";var src_useIpfs=function useIpfs(){return Object(react.useContext)(Context)};try{src_IpfsProvider.displayName="IpfsProvider",src_IpfsProvider.__docgenInfo={description:"",displayName:"IpfsProvider",props:{livelinessProbe:{defaultValue:null,description:"",name:"livelinessProbe",required:!1,type:{name:"boolean"}},probeInterval:{defaultValue:null,description:"",name:"probeInterval",required:!1,type:{name:"number"}},opts:{defaultValue:null,description:"",name:"opts",required:!0,type:{name:"ClientOptions | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#IpfsProvider"]={docgenInfo:src_IpfsProvider.__docgenInfo,name:"IpfsProvider",path:"src/index.tsx#IpfsProvider"})}catch(__react_docgen_typescript_loader_error){}function index_stories_slicedToArray(arr,i){return function index_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function index_stories_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function index_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return index_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return index_stories_arrayLikeToArray(o,minLen)}(arr,i)||function index_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function index_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var randStr=function randStr(){return Math.random().toString(36).substr(2,5)},Id=Object(react.createContext)(""),Peers=Object(react.createContext)([]),PeerNum=Object(react.createContext)(0),index_stories_Wrapper=function Wrapper(_ref){var children=_ref.children,_useIpfs=src_useIpfs(),ipfs=_useIpfs.ipfs,error=_useIpfs.error,_useState2=index_stories_slicedToArray(Object(react.useState)(""),2),id=_useState2[0],setId=_useState2[1],_useState4=index_stories_slicedToArray(Object(react.useState)([]),2),peers=_useState4[0],setPeers=_useState4[1],_useState6=index_stories_slicedToArray(Object(react.useState)(0),2),peerNum=_useState6[0],setPeerNum=_useState6[1];return Object(react.useEffect)((function(){var jobs=[];return ipfs&&ipfs.id&&ipfs.id().then((function(_ref2){var id=_ref2.id;return setId(id)})),ipfs&&ipfs.swarm&&ipfs.swarm.peers&&jobs.push(setInterval((function(){ipfs.swarm.peers().then((function(prs){return setPeers(prs)}))}),1e3)),ipfs||function reset(){setId(""),setPeers([])}(),function(){return jobs.forEach((function(job){return clearInterval(job)}))}}),[ipfs]),Object(react.useEffect)((function(){var newPeerNum=peers.length;newPeerNum!==peerNum&&setPeerNum(newPeerNum)}),[peers,peerNum]),Object(jsx_runtime.jsx)(Id.Provider,{value:id,children:Object(jsx_runtime.jsx)(Peers.Provider,{value:peers,children:Object(jsx_runtime.jsx)(PeerNum.Provider,{value:peerNum,children:error?JSON.stringify(error.stack):children})})})};index_stories_Wrapper.displayName="Wrapper";var index_stories_NavBar=function NavBar(){var ipfs=src_useIpfs().ipfs,_useState8=index_stories_slicedToArray(Object(react.useState)(null),2),menuAnchor=_useState8[0],setMenuAnchor=_useState8[1],_useState10=index_stories_slicedToArray(Object(react.useState)(null),2),peersAnchor=_useState10[0],setPeersAnchor=_useState10[1],menuId=index_stories_slicedToArray(Object(react.useState)(randStr()),1)[0],peersId=index_stories_slicedToArray(Object(react.useState)(randStr()),1)[0],showNum=index_stories_slicedToArray(Object(react.useState)(10),1)[0],peerNum=Object(react.useContext)(PeerNum),peers=Object(react.useContext)(Peers),closeMenu=function closeMenu(){setMenuAnchor(null)},closePeers=function closePeers(){setPeersAnchor(null)};return Object(jsx_runtime.jsxs)("div",{style:{flexGrow:1},children:[Object(jsx_runtime.jsx)(AppBar.a,{position:"static",children:Object(jsx_runtime.jsxs)(Toolbar.a,{children:[Object(jsx_runtime.jsx)(Typography.a,{variant:"h6",noWrap:!0,children:"IPFS"}),Object(jsx_runtime.jsx)("div",{style:{flexGrow:1}}),Object(jsx_runtime.jsx)(IconButton.a,{color:"inherit","aria-label":"ipfs peers","aria-controls":peersId,"aria-haspopup":"true",onClick:function openPeers(e){setPeersAnchor(e.currentTarget)},children:Object(jsx_runtime.jsx)(Badge.a,{badgeContent:peerNum,children:Object(jsx_runtime.jsx)(Group.a,{})})}),Object(jsx_runtime.jsx)(IconButton.a,{color:"inherit","aria-label":"ipfs node","aria-controls":menuId,"aria-haspopup":"true",onClick:function openMenu(e){setMenuAnchor(e.currentTarget)},children:peerNum<=0?Object(jsx_runtime.jsx)(SignalCellularConnectedNoInternet0Bar.a,{}):peerNum<10?Object(jsx_runtime.jsx)(SignalCellular0Bar.a,{}):peerNum<64?Object(jsx_runtime.jsx)(SignalCellular1Bar.a,{}):peerNum<128?Object(jsx_runtime.jsx)(SignalCellular2Bar.a,{}):peerNum<256?Object(jsx_runtime.jsx)(SignalCellular3Bar.a,{}):Object(jsx_runtime.jsx)(SignalCellular4Bar.a,{})})]})}),Object(jsx_runtime.jsx)(Menu.a,{anchorEl:menuAnchor,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},id:menuId,keepMounted:!0,open:!!menuAnchor,onClose:closeMenu,children:Object(jsx_runtime.jsx)(MenuItem.a,{onClick:function onClick(){closeMenu(),ipfs.stop()},children:"Stop"})}),Object(jsx_runtime.jsxs)(Menu.a,{anchorEl:peersAnchor,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},id:peersId,keepMounted:!0,open:!!peersAnchor,onClose:closePeers,children:[Object(jsx_runtime.jsx)(MenuItem.a,{onClick:closePeers,children:Object(jsx_runtime.jsx)(Grid.a,{container:!0,direction:"row",spacing:2,justify:"space-around",children:Object(jsx_runtime.jsxs)(Grid.a,{item:!0,children:["total number: ",peerNum]})})}),Object(jsx_runtime.jsx)(Divider.a,{}),peers.slice(0,showNum).map((function(peer){return Object(jsx_runtime.jsx)(MenuItem.a,{onClick:function onClick(){closePeers()},children:peer.addr.toString()},randStr())})),Object(jsx_runtime.jsx)(Divider.a,{}),peerNum>showNum&&Object(jsx_runtime.jsx)(MenuItem.a,{children:Object(jsx_runtime.jsx)(Grid.a,{container:!0,direction:"row",justify:"space-around",children:Object(jsx_runtime.jsx)(Grid.a,{item:!0,children:"more"})})})]})]})};index_stories_NavBar.displayName="NavBar";var index_stories_Root=function Root(_ref3){var host=_ref3.host,protocol=_ref3.protocol,port=_ref3.port,probeInterval=_ref3.probeInterval,livelinessProbe=_ref3.livelinessProbe,styles=Object(makeStyles.a)((function(theme){return{root:{flexGrow:1,backgroundColor:theme.palette.background.paper}}}))();return Object(jsx_runtime.jsx)(src_IpfsProvider,{livelinessProbe:livelinessProbe,probeInterval:probeInterval,opts:{protocol:protocol,host:host,port:port},children:Object(jsx_runtime.jsx)(index_stories_Wrapper,{children:Object(jsx_runtime.jsx)("div",{className:styles.root,children:Object(jsx_runtime.jsx)(index_stories_NavBar,{})})})})};index_stories_Root.displayName="Root";__webpack_exports__.default={title:"IPFS",component:index_stories_Root,argTypes:{host:{control:{type:"text"}},port:{control:{type:"number",min:1}},protocol:{control:{type:"text"}},probeInterval:{control:{type:"number"},defaultValue:5e3},livelinessProbe:{control:{type:"boolean"},defaultValue:!0}},parameters:{controls:{expanded:!0}}};var index_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(index_stories_Root,Object.assign({},args))};index_stories_Template.displayName="Template";var Example=index_stories_Template.bind({});Example.args={host:"localhost",port:5001,protocol:"http",probeInterval:5e3,livelinessProbe:!0},Example.parameters=Object.assign({storySource:{source:"args => <Root {...args} />"}},Example.parameters)},594:function(module,exports,__webpack_require__){__webpack_require__(595),__webpack_require__(755),__webpack_require__(756),__webpack_require__(913),__webpack_require__(1132),__webpack_require__(1165),__webpack_require__(1170),__webpack_require__(1182),__webpack_require__(1184),__webpack_require__(1189),__webpack_require__(1191),module.exports=__webpack_require__(1195)},668:function(module,exports){},756:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(425)}},[[594,1,2]]]);
//# sourceMappingURL=main.56656bb7a09a1cac1220.bundle.js.map