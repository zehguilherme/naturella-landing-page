import type { Metadata } from "next";
import Image from "next/image";

import { Header } from "../components/Header";

import profile from "../img/profile.png";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
	title: "Sobre - Naturella",
	description: "Informações gerais sobre a empresa.",
};

export default function About() {
	return (
		<>
			<Header />

			<main className="flex flex-col items-center justify-center gap-6 p-6">
				<Image
					src={profile}
					alt="Imagem de uma mulher negra de cabelos cacheados, com uma camisa branca e que está de braços cruzados"
				/>

				<div className="flex flex-col gap-5">
					<p className="font-medium text-base-sm text-black">
						Bem-vindo ao nosso espaço dedicado à arte e funcionalidade do
						concreto! Nosso trabalho é transformar um dos materiais mais
						duráveis e versáteis do mundo em peças únicas que aliam design,
						resistência e praticidade.
					</p>

					<p className="font-medium text-base-sm text-black">
						Cada peça é cuidadosamente elaborada, desde o planejamento até a
						finalização, garantindo um alto padrão de qualidade para quem
						valoriza tanto a estética quanto a durabilidade. Oferecemos desde
						itens decorativos até peças funcionais, perfeitas para projetos de
						arquitetura, design de interiores ou paisagismo.
					</p>

					<p className="font-medium text-base-sm text-black">
						Nosso compromisso é entregar soluções criativas e robustas, ajudando
						você a trazer mais estilo e modernidade aos seus ambientes. Explore
						nossas coleções e descubra como o concreto pode transformar qualquer
						espaço com elegância e resistência.
					</p>
				</div>
			</main>

			<Footer />
		</>
	);
}