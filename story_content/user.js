function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ZVrDVejj7i":
        Script1();
        break;
  }
}

function Script1()
{
  if (document.location.href.indexOf('html5') < 0) {
GetPlayer().printSlide()
} else {
if(!window.hasPrintStyle){
window.hasPrintStyle = true;
var css = "@media print {div.controls.grid-row.inflexible,div.area-secondary.cs-left.inflexible,header.header-primary.centered-title.extended-height,div.presentation-wrapper:after {display:none !important; visibility:hidden !important;}}";
head = document.head || document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet){
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}
head.appendChild(style);
}
window.print();
}
}

