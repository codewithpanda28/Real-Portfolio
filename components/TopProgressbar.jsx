"use client"
import { useRouter } from "next/navigation";
import NProgress from "nprogress";

let timer;
let state;
let activeRequests = 0;

function load() {
	if (state === "loading") {
		return;
	}

	state = "loading";

	timer = setTimeout(() => {
		NProgress.start();
	}, 1);
}

function stop() {
	if (activeRequests > 0) {
		return;
	}

	state = "stop";

	clearTimeout(timer);
	NProgress.done();
}

function routeChangeStart() {
	if (window.location.pathname !== window.location.pathname) {
		load();
	}
}

const router = useRouter();
router.events.on("routeChangeStart", routeChangeStart);
router.events.on("routeChangeComplete", stop);
router.events.on("routeChangeError", stop);

const originalFetch = window.fetch;
window.fetch = async function (...args) {
	if (activeRequests === 0) {
		load();
	}

	activeRequests++;

	try {
		const response = await originalFetch(...args);
		return response;
	} catch (error) {
		return Promise.reject(error);
	} finally {
		activeRequests -= 1;
		if (activeRequests === 0) {
			stop();
		}
	}
};

export default function TopProgressbar() {
	return null;
}