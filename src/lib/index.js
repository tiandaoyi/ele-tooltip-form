import EleTooltipInput from './TooltipInput';

EleTooltipInput.install = (Vue) => {
    Vue.component('EleTooltipInput', EleTooltipInput);
    if (typeof window !== 'undefined' && window.Vue) {
        window.Vue.use(EleTooltipInput)
    }
}

export default EleTooltipInput;