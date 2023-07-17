import React from "react";
import styles from "./Component.module.css";
import { AiOutlineHome, AiOutlinePhone } from "react-icons/ai";

const Component = () => {
	return (
		<div className={styles.contact}>
			<div className={styles.phone}>
				<p>Contact:</p> <AiOutlinePhone /> <p>321 324 421</p>
			</div>
			<div>
				<AiOutlineHome /> <p>ul. Polna 8, 40-123 Katowice</p>
			</div>
		</div>
	);
};

export default Component;
