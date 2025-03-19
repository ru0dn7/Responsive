$(document).ready(function () {
	// Swiper 초기화
	var swiper = new Swiper(".sub-swiper01", {
		scrollbar: {
			el: ".scrollbar-outdoor",
			hide: true,
		},
		slidesPerView: 1.5,
		spaceBetween: 20,
		// loop: true,
		autoplay: {
			delay: 2000,
		},
		breakpoints: {
			480: {
				slidesPerView: 2.5,
			},
			768: {
				slidesPerView: 3.4,
			},
			1280: {
				slidesPerView: 4.4,
			},
		},
	});

	var swiper02 = new Swiper(".sub-swiper02", {
		scrollbar: {
			el: ".scrollbar-cave",
			hide: true,
		},
		slidesPerView: 1.5,
		spaceBetween: 20,
		// loop: true,
		autoplay: {
			delay: 2000,
		},
		breakpoints: {
			480: {
				slidesPerView: 2.5,
			},
			768: {
				slidesPerView: 3.4,
			},
			1280: {
				slidesPerView: 4.4,
			},
		},
	});

	var swiper03 = new Swiper(".sub-swiper03", {
		scrollbar: {
			el: ".scrollbar-beaches",
			hide: true,
		},
		slidesPerView: 1.5,
		spaceBetween: 20,
		// loop: true,
		autoplay: {
			delay: 2000,
		},
		breakpoints: {
			480: {
				slidesPerView: 2.5,
			},
			768: {
				slidesPerView: 3.4,
			},
			1280: {
				slidesPerView: 4.4,
			},
		},
	});

	// 슬라이드 데이터 설정
	const slideData = {
		outdoor: [{
				// 정방폭포
				tit: "Jeongbang Falls",
				info: "Jeongbang Falls is one of the three major waterfalls of Jeju Island along with Cheonjiyeon Falls and Cheonjeyeon Falls, and is the only waterfall in Korea where water falls directly into the sea. The two 23m high waterfalls create a magnificent view with the refreshing sound of the waterfalls shooting from the black cliffs and the cool sea.",
				image: "./images/sub02/outdoor01.png",
			},
			{
				// 성산일출봉
				tit: "Seongsan Sunrise Peak",
				info: "Seongsan Ilchulbong is a volcano that was formed by a volcanic eruption about 5,000 years ago when the sea level was the same as it is now. There are 99 large peaks (rocks) around the crater. It was named Seongsan (城山) because it looks like a huge castle, and Ilchulbong (日出峰) because the sunrise is spectacular.",
				image: "./images/sub02/outdoor02.png",
			},
			{
				// 한라산
				tit: "Halla Mountain",
				info: "Hallasan is a volcano located in the center of Jeju Island, covering a significant portion of the island. Hallasan is one of the three sacred mountains in South Korea and is the highest mountain in South Korea, located at the southernmost tip of the Korean Peninsula.",
				image: "./images/sub02/outdoor03.png",
			},
			{
				// 스누피가든
				tit: "Snoopy Garden",
				info: "This is a place that embodies the philosophy of SN Garden, which values ​​harmony and balance between nature and humans. There is a special life gardener named Snoopy who balances life and nature. Even in our busy daily lives, he helps us find leisure and rest by saying, “Let’s take a rest this afternoon.”",
				image: "./images/sub02/outdoor04.png",
			},
			{
				// 아르떼 뮤지엄
				tit: "Arte Museum",
				info: "The first immersive media art exhibition hall to be opened in Jeju Aewol, the works created under the theme of ETERNAL NATURE provide a complete immersive experience with visual intensity, sensory sound, and refined scents. Enter the space of eternal nature.",
				image: "./images/sub02/outdoor05.png",
			},
			{
				// 에코랜드
				tit: "Eco Land",
				info: "This is a theme park where you can experience the 30,000-square-foot Gotjawal primeval forest on a Lincoln train, handcrafted in England and modeled after the Baldwin, a steam locomotive from the 1800s. While enjoying the 4.5km train ride, you can experience the insects, animals, and various plants that live in the mysterious Gotjawal forest, making it a place where you can learn about the infinite benefits that nature gives us.",
				image: "./images/sub02/outdoor06.png",
			},
		],
		cave: [{
				// 만재굴
				tit: "Manjang Cave",
				info: "It is a lava cave of a large scale even on a global scale. There are many lava caves distributed around the world, but lava caves like Manjanggul Cave, which were formed hundreds of thousands of years ago and whose internal shape and topography are well preserved, are rare, so they have great academic and conservation value.",
				image: "./images/sub02/cave01.png",
			},
			{
				// 협재동굴
				tit: "Hyeopjae Cave",
				info: "Although it is a lava cave, it contains stalagmites and stalactites that can only be found in limestone caves, and so it is recognized for its academic value and is protected as a natural monument.",
				image: "./images/sub02/cave02.png",
			},
			{
				// 쌍용굴
				tit: "Ssangyong Cave",
				info: "It was created along with Hyeopjaegul when a volcano erupted in the Hallasan area 2.5 million years ago. It is a unique two-dimensional cave with the characteristics of a lava cave and a limestone cave, and the area is covered with a layer of sand mixed with seashells.",
				image: "./images/sub02/cave03.png",
			},
			{
				// 선흘리 벵뒤굴
				tit: "Seonheulli Bengdui Cave",
				info: "It is the world's most complex labyrinthine lava cave, formed by lava flowing in a complex path over a flat land, and is designated as a natural monument.",
				image: "./images/sub02/cave04.png",
			},
			{
				// 용천동굴
				tit: "Yongcheon Cave",
				info: "Inside the cave, lava tubes reaching up to 140m, lava waterfalls, and other lava cave formations and micro-topography are well developed, showing the typical appearance of lava caves distributed in Jeju Island.",
				image: "./images/sub02/cave05.png",
			},
			{
				// 당처물동굴
				tit: "Dangcheomul Cave",
				info: "It is a gamer after about 320,000 years in a lava cave about 3 meters below the ground by wheel activity. The special thing is that it exists because it does not exist outside during that time.",
				image: "./images/sub02/cave06.png",
			},
		],
		beaches: [{
				// 함덕해수욕장
				tit: "Hamdeok Beach",
				info: "Hamdeok Beach is one of the three major beaches in Jeju Island, with white sand and clear water. It was designated as a national tourist site in 1983.",
				image: "./images/sub02/beach01.png",
			},
			{
				// 협재해변
				tit: "Hyeopjae Beach",
				info: "The color of the sea, which seems to slowly dissolve emerald paint into clear water, is healing just by looking at it. At low tide, the silvery white sand beach with lots of seashells continues endlessly.",
				image: "./images/sub02/beach02.png",
			},
			{
				// 용머리해변
				tit: "Yongmeori Beach",
				info: "It is called Yongmeori Coast because it resembles a dragon's head diving into the sea. Sandstone cliffs that have been layered over tens of millions of years have been eroded by waves to form strange cliffs.",
				image: "./images/sub02/beach03.png",
			},
			{
				// 중문색달해변
				tit: "Jungmun Saekdal Beach",
				info: "It is made up of black, white, red, and gray sand. The white sand beach that curves like a bow and the sand called ‘Jinmosal’ are particularly worth seeing. The four-colored sand and Jeju Island’s unique black stones are in harmony.",
				image: "./images/sub02/beach04.png",
			},
			{
				// 월정리 해변
				tit: "Woljeong-ri Beach",
				info: "It is a village with a lyrical landscape whose name means 'where the moon stays.' The beautiful emerald sea spreads out like a painting, and a bright moon shines on it.",
				image: "./images/sub02/beach05.png",
			},
			{
				// 김녕해수욕장
				tit: "Kimnyeong Beach",
				info: "This is a beach in Gimnyeong Village, which is called ‘Gimnyeong’ because its shape when viewed from the sky resembles the Chinese character for ‘flat’. It was created by sand piling up on a huge rock lava, and Seongsegi means a small castle to prevent invasion by foreign powers.",
				image: "./images/sub02/beach06.png",
			},
		],
	};

	$(".swiper-slide img").on("click", function () {
		const section = $(this).closest("section");
		const sectionClass = section.attr("class").split(" ")[0];
		const index = $(this).parent().index();

		if (slideData[sectionClass] && slideData[sectionClass][index]) {
			const data = slideData[sectionClass][index];

			section.find("ul li:nth-of-type(1) strong").text(data.tit);
			section.find("ul li:nth-of-type(1) p").text(data.info);
			section.find("ul li:nth-of-type(2) img").attr("src", data.image);
		} else {
			console.error("Data not found for section:", sectionClass, "index:", index);
		}
	});
});