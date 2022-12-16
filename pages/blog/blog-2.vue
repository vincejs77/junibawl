<template>
  <div class="about-view">
    <section class="app-wrapper">
      <div
        class="app-container pt-36 sm:pt-40 sm:pb-0 pb-0 border-l border-r border-gray-300"
      >
        <div class="max-w-4xl text-center mx-auto">
          <div class="mb-6">
            <span class="text-indigo-600 font-semibold"> {{ articles[1].cat }} </span>
          </div>
          <h1 class="text-center text-2xl sm:text-4xl font-bold">
            {{ articles[1].title }}
          </h1>
          <div class="flex justify-center items-center text-lg text-gray-500 mt-4">
            Bulabula AWAZI
            <div class="h-2 w-2 bg-indigo-700 rounded-full mx-4"></div>
            <span class="text-gray-400">Author</span>
          </div>
        </div>
        <div class="w-full mt-12">
          <img
            class="w-full max-h-[500px] object-cover"
            :src="articles[1].img"
            :alt="articles[1].title"
          />
        </div>
        <div class="app-blog-content max-w-4xl text-left mx-auto mt-8 sm:mt-12">
          <p>
            Gamification has indeed become one of the most important aspects of
            technological advancement for humans
            <NuxtLink href="#ref1">(Fitz, 2022)</NuxtLink> . Gamification has been
            implemented in education in which there is support and retaining of engagement
            which seems to be a constant challenge.
          </p>
          <p>
            There is research evaluating that Gamification enhances the level of
            engagement of the students in the classrooms. It is also evaluated that a
            game-like atmosphere is favored in classrooms that potentially help in
            fostering a culture of increased productivity among the students. The main
            idea associated with Gamification includes the approach of motivating the
            students to use the games and bringing the culture of the gaming environment
            to the learning of the individuals
            <NuxtLink href="#ref1">(Fitz, 2022)</NuxtLink> . The other aim is the
            maximization of the enjoyment level among the students which will inspire the
            students to study hard with a more engaging attribute.
          </p>
          <p>
            In recent dynamic times, Covid-19 has forced many higher educational
            institutions to embrace online teaching. Online teaching is also regarded as
            the pattern in which there is a lack of exposure to talent and a reduced level
            of satisfaction compared to in-person teaching. Some of the reaches indicated
            that in a survey among 400 college students who attended online classes and
            there was an evaluation that the participant's lack of motivation and
            in-person interaction with the students and teachers. To counter the troubles
            the element of gamification is applied in education to promote learning and
            completion of lesson activities.
          </p>
          <p>
            Despite growing interest in the classes in which there is gamification, there
            has not been evidence of the students being consistently for the motivation of
            the students. For instance that gamification can be used in the form of
            awarding the learners with badges and experience points which will be helping
            the students to get into course activities or also they can be engaged in the
            active answering of the questions of the concerned questions. However, there
            are also some serious implications for the learning outcomes of the students.
          </p>
          <p class="img">
            <img src="/img/articles/blog2.jpg" alt="" />
            <span class="underline text-gray-500 text-xs"
              >Figure 1: Students learning in class through gamification
            </span>
          </p>
          <p>
            The paper illustrates that if there is the use of goal access feedback
            challenge collaboration then there can be effective incorporation of the
            engagement of the student in the learning performances at the university
            campus of the users. The model was developed by Huang and Hew in 2018 in which
            there is the theoretical inclusion of five main theories of motivation
            <NuxtLink href="#ref2">(Bai, 2022)</NuxtLink> . The GAFCC Gamification design
            illustrates that the five main theories included are the goal, set theory,
            flow theory, self-determination theory, social comparison theory, and
            behavioral reinforcement theory.
          </p>

          <p class="img">
            <img src="/img/articles/blog21.jpg" alt="" />
            <span class="underline text-gray-500 text-xs"
              >Figure 2: Gamification increasing motivation among students to explore more
              things
            </span>
          </p>

          <p>
            The research also highlights that the students who tend to earn through
            gamification are likely to be highly creative thinkers and they can be more
            elaborative and reflective and can present their evaluation more concretely.
            Moreover, the inclusion of gamification in online learning will enhance the
            cognitive skills of the individual and they are highly adaptive to the
            different attributes of their lives. <br /><br />
            The research further raises the point that the students are more interested in
            fantasy things through gamification rarer they relate the things with their
            courses. However, the research remains silent about removing the fantasies
            among the students rather than relating the gamification in learning the
            course materials to the students.
          </p>
          <p>
            The article sums up the most essential notion that there has been an
            increasing reliance on COVID-19 as educational institutions are conducting
            lessons on internet platforms yet online learning is less engaging as a
            compared person to personal teaching. It has affected the learning and
            competencies of the students. The GAFCC gamification model allows a greater
            understanding along with the development of cognitive skills of the students.
          </p>
        </div>
      </div>
    </section>

    <section class="app-wrapper">
      <div class="app-container py-16 sm:py-24 pb-0 border-l border-r border-gray-300">
        <div class="flex justify-between item-center">
          <h2 class="text-xl sm:text-3xl font-bold mb-12">
            Next Blog
            <span class="text-gray-400">
              <span class="mx-2">-</span> {{ articles[2].cat }}</span
            >
          </h2>
          <NuxtLink to="./" class="text-indigo-600 font-semibold"> ./Home </NuxtLink>
        </div>

        <NuxtLink
          :to="articles[2].link"
          class="group overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
        >
          <div
            class="lg:flex lg:justify-between sm:border-t border border-t-0 border-gray-300"
          >
            <img :src="articles[2].img" class="object-cover w-full h-64" alt="" />
            <div class="px-3 py-4 sm:p-5">
              <div class="">
                <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <NuxtLink
                    :to="articles[2].link"
                    class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  >
                    {{ articles[2].cat }}
                  </NuxtLink>
                  <span class="text-gray-600"> — {{ articles[2].date }}</span>
                </p>
                <NuxtLink
                  :to="link"
                  aria-label="Category"
                  class="inline-block line-clamp-3 my-3 mb-5 text-xl sm:text-2xl font-semibold transition-colors duration-200 group-hover:underline group-hover:text-indigo-500"
                >
                  {{ articles[2].title }}
                </NuxtLink>
              </div>
              <p class="mb-2 text-gray-500 line-clamp-3">
                {{ articles[2].desc }}
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

const title = ref(articles[1].title);

useHead({
  title,
});
</script>
