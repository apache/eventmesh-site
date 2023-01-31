"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[8468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,d=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return n?o.createElement(d,a(a({ref:t},m),{},{components:n})):o.createElement(d,a({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={title:"How to Contribute",sidebar_position:0},a="How to Contribute",l={unversionedId:"contribute",id:"contribute",title:"How to Contribute",description:"If you are a new contributor who wants to contribute to the eventmesh community, please read this document, which describes how to contribute to the community, and if you find any questions in the document, feel free to leave comments or suggestions.",source:"@site/community/01-contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/community/contribute",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"How to Contribute",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"How to Subscribe",permalink:"/community/how-to-subscribe"}},s={},u=[{value:"Preparation",id:"preparation",level:2},{value:"Development environment",id:"development-environment",level:3},{value:"Code Style",id:"code-style",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Explanation",id:"explanation",level:2},{value:"Development branch",id:"development-branch",level:2},{value:"Contribution Categories",id:"contribution-categories",level:2},{value:"Bug feedback or bug fixes",id:"bug-feedback-or-bug-fixes",level:3},{value:"Implementation of functions, refactoring",id:"implementation-of-functions-refactoring",level:3},{value:"Documentation Improvement",id:"documentation-improvement",level:3},{value:"Contribution method",id:"contribution-method",level:2},{value:"Submit issue guidelines",id:"submit-issue-guidelines",level:2},{value:"pull request (pr) submission guidelines",id:"pull-request-pr-submission-guidelines",level:2},{value:"review",id:"review",level:2},{value:"PR review",id:"pr-review",level:3},{value:"License review",id:"license-review",level:3},{value:"PR merge",id:"pr-merge",level:3},{value:"Community",id:"community",level:2},{value:"Contact us",id:"contact-us",level:3}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-contribute"},"How to Contribute"),(0,r.kt)("p",null,"If you are a new contributor who wants to contribute to the eventmesh community, please read this document, which describes how to contribute to the community, and if you find any questions in the document, feel free to leave comments or suggestions."),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("h3",{id:"development-environment"},"Development environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You should have the JDK installed in your development environment.")),(0,r.kt)("h3",{id:"code-style"},"Code Style"),(0,r.kt)("p",null,"Import ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/master/style/checkStyle.xml"},"EventMesh CheckStyle")," file to your IDEA."),(0,r.kt)("p",null,"For IDEA, you can import check style file by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"    Editor -> Code Style -> Java -> Scheme -> Import Scheme -> CheckStyle Configuration\n")),(0,r.kt)("p",null,"If you can't see CheckStyle Configuration section under Import Scheme, you can install CheckStyle-IDEA plugin first, and you will see it."),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"./gradlew check")," to check the code style.",(0,r.kt)("br",{parentName:"p"}),"\n","(Note: this command will check all file in project, when you submit a pr, the ci will only check the file has been changed in this pr)."),(0,r.kt)("h3",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,"Here are the workflow for contributors:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fork to your own")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone fork to local repository"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"git clone git@github.com:yourgithub/incubator-eventmesh.git\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create a new branch and work on it")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"git checkout -b fix_patch_xx\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Keep your branch in sync")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"git remote add upstream git@github.com:apache/incubator-eventmesh.git\ngit fetch upstream develop:upstream_develop\ngit rebase upstream_develop\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Commit your changes (make sure your commit message concise)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Push your commits to your forked repository")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a pull request"))),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("p",null,"The original warehouse: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh"},"https://github.com/apache/incubator-eventmesh")," The apache warehouse of eventmesh is called the original warehouse in the text."),(0,r.kt)("p",null,"The Fork library: From ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh"},"https://github.com/apache/eventmesh")," fork to your own personal repository to become a fork library."),(0,r.kt)("p",null,"So fork the original EventMesh repository into your own repository."),(0,r.kt)("h2",{id:"development-branch"},"Development branch"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The current development branch of eventmesh is Master. Please submit PR to this branch.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We recommend that you create a new branch in your repository for development and submit the branch to the master branch of eventmesh.")),(0,r.kt)("h2",{id:"contribution-categories"},"Contribution Categories"),(0,r.kt)("h3",{id:"bug-feedback-or-bug-fixes"},"Bug feedback or bug fixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Whether it's a bug feedback or a fix, an issue needs to be created first to describe the bug in detail, so that the community can easily find and view the problem and code through the issue record. bug feedback issues usually need to contain a complete description of the bug information and reproducible scenarios.")),(0,r.kt)("h3",{id:"implementation-of-functions-refactoring"},"Implementation of functions, refactoring"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you plan to implement a new feature (or refactoring), be sure to communicate with the eventmesh core development team via an Issue or other means, and describe the new feature (or refactoring), mechanism and scenario in detail during the communication process.")),(0,r.kt)("h3",{id:"documentation-improvement"},"Documentation Improvement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can find the eventmesh documentation at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-eventmesh/tree/master/docs"},"evenmesh-docs"),", and the documentation is supplemented or improved in a way that is also essential for eventmesh.")),(0,r.kt)("h2",{id:"contribution-method"},"Contribution method"),(0,r.kt)("p",null,"There are two ways for new contributors to contribute to the eventmesh community:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you find a bug in the eventmesh code that you want to fix, or if you provide a new feature for the eventmesh, submit an issue in the eventmesh and submit a pr to the eventmesh.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Other contributors in the eventmesh community have raised issues, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/issues/888"},(0,r.kt)("inlineCode",{parentName:"a"},"issue for first-time contributors"))," sorted out by the community here are relatively simple PR, which can help you familiarize yourself with the process of making contributions to the eventmesh community."))),(0,r.kt)("h2",{id:"submit-issue-guidelines"},"Submit issue guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you don't know how to raise an issue on eventmesh, please read ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/issues/tracking-your-work-with-issues/quickstart"},"about the issue"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the eventmesh community, there are issue templates that can be used for reference, if the type matches please use the template, if the issue template does not meet your requirements, you can open an empty issue template, for the issue please bring its matching feature labels.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the name of the issue, please briefly describe your question or purpose in one sentence, and write in English for better global communication."))),(0,r.kt)("h2",{id:"pull-request-pr-submission-guidelines"},"pull request (pr) submission guidelines"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you don't know how to initiate a pr for eventmesh, please see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"about pull request"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Whether it's a bug fix, or a new feature development (if this pr is a new feature development, then documentation updates about the new feature should be included in this pr), please submit a PR to the current development branch master.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The pr submission should follow the template provided by eventmesh as well as the need to write the submission information, a brief description of what the pr you are submitting does is sufficient, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/master/.github/PULL_REQUEST_TEMPLATE.md"},"template for details"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The pr you submit needs to be associated with the issue you are fixing, or the issue you are raising,so your PR title should start with ","[ISSUE #xx]",".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If your change is about a typo or small optimize, you needn't create an Issue, just submit a PR and title with ","[MINOR]","."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A single pull request should not be too large. If heavy changes are required, it's better to separate the changes to a few individual PRs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After creating a PR, one or more committers will help to review the pull request, after approve, this PR will be merged in to eventmesh repository, and the related Issue will be closed."))),(0,r.kt)("h2",{id:"review"},"review"),(0,r.kt)("h3",{id:"pr-review"},"PR review"),(0,r.kt)("p",null,"All code should be well reviewed by one or more committers. Some principles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Readability: Important code should be well-documented. Comply with our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh/blob/master/style/checkStyle.xml"},"code style"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Elegance: New functions, classes or components should be well-designed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Testability: Important code should be well-tested (high unit test coverage)."))),(0,r.kt)("h3",{id:"license-review"},"License review"),(0,r.kt)("p",null,"EventMesh follows ",(0,r.kt)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0.html"},"Apache License 2.0")," policy. All source files should\nhave the Apache License header added to the file header. EventMesh uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking-eyes"},"apache/skywalking-eyes")," to check\nthe source file header."),(0,r.kt)("h3",{id:"pr-merge"},"PR merge"),(0,r.kt)("p",null,"After a PR is approved by at least one committer, it can be merged. Before the merge, the committer can make changes to the commits message, requiring the commits\nmessage to be clear without duplication, and use Squash and Merge to make sure one PR should only contain one commits.\nFor large multi-person PR, use Merge to merge, and fix the commits by rebase before merging."),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("h3",{id:"contact-us"},"Contact us"),(0,r.kt)("p",null,"Mail: ",(0,r.kt)("a",{parentName:"p",href:"mailto:dev@eventmesh.apache.org"},"dev@eventmesh.apache.org")))}p.isMDXComponent=!0}}]);