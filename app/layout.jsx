'use client'
import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import TopProgressBar from "@/components/TopProgressBar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Chat from "@/components/Chat";

import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import TopProgressbar from "@/components/TopProgressbar";

export const Getmetadata = {
	title: "Akash | Portofolio",
	description:
		"My name is Akash, I'm a Frontend Developer and I'm passionate about it.",
	author: "Akash Kumar",
	siteUrl: "https://www.Akash.my.id",
	applicationName: "Akash",
	keywords: [
		"Akash",
		"Akash",
		"Akash Kumar",
	],
	openGraph: {
		type: "website",
		url: "https://www.Akash.my.id",
		title: "Akash | Portofolio",
		site_name: "Akash | Portofolio",
		description: "My name is Akash, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Akash Portofolio",
			},
		],
		site_name: "Akash | Portofolio",
	},
};


<script src="                        
<script type='text/javascript'>
		(function(I, L, T, i, c, k, s) {if(I.iticks) return;I.iticks = {host:c, settings:s, clientId:k, cdn:L, queue:[]};var h = T.head || T.documentElement;var e = T.createElement(i);var l = I.location;e.async = true;e.src = (L||c)+'/client/inject-v2.min.js';h.insertBefore(e, h.firstChild);I.iticks.call = function(a, b) {I.iticks.queue.push([a, b]);};})(window, 'https://cdn-v1.intelliticks.com/prod/common', document, 'script', 'https://app.intelliticks.com', 'J4fDHQqfA2bsFcfJq_c', {});
</script>
                    "></script>

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
