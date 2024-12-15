import { IPlayerInfo } from "../../types";

import "./StartScreen.css";

const StartScreen: React.FC<{
	start: (file?: File | null) => void;
	saveNames: boolean | Record<string, IPlayerInfo | null>;
	setShowSaves: React.Dispatch<React.SetStateAction<boolean>>;
	updateSaves: () => Promise<void>;
}> = ({ start, saveNames, setShowSaves, updateSaves }) => {
	return (
		<div className="start-screen">
			<div className="start-screen__button" onClick={() => start()}>
				Play
			</div>
			{!!saveNames && (
				<div
					className="start-screen__button"
					onClick={() => {
						if (saveNames === true) {
							updateSaves().then(() => setShowSaves((prev) => !prev));
						} else {
							setShowSaves((prev) => !prev);
						}
					}}
				>
					Manage Saves
				</div>
			)}
				F8 toggles 4:3 & stretched
			<a
				className="start-screen__manual-link"
				href="/diablo_web_simple/manual_en.pdf"
				target="_blank"
				rel="noopener noreferrer"
			>
				view manual
			</a>
			<a
				className="start-screen__manual-link"
				href="/diablo_web_simple/manual_de.pdf"
				target="_blank"
				rel="noopener noreferrer"
			>
				zeige Handbuch
			</a>
		</div>
	);
};

export default StartScreen;
