<template>
<div class="preloader">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>

        <div class="preloader-heading">
            <div class="load-text">
                <span>L</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';

onMounted(() => {
  const svg = document.getElementById("preloaderSvg");
	const tl = gsap.timeline();
	const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
	const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

	tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
		delay: 1.5,
		y: -100,
		opacity: 0,
	});
	tl.to(svg, {
		duration: 0.5,
		attr: { d: curve },
		ease: "power2.easeIn",
	}).to(svg, {
		duration: 0.5,
		attr: { d: flat },
		ease: "power2.easeOut",
	});
	tl.to(".preloader", {
		y: -1500,
	});
	tl.to(".preloader", {
		zIndex: -1,
		display: "none",
	});
})
</script>

<style>
.preloader {
	position: fixed;
	z-index: 10;
	height: 100vh;
	width: 100%;
	left: 0;
	top: 0;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	overflow: hidden;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	background: transparent;
	z-index: 99999999999999;
}

.preloader svg {
	position: absolute;
	top: 0;
	width: 100vw;
	height: 110vh;
	fill: #050709;
}

.preloader .preloader-heading .load-text {
	font-size: 20px;
	font-weight: 200;
	letter-spacing: 15px;
	text-transform: uppercase;
	z-index: 20;
}

.load-text span {
	-webkit-animation: loading 1s infinite alternate;
	animation: loading 1s infinite alternate;
}

.load-text span:nth-child(1) {
	-webkit-animation-delay: 0s;
	animation-delay: 0s;
}

.load-text span:nth-child(2) {
	-webkit-animation-delay: 0.1s;
	animation-delay: 0.1s;
}

.load-text span:nth-child(3) {
	-webkit-animation-delay: 0.2s;
	animation-delay: 0.2s;
}

.load-text span:nth-child(4) {
	-webkit-animation-delay: 0.3s;
	animation-delay: 0.3s;
}

.load-text span:nth-child(5) {
	-webkit-animation-delay: 0.4s;
	animation-delay: 0.4s;
}

.load-text span:nth-child(6) {
	-webkit-animation-delay: 0.5s;
	animation-delay: 0.5s;
}

.load-text span:nth-child(7) {
	-webkit-animation-delay: 0.6s;
	animation-delay: 0.6s;
}

@-webkit-keyframes loading {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

@keyframes loading {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
</style>
