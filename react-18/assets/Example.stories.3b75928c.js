import{j as i}from"./jsx-runtime.e83ebacc.js";import{c as t,C as m,S as p}from"./Props.2dd630c4.js";import"./iframe.aa79f52d.js";import{B as l}from"./Button.072a843f.js";import"./string.b8fb45de.js";import"./es.map.constructor.e3659346.js";import"./es.number.to-fixed.cea14b32.js";import"./index.9b6284d1.js";function a(){return a=Object.assign?Object.assign.bind():function(o){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},a.apply(this,arguments)}const u={},c="wrapper";function s({components:o,...r}){return t(c,a({},u,r,{components:o,mdxType:"MDXLayout"}),t("h1",null,"Embedding stories by reference in MDX files"),t("p",null,"In this example ",t("inlineCode",{parentName:"p"},"Example.stories.jsx"),` import an MDX file, which contains
references to stories by their unique ID.`),t("p",null,"See also ",t("a",{parentName:"p",href:"https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/recipes.md#csf-stories-with-arbitrary-mdx"},"CSF Stories with arbitrary MDX"),"."),t("h2",null,"Button"),t(m,{mdxType:"Canvas"},t(p,{id:"example-mdx-in-stories--primary-button",mdxType:"Story"})),t("p",null,t("em",{parentName:"p"},"You should be able to see the source of the above story.")))}s.isMDXComponent=!0;const D={title:"Example/MDX in stories",parameters:{storySource:{source:`import page from './Example.docs.mdx';
import { Button } from '../Button';

export default {
  title: 'Example/MDX in stories',

  parameters: {
    docs: {
      page,
    },
  },
};

export function PrimaryButton() {
  return <Button primary label="Primary button" />;
}
;PrimaryButton.__docgenInfo={"description":"","methods":[],"displayName":"PrimaryButton"}`,locationsMap:{"primary-button":{startLoc:{col:7,line:14},endLoc:{col:1,line:16},startBody:{col:7,line:14},endBody:{col:1,line:16}}}},docs:{page:s}}},d=function(){return i(l,{primary:!0,label:"Primary button"})};d.__docgenInfo={description:"",methods:[],displayName:"PrimaryButton"};const M=["PrimaryButton"];export{d as PrimaryButton,M as __namedExportsOrder,D as default};
//# sourceMappingURL=Example.stories.3b75928c.js.map
