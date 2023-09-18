"use strict";(self.webpackChunkfb2022_todoapp=self.webpackChunkfb2022_todoapp||[]).push([[27],{"./src/components/Atoms/AddTaskButton/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Atoms_AddTaskButton});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),color=__webpack_require__("./src/variables/color.js"),texts=__webpack_require__("./src/variables/texts.js");const plus_namespaceObject=__webpack_require__.p+"static/media/plus.4004ecca.svg";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const AddTaskButton=_ref=>{let{onClick}=_ref;return(0,jsx_runtime.jsxs)(StyledButton,{onClick,children:[(0,jsx_runtime.jsx)("img",{src:plus_namespaceObject}),(0,jsx_runtime.jsx)(StyledLabel,{children:"タスクを追加"})]})};AddTaskButton.displayName="AddTaskButton",AddTaskButton.__docgenInfo={description:"",methods:[],displayName:"AddTaskButton"};const Atoms_AddTaskButton=AddTaskButton,StyledButton=styled_components_browser_esm.ZP.button`
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
`},"./src/components/Organisms/TodoCard/story.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Organisms/TodoCard/index.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_1__.Z,title:"Organisms/TodoCard"},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.Z,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={}},"./src/variables/color.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={BLACK:"#232324",LIGHT_BLACK:"#2B2A2E",DEEP_BLUE_GRAY:"#2F3136",LIGHT_GRAY:"#B8B8B8",LIGHT_GRAY_TRANSLUCENT:"rgba(184,184,184,0.2)",LIGHT_GRAY_TRANSPARENT:"rgba(0,0,0,0)",WHITE:"#FFFFFF",GREEN:"#46A381",GREEN_TRANSLUCENT:"rgba(70,163,129,0.2)",GREEN_TRANSPARENT:"rgba(0,0,0,0)",RED:"#F0947F"}},"./src/variables/texts.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={S:"font-size: 14px; line-height: 20px;",M:"font-size: 24px; line-height: 35px;",L:"font-size: 36px; line-height: 52px;"}}}]);
//# sourceMappingURL=components-Organisms-TodoCard-story.3ec94d23.iframe.bundle.js.map