<template>
  <div class="about-view">
    <section class="app-wrapper">
      <div
        class="app-container pt-36 sm:pt-40 sm:pb-0 pb-0 border-l border-r border-gray-300"
      >
        <div class="max-w-4xl text-center mx-auto">
          <div class="mb-6">
            <span class="text-indigo-600 font-semibold underline">
              {{ articles[0].cat }}
            </span>
          </div>
          <h1 class="text-center text-2xl sm:text-4xl font-bold">
            {{ articles[0].title }}
          </h1>
          <div class="flex justify-center items-center text-base text-gray-500 mt-4">
            Bulabula AWAZI
            <div class="h-2 w-2 bg-indigo-700 rounded-full mx-4"></div>
            <span class="text-gray-400">{{ articles[0].date }}</span>
          </div>
        </div>
        <div class="w-full mt-12">
          <img
            class="w-full max-h-[500px] object-cover"
            :src="articles[0].img"
            :alt="articles[0].title"
          />
        </div>

        <div class="app-blog-content max-w-4xl text-left mx-auto mt-8 sm:mt-12">
          <p>
            Artificial intelligence is on the tip of everyone's tongue in the
            technological world. I have noticed that artificial intelligence is gaining
            increasing importance and appearing to be the most demanded domain of
            expertise even for job seekers in different markets. AI is not restricted to
            scientific fantasies or making robots for the assistance of humans rather we
            are experiencing AI in our daily lives.
          </p>

          <p>
            In reality, AI is working all around us which is impacting the lives of every
            individual. From the accessibility to Facebook to the search history to the
            online shopping or dating platforms AI has indulged immensely in our lives. In
            the last four years, the use of AI in the different sectors of business has
            grown by 270% penetrating every business and affecting all the individuals of
            the world who are connected with technology
            <NuxtLink href="#ref1">(Livingston, 2022)</NuxtLink>.
          </p>

          <p>
            Experts believe that the increasing artificial intelligence will be making
            people better off over the next decade better. Artificial intelligence works
            on the amplification of the effectiveness and intelligence of humans. Yet
            there is a major threat to human autonomy, agency, and capabilities of the
            human. Computers in the modern age are matching and even exceeding human
            intelligence and competencies on the tasks to carry out complex decisions
            along with reasoning and learning among individuals.
          </p>
          <p class="img">
            <img src="/img/articles/blog1.jpg" alt="" />
            <span class="underline text-gray-500 text-xs"
              >Figure 1: Integrating humans and AI
            </span>
          </p>
          <p>
            Well, I believe that Artificial intelligence is essential these days as it is
            forming the foundation of computer learning. With the help of Artificial
            Intelligence, there is the harnessing of a massive level of data which is used
            in learning the intelligence to make informed decisions along with discoveries
            in simple fractions of time. AI has a strong promising future. According to
            the research conducted by scientists at the University of Oxford Artificial
            Intelligence will be better than humans in the translation of languages by
            2024. <br /><br />
            AI will be writing school essays by 2026, selling different types of goods by
            2031 and the technology will also be writing a bestselling book by 2049. The
            technology will be advanced to an extent in the future that it will be
            conducting surgeries by the year 2053. One of the Oracle and venture
            capitalist Dr. Kai-Fu Lee stated that AI will be transforming the world more
            than done by anything in the history of mankind
            <NuxtLink href="#ref2">(Ashley, 2022)</NuxtLink>. Even it will do changes even
            more than done by electricity.
          </p>

          <p>
            AI will be transforming lives in the future but the beginning of the
            transformation has already been stated. Even in the present time, there is the
            availability of some super excellent robots performing quality work at
            different businesses. However, in the coming years, it is believed that there
            will be no survival of humans without artificial intelligence. The next few
            years will be the time when hotel rooms will be opening with the facial
            recognition tool.
          </p>

          <p>
            Facial recognition will also be used for easier and more effective
            transactions of the business. The face of the individual will likely become a
            model for all his transactions. Similarly, the delivery of food and goods will
            be made with the help of drone services which will be delivering the orders in
            a few minutes <NuxtLink href="#ref3">(Livingston, 2022)</NuxtLink>. Robots
            will e taking the orders of the customers and even in the booking of the
            appointments. Seeking the importance of artificial intelligence, the big
            companies are in the race of implementing artificial intelligence in their
            daily lives which is going to give some exciting future to artificial
            intelligence.
          </p>

          <p class="img">
            <img src="/img/articles/blog11.jpg" alt="" />
            <span class="underline text-gray-500 text-xs"
              >Figure 2: Humans and AI working together
              <NuxtLink href="#ref4">(Ashley, 2022)</NuxtLink>
            </span>
          </p>

          <p>
            Artificial intelligence anticipates reaching around $300 billion by the end of
            the year 2030 <NuxtLink href="#ref4">(Ashley, 2022)</NuxtLink>. In the next
            decade, artificial intelligence will be used for the reduction of costs and in
            increasing productivity in the banking field. One of the most anticipated and
            game-changing elements in the banking sector as they will e presenting a
            spacious time for wealth managers and the customers.
          </p>
        </div>
      </div>
    </section>

    <section class="app-wrapper">
      <div class="app-container py-16 sm:py-24 pb-20 border-l border-r border-gray-300">
        <div class="flex justify-between item-center">
          <h2 class="text-xl sm:text-3xl font-bold mb-12">
            Next Blog
            <span class="text-gray-400">
              <span class="mx-2">-</span> {{ articles[1].cat }}</span
            >
          </h2>
          <NuxtLink to="/" class="text-indigo-600 font-semibold underline">
            ./Home
          </NuxtLink>
        </div>

        <NuxtLink
          :to="articles[1].link"
          class="group overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
        >
          <div
            class="lg:flex lg:justify-between sm:border-t border border-t-0 border-gray-300"
          >
            <img :src="articles[1].img" class="object-cover w-full h-64" alt="" />
            <div class="px-3 py-4 sm:p-5">
              <div class="">
                <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <NuxtLink
                    :to="articles[1].link"
                    class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  >
                    {{ articles[1].cat }}
                  </NuxtLink>
                  <span class="text-gray-600"> — {{ articles[1].date }}</span>
                </p>
                <NuxtLink
                  :to="link"
                  aria-label="Category"
                  class="inline-block line-clamp-3 my-3 mb-5 text-xl sm:text-2xl font-semibold transition-colors duration-200 group-hover:underline group-hover:text-indigo-500"
                >
                  {{ articles[1].title }}
                </NuxtLink>
              </div>
              <p class="mb-2 text-gray-500 line-clamp-3">
                {{ articles[1].desc }}
              </p>
              <NuxtLink
                :to="link"
                aria-label=""
                class="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-500 underline"
                >Learn more</NuxtLink
              >
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useArticlesStore } from "~/store/articles";

const articles = useArticlesStore().$state.articles;

console.log();

const title = ref(articles[0].title);

useHead({
  title,
});
</script>
