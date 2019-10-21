import React, { useState } from "react";
import { Modal } from "antd";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import NewPackForm from "../../molecules/NewPackForm/NewPackForm";

function NewPackModal({ text }) {
	const [visible, setVisible] = useState(false);

	const showModal = () => setVisible(true);

	const handleOk = e => {
		setVisible(false);
	};

	const handleCancel = e => {
		setVisible(false);
	};

	const onFormResult = result => {
		if (result) {
			handleOk();
		} else {
			handleCancel();
		}
	};

	return (
		<div>
			<CustomButton text={text} onClick={showModal} />
			<Modal
				title="Alta pack prepago"
				onOk={handleOk}
				visible={visible}
				onCancel={handleCancel}
        destroyOnClose={true}
        footer={null}
			>
				<NewPackForm onResult={onFormResult} />
			</Modal>
		</div>
	);
}

export default NewPackModal;
