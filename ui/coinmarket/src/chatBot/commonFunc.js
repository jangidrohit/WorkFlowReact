export function onSend(evt, props, inputVal, error, type) {
	const {actions}=props;
	var senderObj = {
		text : inputVal,
		error : error,
		type : type
	}
	actions.onChangeInput(senderObj);
}