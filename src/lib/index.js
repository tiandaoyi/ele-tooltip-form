import EleTooltipInput from './TooltipInput';
// const tooltipInput = {
//   install (Vue, options) {  // 需要拥有一个 install 方法     
//     Vue.component('tooltipInput', ElementTooltipInput)    
//   }
// }
// export default tooltipInput;
EleTooltipInput.install = (Vue) => {
    Vue.component('EleTooltipInput', EleTooltipInput);
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(EleTooltipInput)
    }
}

export default EleTooltipInput;