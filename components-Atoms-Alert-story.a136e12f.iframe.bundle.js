"use strict";(self.webpackChunkfb2022_todoapp=self.webpackChunkfb2022_todoapp||[]).push([[281],{"./src/components/Atoms/Alert/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_variables_color__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/variables/color.js"),_variables_texts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/variables/texts.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Alert=_ref=>{let{visible,errorText}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledContent,{visible,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledText,{children:errorText})})};Alert.displayName="Alert",Alert.__docgenInfo={description:"",methods:[],displayName:"Alert"};const __WEBPACK_DEFAULT_EXPORT__=Alert,StyledContent=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  position: absolute;
  left: 50%;
  top: 80px;
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  background-color: ${_variables_color__WEBPACK_IMPORTED_MODULE_1__.Z.RED};
  border-radius: 4px;
  transition: 0.5s;
  transform: translateX(-50%) translateY(-40px);
  opacity: 0;

  ${props=>props.visible&&"\n    transform: translateX(-50%) translateY(0);\n    opacity: 1;\n  "}
`,StyledText=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
  ${_variables_texts__WEBPACK_IMPORTED_MODULE_2__.Z.S}
  color: ${_variables_color__WEBPACK_IMPORTED_MODULE_1__.Z.WHITE};
`},"./src/components/Atoms/Alert/story.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Atoms/Alert/index.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Atoms/Alert"},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind();Default.args={visible:!0,errorText:"text"}},"./src/variables/color.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={BLACK:"#232324",LIGHT_BLACK:"#2B2A2E",DEEP_BLUE_GRAY:"#2F3136",LIGHT_GRAY:"#B8B8B8",LIGHT_GRAY_TRANSLUCENT:"rgba(184,184,184,0.2)",LIGHT_GRAY_TRANSPARENT:"rgba(0,0,0,0)",WHITE:"#FFFFFF",GREEN:"#46A381",GREEN_TRANSLUCENT:"rgba(70,163,129,0.2)",GREEN_TRANSPARENT:"rgba(0,0,0,0)",RED:"#F0947F"}},"./src/variables/texts.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={S:"font-size: 14px; line-height: 20px;",M:"font-size: 24px; line-height: 35px;",L:"font-size: 36px; line-height: 52px;"}}}]);
//# sourceMappingURL=components-Atoms-Alert-story.a136e12f.iframe.bundle.js.map