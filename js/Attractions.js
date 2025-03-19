const attractionsSection = document.querySelector('.attractions');
		const observerOptions = {
			root: null, // viewport를 기준으로 관찰
			threshold: 0.1 // 섹션이 10% 보일 때 트리거
		};

		const observerCallback = (entries) => {
			if (window.innerWidth >= 768) { // 768 이상의 해상도에서만 동작
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const sectionMiddle = attractionsSection.offsetTop + (attractionsSection.offsetHeight / 2) - (window.innerHeight / 2);
						window.scrollTo({
							top: sectionMiddle, // 섹션의 중간으로 스크롤 이동
							behavior: 'smooth' // 부드러운 스크롤 효과
						});

						// 한번만 실행되도록 observer 해제
						observer.unobserve(attractionsSection);
					}
				});
			}
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);
		observer.observe(attractionsSection);