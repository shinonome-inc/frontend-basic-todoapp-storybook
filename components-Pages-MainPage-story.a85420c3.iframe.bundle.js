"use strict";(self.webpackChunkfb2022_todoapp=self.webpackChunkfb2022_todoapp||[]).push([[894],{"./src/components/Atoms/AddTaskButton/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Atoms_AddTaskButton});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),color=__webpack_require__("./src/variables/color.js"),texts=__webpack_require__("./src/variables/texts.js");const plus_namespaceObject=__webpack_require__.p+"static/media/plus.4004ecca.svg";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AddTaskButton=_ref=>{let{onClick}=_ref;return(0,jsx_runtime.jsxs)(StyledButton,{onClick,children:[(0,jsx_runtime.jsx)("img",{src:plus_namespaceObject}),(0,jsx_runtime.jsx)(StyledLabel,{children:"タスクを追加"})]})};AddTaskButton.displayName="AddTaskButton",AddTaskButton.__docgenInfo={description:"",methods:[],displayName:"AddTaskButton"};const Atoms_AddTaskButton=AddTaskButton,StyledButton=styled_components_browser_esm.ZP.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 12px;
  background: ${color.Z.GREEN_TRANSPARENT};
  transition: 0.2s;
  display: flex;
  align-items: center;
  padding: 2px 6px;

  & > img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${color.Z.GREEN_TRANSLUCENT};
  }
`,StyledLabel=styled_components_browser_esm.ZP.div`
  color: ${color.Z.GREEN};
  ${texts.Z.S};
  margin-left: 10px;
  white-space: nowrap;
`},"./src/components/Atoms/Alert/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_variables_color__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/variables/color.js"),_variables_texts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/variables/texts.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Alert=_ref=>{let{visible,errorText}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledContent,{visible,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledText,{children:errorText})})};Alert.displayName="Alert",Alert.__docgenInfo={description:"",methods:[],displayName:"Alert"};const __WEBPACK_DEFAULT_EXPORT__=Alert,StyledContent=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div`
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
`},"./src/components/Atoms/Checkbox/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Atoms_Checkbox});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const check_namespaceObject=__webpack_require__.p+"static/media/check.ad275d78.svg";var color=__webpack_require__("./src/variables/color.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Checkbox=_ref=>{let{onClick}=_ref;return(0,jsx_runtime.jsx)(StyledButton,{onClick,children:(0,jsx_runtime.jsx)("img",{src:check_namespaceObject})})};Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};const Atoms_Checkbox=Checkbox,StyledButton=styled_components_browser_esm.ZP.button`
  border: 2px solid ${color.Z.LIGHT_GRAY};
  border-radius: 2px;
  background: none;
  outline: none;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  & > img {
    display: none;
    width: 100%;
    height: 100%;
  }

  &:hover {
    & > img {
      display: block;
    }
  }
`},"./src/components/Atoms/EditButton/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Atoms_EditButton});__webpack_require__("./node_modules/react/index.js");const pencil_namespaceObject=__webpack_require__.p+"static/media/pencil.555b2770.svg";var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),color=__webpack_require__("./src/variables/color.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const EditButton=_ref=>{let{onClick}=_ref;return(0,jsx_runtime.jsx)(StyledButton,{onClick,children:(0,jsx_runtime.jsx)("img",{src:pencil_namespaceObject})})};EditButton.displayName="EditButton",EditButton.__docgenInfo={description:"",methods:[],displayName:"EditButton"};const Atoms_EditButton=EditButton,StyledButton=styled_components_browser_esm.ZP.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 20px;
  background: none;
  padding: 0;
  border-radius: 50%;
  background-color: ${color.Z.LIGHT_GRAY_TRANSPARENT};
  transition: 0.2s;

  & > img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: ${color.Z.LIGHT_GRAY_TRANSLUCENT};
  }
`},"./src/components/Atoms/Input/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_variables_color__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/variables/color.js"),_variables_texts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/variables/texts.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=_ref=>{let{onEditComplete,defaultValue=""}=_ref;const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{ref.current.value=defaultValue,ref.current.focus();const onFocusOut=()=>onEditComplete(ref.current.value);ref.current.addEventListener("focusout",onFocusOut),ref.current.addEventListener("keypress",(event=>{"Enter"===event.key&&(ref.current.removeEventListener("focusout",onFocusOut),onEditComplete(ref.current.value))}))}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledInput,{ref})};Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{defaultValue:{defaultValue:{value:'""',computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Input,StyledInput=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.input.attrs((props=>({...props,size:"1"})))`
  background-color: ${_variables_color__WEBPACK_IMPORTED_MODULE_1__.Z.BLACK};
  color: ${_variables_color__WEBPACK_IMPORTED_MODULE_1__.Z.LIGHT_GRAY};
  ${_variables_texts__WEBPACK_IMPORTED_MODULE_2__.Z.S}
  border-radius: 2px;
  padding: 0 4px;
  border: none;
  outline: none;
  width: 100%;
`},"./src/components/Atoms/Title/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Atoms_Title});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),breakpoint=__webpack_require__("./src/variables/breakpoint.js"),color=__webpack_require__("./src/variables/color.js");const font_family={NOTO_SANS:"'Noto Sans JP', sans-serif",ROBOTO:"'Roboto', sans-serif"};var texts=__webpack_require__("./src/variables/texts.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Title=()=>(0,jsx_runtime.jsx)(StyledText,{children:"SIMPLE TODO APP"});Title.displayName="Title",Title.__docgenInfo={description:"",methods:[],displayName:"Title"};const Atoms_Title=Title,StyledText=styled_components_browser_esm.ZP.div`
  color: ${color.Z.WHITE};
  ${texts.Z.M}
  font-family: ${font_family.ROBOTO};

  @media (min-width: ${breakpoint.Z.MEDIUM}) {
    ${texts.Z.L}
  }
`},"./src/components/Molecules/Task/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_variables_color__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/variables/color.js"),_variables_texts__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/variables/texts.js"),_Atoms_Checkbox__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Atoms/Checkbox/index.jsx"),_Atoms_EditButton__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Atoms/EditButton/index.jsx"),_Atoms_Input__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Atoms/Input/index.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Task=_ref=>{let{onTaskNameChange,onTaskComplete,taskName="",defaultIsEditing=!1}=_ref;const[isEditing,setIsEditing]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultIsEditing);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(StyledWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledCheckboxWrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Atoms_Checkbox__WEBPACK_IMPORTED_MODULE_3__.Z,{onClick:onTaskComplete})}),isEditing?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Atoms_Input__WEBPACK_IMPORTED_MODULE_5__.Z,{onEditComplete:value=>{setIsEditing(!1),onTaskNameChange(value)},defaultValue:taskName}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(StyledNameAndButtonWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledTaskName,{children:taskName}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledEditButtonWrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Atoms_EditButton__WEBPACK_IMPORTED_MODULE_4__.Z,{onClick:()=>{setIsEditing(!0)}})})]})]})};Task.displayName="Task",Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{taskName:{defaultValue:{value:'""',computed:!1},required:!1},defaultIsEditing:{defaultValue:{value:"false",computed:!1},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=Task,StyledWrapper=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div`
  display: flex;
  align-items: center;
  padding: 2px 6px;
  overflow: hidden;
`,StyledCheckboxWrapper=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div`
  margin-right: 10px;
`,StyledNameAndButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  overflow: hidden;
`,StyledTaskName=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div`
  ${_variables_texts__WEBPACK_IMPORTED_MODULE_2__.Z.S}
  color: ${_variables_color__WEBPACK_IMPORTED_MODULE_1__.Z.LIGHT_GRAY};
  flex: 1 1 auto;
  margin-right: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,StyledEditButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_7__.ZP.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`},"./src/components/Organisms/TodoCard/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_contexts_alert_handler__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/contexts/alert_handler.jsx"),_variables_color__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/variables/color.js"),_Atoms_AddTaskButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Atoms/AddTaskButton/index.jsx"),_Molecules_Task__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Molecules/Task/index.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TodoCard=()=>{const[taskList,setTaskList]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),AlertHandlerContext=(0,_contexts_alert_handler__WEBPACK_IMPORTED_MODULE_1__.u$)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const currentTaskList=JSON.parse(localStorage.getItem("tasklist"));null!==currentTaskList&&setTaskList(currentTaskList)}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{localStorage.setItem("tasklist",JSON.stringify(taskList))}),[taskList]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledWrapper,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Atoms_AddTaskButton__WEBPACK_IMPORTED_MODULE_3__.Z,{onClick:()=>{setTaskList(taskList.concat({name:"",initializing:!0}))}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledTaskList,{children:taskList.map(((task,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Molecules_Task__WEBPACK_IMPORTED_MODULE_4__.Z,{onTaskComplete:()=>(index=>{let newTaskList=taskList.filter(((_,idx)=>idx!=index));setTaskList(newTaskList)})(index),onTaskNameChange:value=>((value,index)=>{let newTaskList=[...taskList];""===value?(newTaskList.splice(index,1),AlertHandlerContext.setAlert("タスクの名前が設定されていません。")):newTaskList.splice(index,1,{name:value,initializing:!1}),setTaskList(newTaskList)})(value,index),taskName:task.name,defaultIsEditing:task.initializing},index)))})]})};TodoCard.displayName="TodoCard",TodoCard.__docgenInfo={description:"",methods:[],displayName:"TodoCard"};const __WEBPACK_DEFAULT_EXPORT__=TodoCard,StyledWrapper=styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div`
  background-color: ${_variables_color__WEBPACK_IMPORTED_MODULE_2__.Z.LIGHT_BLACK};
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,StyledTaskList=styled_components__WEBPACK_IMPORTED_MODULE_6__.ZP.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;

  & > * {
    margin-top: 10px;
  }
`},"./src/components/Pages/MainPage/story.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithAlert:()=>WithAlert,default:()=>story});var react=__webpack_require__("./node_modules/react/index.js"),alert_handler=__webpack_require__("./src/contexts/alert_handler.jsx"),Alert=__webpack_require__("./src/components/Atoms/Alert/index.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AlertManager=()=>{const[timeoutHandler,setTimeoutHandler]=(0,react.useState)(null),AlertHandlerContext=(0,alert_handler.u$)();return(0,react.useEffect)((()=>{null!==timeoutHandler&&window.clearTimeout(timeoutHandler);const newTimeoutHandler=window.setTimeout((()=>{AlertHandlerContext.closeAlert(),setTimeoutHandler(null)}),5e3);setTimeoutHandler(newTimeoutHandler)}),[AlertHandlerContext]),(0,jsx_runtime.jsx)(Alert.Z,{visible:AlertHandlerContext.visible,errorText:AlertHandlerContext.errorText})};AlertManager.displayName="AlertManager",AlertManager.__docgenInfo={description:"",methods:[],displayName:"AlertManager"};const Organisms_AlertManager=AlertManager;var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),breakpoint=__webpack_require__("./src/variables/breakpoint.js"),Title=__webpack_require__("./src/components/Atoms/Title/index.jsx"),TodoCard=__webpack_require__("./src/components/Organisms/TodoCard/index.jsx");const MainPage=()=>(0,jsx_runtime.jsxs)(StyledWrapper,{children:[(0,jsx_runtime.jsx)(Title.Z,{}),(0,jsx_runtime.jsx)(StyledTodoCardWrapper,{children:(0,jsx_runtime.jsx)(TodoCard.Z,{})})]});MainPage.displayName="MainPage",MainPage.__docgenInfo={description:"",methods:[],displayName:"MainPage"};const Pages_MainPage=MainPage,StyledWrapper=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: ${breakpoint.Z.MEDIUM}) {
    padding-top: 60px;
  }
`,StyledTodoCardWrapper=styled_components_browser_esm.ZP.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoint.Z.MEDIUM}) {
    max-width: 500px;
    margin-top: 20px;
  }
`,story={component:Pages_MainPage,title:"Pages/MainPage",parameters:{backgrounds:{default:"dark"}}},Template=args=>(0,jsx_runtime.jsx)(Pages_MainPage,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={},Default.decorators=[Story=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Story,{})})];const WithAlert=Template.bind({});WithAlert.args={},WithAlert.decorators=[Story=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(alert_handler.LE,{children:[(0,jsx_runtime.jsx)(Organisms_AlertManager,{}),(0,jsx_runtime.jsx)(Story,{})]})})]},"./src/variables/breakpoint.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={MEDIUM:"768px"}},"./src/variables/color.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={BLACK:"#232324",LIGHT_BLACK:"#2B2A2E",DEEP_BLUE_GRAY:"#2F3136",LIGHT_GRAY:"#B8B8B8",LIGHT_GRAY_TRANSLUCENT:"rgba(184,184,184,0.2)",LIGHT_GRAY_TRANSPARENT:"rgba(0,0,0,0)",WHITE:"#FFFFFF",GREEN:"#46A381",GREEN_TRANSLUCENT:"rgba(70,163,129,0.2)",GREEN_TRANSPARENT:"rgba(0,0,0,0)",RED:"#F0947F"}},"./src/variables/texts.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={S:"font-size: 14px; line-height: 20px;",M:"font-size: 24px; line-height: 35px;",L:"font-size: 36px; line-height: 52px;"}}}]);
//# sourceMappingURL=components-Pages-MainPage-story.a85420c3.iframe.bundle.js.map