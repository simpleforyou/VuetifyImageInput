import Function_cast from '/utils/Function/cast';

export default function($createElement) {
	let {
		clear,
		clearIcon,
		disabled,
	} = this;
	clearIcon = Function_cast(clearIcon).call(this);
	return $createElement(
		'v-btn',
		{
			class: 'ma-1',
			props: {
				disabled,
				flat: true,
				icon: true,
			},
			on: {
				click: clear,
			},
		},
		[$createElement('v-icon', clearIcon)],
	);
}
