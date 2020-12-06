import EleTooltipInput from './TooltipInput';
import EleTooltipSelect from './TooltipSelect';
import EleTooltipDate from './TooltipDate';
import EleTooltipInputNum from './TooltipInputNum';
import EleTooltipRadio from './TooltipRadio';
import EleTooltipSwitch from './TooltipSwitch';

const installer = {
	EleTooltipInput,
	EleTooltipSelect,
	EleTooltipDate,
	EleTooltipInputNum,
	EleTooltipRadio,
	EleTooltipSwitch
}

const batchBindInstall = (obj) => {
	for (let i in obj) {
		const currInstaller = installer[i]
		currInstaller.install = (Vue) => {
			Vue.component(currInstaller.name, currInstaller)
		}
	}
}
batchBindInstall(installer)

export {
  EleTooltipInput,
	EleTooltipSelect,
	EleTooltipDate,
	EleTooltipInputNum,
	EleTooltipRadio,
	EleTooltipSwitch
}