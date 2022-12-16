export const useArticlesStore = defineStore({
	id: "article-store",
	state: () => {
		return {
			articles: [
				{
					cat: "Blog 1",
					link: "/blog/blog-1",
					date: "dec. 16, 2022",
					img: "/img/articles/blog1.jpg",
					title: "The Future of Artificial Intelligence Is Less Artificial and More Intelligent",
					desc: "Artificial intelligence is on the tip of everyone's tongue in the technological world. I have noticed that artificial intelligence is gaining increasing importance and appearing to be the most demanded domain of expertise even for job seekers in different markets."
				},
				{
					cat: "Blog 2",
					link: "/blog/blog-2",
					date: "dec. 16, 2022",
					img: "/img/articles/blog2.png",
					title: "Gamification of Education and Learning: A Review of the Empirical Literature",
					desc: "Gamification has indeed become one of the most important aspects of technological advancement for humans (Fitz, 2022). Gamification has been implemented in education in which there is support and retaining of engagement which seems to be a constant challenge."
				},
				{
					cat: "Blog 3",
					link: "/blog/blog-3",
					date: "dec. 16, 2022",
					img: "/img/articles/blog3.png",
					title: "SWOT Analysis of Peng Restaurant",
					desc: "Peng follows a simple phenomenon in which there is the ordering of the food which moves to the counter and then the food is delivered from the counter to the consumers. However the management intends to move from the traditional processes."
				},
				{
					cat: "Blog 4",
					link: "/blog/blog-4",
					date: "dec. 16, 2022",
					img: "/img/articles/blog4.png",
					title: "Proposed Strategies for Peng Restaurant",
					desc: "The fast-food restaurant business is growing g in the UK. The market has grown from 9% in the year 2021 from $18.9 billion to $20.61 billion in the year 2022 (Aviko, 2022)"
				},
				{
					cat: "Blog 5",
					link: "/blog/blog-5",
					date: "dec. 16, 2022",
					img: "/img/articles/blog5.png",
					title: "Digital Transformation in Peng Restaurant",
					desc: "The idea of digital transformation in the restaurant business will have a huge positive impact on the business of fast-food restaurants. The incorporation of innovation and technological values in the business will be detrimental for the business to increase communication and the business to expand at an exponential speed."
				}
			]
		};
	},
	actions: {},
	getters: {
		getarticlestore: (state) => state.articles
	}
});
