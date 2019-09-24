import React, { Component } from 'react';

export default function ProductItem(props) {
	const productInfo = props.productInfo;
	const isMini = props.isMini;

	return (
		<article className="item">
			<img src={productInfo.picture} className="item__image" />
			<section className="item__info">
				<h2>{productInfo.name}</h2>
				<p>{productInfo.description_short}</p>
				{!isMini && <p>{productInfo.description}</p>}

				<p className="item__price">{productInfo.price}</p>
				{props.productActions}
			</section>
			{productInfo.onSale && <span className="on-sale">SALE</span>}
		</article>
	);
}
