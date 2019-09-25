import React from 'react';
import styles from '../styles/clothing-sizes.module.css';

const ClothingSizes = (props) => {
	return (
		<section className={styles.clothingSizes}>
			<p>Size</p>
			<ol>
				<li>
					<input type={props.typeInput} value="small" id="small"/>
					<label htmlFor="small">Small (2,319)</label>
				</li>
				<li>
					<input type={props.typeInput} value="medium" id="medium"/>
					<label htmlFor="medium">Medium (1,282)</label>
				</li>
				<li>
					<input type={props.typeInput} value="large" id="large"/>
					<label htmlFor="large">Large (1,392)</label>
				</li>
			</ol>
		</section>
	)
}

export default ClothingSizes;
