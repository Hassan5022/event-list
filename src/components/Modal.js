import ReactDOM from "react-dom";
import "./Modal.css";

export default function Modal({ children }) {
	return ReactDOM.createPortal((
		<div className="modal-back">
			<div className="modal">
				{children}
			</div>
		</div>
	), document.body);
}
