import EleTooltipInput from './TooltipInput';
import EleTooltipSelect from './TooltipSelect';


EleTooltipInput.install = function(Vue) {
    Vue.component(EleTooltipInput.name, EleTooltipInput);
}

EleTooltipSelect.install = function(Vue) {
    Vue.component(EleTooltipSelect.name, EleTooltipSelect);
}

export {
    EleTooltipInput,
    EleTooltipSelect
}