import React, { Component } from 'react';
import Gallery from "../components/Gallery";

export default function HomePage() {
	return (
		<main className="page-home">
			<article className="filters">
				<section className="filters__price">
					<p>Filter by price</p>
					<span>-</span>
					<span></span>
				</section>
			</article>
			<Gallery></Gallery>
		</main>
	);
}
