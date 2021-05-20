import EleTooltipInput from './TooltipInput';
import EleTooltipSelect from './TooltipSelect';
import EleTooltipDate from './TooltipDate';
import EleTooltipInputNum from './TooltipInputNum';
import EleTooltipRadio from './TooltipRadio';
import EleTooltipSwitch from './TooltipSwitch';
import EleTooltipCascader from './TooltipCascader';

const installer = {
	EleTooltipInput,
	EleTooltipSelect,
	EleTooltipDate,
	EleTooltipInputNum,
	EleTooltipRadio,
	EleTooltipSwitch,
	EleTooltipCascader
}

export default {
  install: function (Vue) {
		for (let i in installer) {
			const currInstaller = installer[i]
			Vue.component(currInstaller.name, currInstaller)
		}
	}
}
