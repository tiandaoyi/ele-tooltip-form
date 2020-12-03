import EleTooltipInput from './TooltipInput';
import EleTooltipSelect from './TooltipSelect';
import EleTooltipDate from './TooltipDate';
import EleTooltipInputNum from './TooltipInputNum';
import EleTooltipRadio from './TooltipRadio';
import EleTooltipSwitch from './TooltipSwitch';

// EleTooltipInput.install = function (Vue) {
//   Vue.component(EleTooltipInput.name, EleTooltipInput);
// }

// EleTooltipSelect.install = function (Vue) {
//   Vue.component(EleTooltipSelect.name, EleTooltipSelect);
// }

const installer = {
	EleTooltipInput,
	EleTooltipSelect,
}
const batchBindInstall = (obj) => {
	for (let i in obj) {
		console.log(i)
		const currInstaller = installer[i]
		currInstaller.install = (Vue) => {
			Vue.component(currInstaller.name, currInstaller)
		}
		// installer[i].component(installer[i].name, installer[i])
	}
}
batchBindInstall(installer)


export {
  EleTooltipInput,
  EleTooltipSelect
}
