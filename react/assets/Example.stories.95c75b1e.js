import{j as e,a as n,F as s}from"./jsx-runtime.ec4b43ec.js";import{u as i,C as a,S as m}from"./Props.f6308848.js";import"./iframe.e30dfaf1.js";import{B as c}from"./Button.79deb50d.js";import"./string.0ca721e8.js";import"./es.map.constructor.450075a5.js";import"./es.number.to-fixed.0c3c7e93.js";import"./index.9b6284d1.js";function r(o){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",em:"em"},i(),o.components);return n(s,{children:[e(t.h1,{children:"Embedding stories by reference in MDX files"}),`
`,n(t.p,{children:["In this example ",e(t.code,{children:"Example.stories.jsx"}),` import an MDX file, which contains
references to stories by their unique ID.`]}),`
`,n(t.p,{children:["See also ",e(t.a,{href:"https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/recipes.md#csf-stories-with-arbitrary-mdx",children:"CSF Stories with arbitrary MDX"}),"."]}),`
`,e(t.h2,{children:"Button"}),`
`,e(a,{children:e(m,{id:"examples-mdx-in-stories--primary-button"})}),`
`,e(t.p,{children:e(t.em,{children:"You should be able to see the source of the above story."})})]})}function d(o={}){const{wrapper:t}=Object.assign({},i(),o.components);return t?e(t,Object.assign({},o,{children:e(r,o)})):r(o)}const g={title:"Examples/MDX in stories",parameters:{storySource:{source:`import page from './Example.docs.mdx';
import { Button } from '../components/Button';

export default {
  // This title overrides the autotitle
  title: 'Examples/MDX in stories',

  parameters: {
    docs: {
      page,
    },
  },
};

export function PrimaryButton() {
  return <Button primary label="Primary button" />;
}
;PrimaryButton.__docgenInfo={"description":"","methods":[],"displayName":"PrimaryButton"}`,locationsMap:{"primary-button":{startLoc:{col:7,line:15},endLoc:{col:1,line:17},startBody:{col:7,line:15},endBody:{col:1,line:17}}}},docs:{page:d}}},l=function(){return e(c,{primary:!0,label:"Primary button"})};l.__docgenInfo={description:"",methods:[],displayName:"PrimaryButton"};const M=["PrimaryButton"];export{l as PrimaryButton,M as __namedExportsOrder,g as default};
//# sourceMappingURL=Example.stories.95c75b1e.js.map
