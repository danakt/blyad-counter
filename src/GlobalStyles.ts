import { createGlobalStyle } from 'styled-components'

const resetCss =
  // eslint-disable-next-line max-len
  "a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}"

/**
 * Component with global styles of the app
 */
export const GlobalStyles = createGlobalStyle`
  ${resetCss}

  @import url('https://fonts.googleapis.com/css?family=PT+Mono&subset=cyrillic');

  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
    background-color: rgba(26,26,26);
    color: #fff;
  }

  html {
    height: 100%;
  }

  body {
    padding: 30px;
    font-family: 'PT Mono', monospace;
  }

  b {
    font-weight: bold;
  }
`
