import React, { useState } from "react";
import { Modal } from "antd";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import NewPackForm from "../NewPackForm/NewPackForm";

function NewPackModal({ onResult, packs }) {
	const [visible, setVisible] = useState(false);

	const showModal = () => setVisible(true);

	const closeModal = e => {
		setVisible(false);
	};

	const onFormResult = result => {
		closeModal();
		return onResult && onResult(result);
	};

	return (
		<div>
			<CustomButton text="Nuevo Pack" onClick={showModal} />
			<Modal
				title="Alta pack prepago"
				onOk={closeModal}
				visible={visible}
				onCancel={closeModal}
				destroyOnClose={true}
				footer={null}
			>
				<NewPackForm packs={packs} onResult={onFormResult} />
			</Modal>
		</div>
	);
}

export default NewPackModal;
