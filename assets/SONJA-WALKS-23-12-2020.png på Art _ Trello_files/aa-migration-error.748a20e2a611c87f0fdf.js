(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./app/src/components/AtlassianAccountMigration/AtlassianAccountMigrationError.tsx":function(e,a,n){"use strict";n.r(a),n.d(a,"AtlassianAccountMigrationError",(function(){return I}));var t=n("./node_modules/react/index.js"),i=n.n(t),r=n("./packages/atlassian-analytics/index.ts"),o=n("./packages/config/index.ts"),l=n("./app/common/lib/util/i18n/index.ts"),s=n("./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js"),c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"ChangeEmail"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"loginId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"changeMemberEmail"},arguments:[{kind:"Argument",name:{kind:"Name",value:"loginId"},value:{kind:"Variable",name:{kind:"Name",value:"loginId"}}},{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}},{kind:"Argument",name:{kind:"Name",value:"primary"},value:{kind:"BooleanValue",value:!0}}],directives:[{kind:"Directive",name:{kind:"Name",value:"client"},arguments:[]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}}]}}]};var u=n("./app/src/components/EmailError/index.ts"),m=n("./app/src/components/ChangeEmailButton/index.ts"),d=n("./app/src/components/Wizard/index.ts"),g=n("./packages/nachos/button.ts"),p=n("./app/src/components/AtlassianAccountMigration/EmailMigrationDialog.tsx"),f=n("./app/src/components/AtlassianAccountMigration/fetchIllustration.ts"),b=n("./app/src/components/AtlassianAccountMigration/EmailMismatchErrorDialog.less"),v=n.n(b);function y(e,a,n,t,i,r,o){try{var l=e[r](o),s=l.value}catch(e){return void n(e)}l.done?a(s):Promise.resolve(s).then(t,i)}function h(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],t=!0,i=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done)&&(n.push(o.value),!a||n.length!==a);t=!0);}catch(e){i=!0,r=e}finally{try{t||null==l.return||l.return()}finally{if(i)throw r}}return n}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return k(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,t=new Array(a);n<a;n++)t[n]=e[n];return t}var E={main:{full:n("./resources/images/aa-migration-wizard/illustration-error.svg"),mobile:n("./resources/images/aa-migration-wizard/illustration-error-mobile.svg")},email:{full:n("./resources/images/aa-migration-wizard/illustration-email.svg"),mobile:n("./resources/images/aa-migration-wizard/illustration-email-mobile.svg")}},A=Object(l.forNamespace)(["aa migration wizard","email mismatch error"],{shouldEscapeStrings:!1}),M=function(e){var a=e.accounts,n=e.onClickMigrate,l=e.onDismiss,b=h(Object(t.useState)(),2),k=b[0],M=b[1];Object(t.useEffect)((function(){Object(f.a)(E.main.full,v.a.illustration),Object(f.a)(E.main.mobile,v.a.illustration)})),Object(t.useEffect)((function(){r.Analytics.sendScreenEvent({name:"aaMigrationWizardEmailMismatchScreen"})}),[]);var w,j=h(s.b(c,w),2),x=j[0],_=j[1],S=h(Object(t.useState)(u.b.None),2),I=S[0],N=S[1],D=function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var t,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(u.b.None),e.prev=1,a.trello.loginId){e.next=4;break}throw Error("No login ID provided");case 4:return e.next=6,x({variables:{loginId:a.trello.loginId,email:n}});case 6:M(n),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),t=e.t0.networkError?e.t0.networkError.message:e.t0.message,(i=Object(u.c)(t))?N(i):(console.error("Failed to change email",e.t0),N(u.b.Unknown));case 14:r.Analytics.sendClickedButtonEvent({buttonName:"atlassianAccountMigrationChangeEmailButton",source:"atlassianAccountMigrationChangeEmailInlineDialog"});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})),function(){var a=this,n=arguments;return new Promise((function(t,i){var r=e.apply(a,n);function o(e){y(r,t,i,o,l,"next",e)}function l(e){y(r,t,i,o,l,"throw",e)}o(void 0)}))});return function(e){return n.apply(this,arguments)}}(),O=Object(t.useCallback)((function(e){e&&r.Analytics.sendScreenEvent({name:"atlassianAccountMigrationChangeEmailInlineDialog"})}),[]),C=Object(t.useCallback)((function(){l(),r.Analytics.sendClosedComponentEvent({componentType:"overlay",componentName:"atlassianAccountMigrationOverlay",source:"aaMigrationWizardEmailMismatchScreen"})}),[l]);return k?i.a.createElement(p.a,{image:Object(f.a)(E.email.full,v.a.illustration),mobileImage:Object(f.a)(E.email.mobile,v.a.illustration),email:k,closeDialog:C}):i.a.createElement(d.a,{closeDialog:C,title:A("title",{email:a.trello.email}),image:Object(f.a)(E.main.full,v.a.illustration),mobileImage:Object(f.a)(E.main.mobile,v.a.illustration)},i.a.createElement("div",{className:v.a.content},i.a.createElement("div",{className:v.a.description},i.a.createElement("p",{className:v.a.mainMessage},A("main-message")),i.a.createElement("p",null,A("secondary-message")),i.a.createElement("ul",null,i.a.createElement("li",{key:"log-in-with-aa-email"},A("log-in-to-atlassian-with-email",{email:a.trello.email})),i.a.createElement("li",{key:"change-your-trello-email"},A("change-your-email-address-for-trello")),i.a.createElement("li",{key:"change-your-atlassian-email"},A("change-your-email-address-for-atlassian",{atlassianAccount:i.a.createElement("a",{key:"aa-change-email-link",href:o.identityBaseUrl+"/manage-profile/email",target:"_blank"},A("atlassian-account"))})))),i.a.createElement("div",{className:v.a.buttons},i.a.createElement(g.a,{appearance:"primary",onClick:n},A("log-in-to-atlassian")),a.trello.loginId&&i.a.createElement(m.a,{emailError:I,onSubmitEmail:D,onTogglePopover:O,isSendingRequest:_.loading,emailPlaceholder:a.atlassian.email||""},A("change-trello-email")))))},w=n("./app/src/components/AtlassianAccountMigration/AtlassianAccountMigrationErrorCodes.ts"),j=n("./packages/nachos/spinner.ts"),x=n("./app/src/components/AtlassianAccountMigration/AtlassianAccountMigrationClient.ts");function _(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],t=!0,i=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(t=(o=l.next()).done)&&(n.push(o.value),!a||n.length!==a);t=!0);}catch(e){i=!0,r=e}finally{try{t||null==l.return||l.return()}finally{if(i)throw r}}return n}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return S(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,t=new Array(a);n<a;n++)t[n]=e[n];return t}var I=function(e){var a=e.code,n=e.onRetry,o=e.onDismiss,l=_(Object(t.useState)(),2),s=l[0],c=l[1],u=Object(t.useCallback)((function(){o(),r.Analytics.sendClickedButtonEvent({buttonName:"atlassianAccountMigrationRetryButton",source:"atlassianAccountMigrationBanner"}),n()}),[o,n]);switch(Object(t.useEffect)((function(){a===w.a.EMAIL_MISMATCH&&x.a.fetchAccountsInfo().then((function(e){return e&&c(e)}),(function(e){console.error("Failed to fetch emails",{err:e}),c({atlassian:{email:null},trello:{email:null,loginId:null}})}))}),[a]),a){case w.a.EMAIL_MISMATCH:return s?i.a.createElement(M,{onClickMigrate:u,accounts:s,onDismiss:o}):i.a.createElement(j.a,null);default:throw new Error("Unhandled error code: ".concat(a))}};a.default=I},"./app/src/components/AtlassianAccountMigration/EmailMismatchErrorDialog.less":function(e,a,n){var t=n("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=n("./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./app/src/components/AtlassianAccountMigration/EmailMismatchErrorDialog.less");"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};t(i,r);e.exports=i.locals||{}},"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./app/src/components/AtlassianAccountMigration/EmailMismatchErrorDialog.less":function(e,a,n){(a=e.exports=n("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._3Bd6HnKKkhFGD_{display:flex;flex:1;flex-direction:column;max-height:328px}._3Bd6HnKKkhFGD_ .G69uEb3MtDy4ET{display:flex;flex-direction:column;overflow-y:auto}._3Bd6HnKKkhFGD_ ._2zWt-TAgMI95Ed{margin-top:30px}._3Bd6HnKKkhFGD_ ._2zWt-TAgMI95Ed button{margin-right:8px}._2KecRqjUIETpLX{word-wrap:break-word}@media only screen and (max-width:1020px){._3AU-NEKdBS7j3e{width:100%;min-width:375px}}._3Bd6HnKKkhFGD_ .G69uEb3MtDy4ET ul{list-style:disc;padding-left:16px}._3Bd6HnKKkhFGD_ .G69uEb3MtDy4ET ul li{word-break:break-word;margin-bottom:8px}",""]),a.locals={content:"_3Bd6HnKKkhFGD_",description:"G69uEb3MtDy4ET",buttons:"_2zWt-TAgMI95Ed",breakable:"_2KecRqjUIETpLX",illustration:"_3AU-NEKdBS7j3e"}},"./resources/images/aa-migration-wizard/illustration-error-mobile.svg":function(e,a,n){e.exports=n.p+"images/aa-migration-wizard/illustration-error-mobile.f1d7cd8e9f994511de69.svg"},"./resources/images/aa-migration-wizard/illustration-error.svg":function(e,a,n){e.exports=n.p+"images/aa-migration-wizard/illustration-error.04f84878bae2a86e48d7.svg"}}]);
//# sourceMappingURL=aa-migration-error.748a20e2a611c87f0fdf.js.map