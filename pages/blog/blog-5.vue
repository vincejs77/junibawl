<template>
  <div class="about-view">
    <section class="app-wrapper">
      <div
        class="app-container pt-36 sm:pt-40 sm:pb-0 pb-0 border-l border-r border-gray-300"
      >
        <div class="max-w-4xl text-center mx-auto">
          <div class="mb-6">
            <span class="text-indigo-600 font-semibold underline">
              {{ articles[4].cat }}
            </span>
          </div>
          <h1 class="text-center text-2xl sm:text-4xl font-bold">
            {{ articles[4].title }}
          </h1>
          <div class="flex justify-center items-center text-base text-gray-500 mt-4">
            Bulabula AWAZI
            <div class="h-2 w-2 bg-indigo-700 rounded-full mx-4"></div>
            <span class="text-gray-400">{{ articles[4].date }}</span>
          </div>
        </div>
        <div class="w-full mt-12">
          <img
            class="w-full max-h-[500px] object-cover"
            :src="articles[4].img"
            :alt="articles[4].title"
          />
        </div>

        <div class="app-blog-content max-w-4xl text-left mx-auto mt-8 sm:mt-12">
          <p>
            The idea of digital transformation in the restaurant business will have a huge
            positive impact on the business of fast-food restaurants. The incorporation of
            innovation and technological values in the business will be detrimental for
            the business to increase communication and the business to expand at an
            exponential speed. Through the installation of virtual counters and
            introduction of drones there will be an increased flow of orders and
            transactions in the business. The collection of payment through online forums
            will also bring convenience for the buyers and the management.
          </p>
          <p>
            There is the requirement of developing a roadmap in which there can be an
            integrated system, for the development of a model that will be bringing
            efficiencies in the fast-food restaurant of Peng.
          </p>
          <p class="img">
            <img src="/img/articles/blog5.png" alt="" />
            <span class="underline text-gray-500 text-xs"
              >Figure 1: Diffusion Innovation Model
            </span>
          </p>

          <p>
            The idea can be implemented by developing a roadmap through the diffusion
            innovation model in which the products gains momentum in the start and then
            the idea is likely to diffuse or spread over time through a social system
            <NuxtLink href="#ref1"> (Pinho, 2021) </NuxtLink> . In many of the business
            there is already utilization of virtual counters and the business-like Uber
            Eats and Amazon are making the best from the drone deliveries of the goods. It
            is expected that the introduction of these technologies in the business will
            not bring efficiencies but the mistakes in order taking and delivery will be
            reduced as all the things will be automated and computerized.
          </p>

          <p>
            The major gap analysis in the fast-food restaurant of Peng is observed in the
            ordering of the customers and then waiting to receive their orders
            <NuxtLink href="#ref1">(Shashati, 2022)</NuxtLink>. It is not only creating
            panic for the customers but the management of the company is also highly prone
            to make errors that will possibly be upsetting the whole mechanism of the
            ordering and delivery of the food to the customers. The assessment of gap
            analysis illustrates that the processes used by the companies and the
          </p>

          <p>
            Notably, technology and transforming the operations of the business digitally
            is not a guarantee to the success of the business
            <NuxtLink href="#ref1">(Forbes, 2021)</NuxtLink>. It is simply an enabler that
            allows resolving problems in a fast and better way. At Peng the main idea of
            the business is the takeaway of Chinese food so the proposed business model is
            also framed in a way that there is convenience in the business and the
            operations of the business can expedite to facilitate the end consumers.
          </p>

          <p class="img">
            <img src="/img/articles/blog51.png" alt="" />
            <span class="underline text-gray-500 text-xs"
              >Figure 1: Proposed business model for Peng (Self-made)
            </span>
          </p>

          <p>
            The proposed business model opens up ways of expanding the business in new
            dimensions as the consumers will not be requiring waiting in queues to get
            their orders prepared. Similarly, drone activities for the delivery of food
            orders will also expedite the overall process of providing food to consumers.
            It will not only scale upon the business but will also work towards the
            reduction of costs of the business.
          </p>

          <h2 class="italic">Challenges and Recommendations in the New Business Model</h2>
          <p>
            The downside of the model will lie in the fact as the employees of the company
            will be facing difficulty in carrying on their jobs. Moreover, there can be
            some technical issues in the running of the drones which might not end up
            delivering the food to the right destination. However, there are multiple ways
            too to deal with the situation once the business starts transitioning the
            model. In the start the drones can be used for a limited range and then the
            range can be increased. The employees losing the jobs at the restaurant can be
            employed in telling the ways the virtual counters will be working and in
            managing the delivery system of the food.
          </p>
        </div>
      </div>
    </section>

    <section class="app-wrapper">
      <div class="app-container py-16 sm:py-24 pb-20 border-l border-r border-gray-300">
        <div class="flex justify-between item-center">
          <h2 class="text-xl sm:text-3xl font-bold mb-12">
            Return to
            <span class="text-gray-400">
              <span class="mx-2">-</span> {{ articles[0].cat }}</span
            >
          </h2>
          <NuxtLink to="/" class="text-indigo-600 font-semibold underline">
            ./Home
          </NuxtLink>
        </div>

        <NuxtLink
          :to="articles[0].link"
          class="group overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
        >
          <div
            class="lg:flex lg:justify-between sm:border-t border border-t-0 border-gray-300"
          >
            <img :src="articles[0].img" class="object-cover w-full h-64" alt="" />
            <div class="px-3 py-4 sm:p-5">
              <div class="">
                <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <NuxtLink
                    :to="articles[0].link"
                    class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  >
                    {{ articles[0].cat }}
                  </NuxtLink>
                  <span class="text-gray-600"> — {{ articles[0].date }}</span>
                </p>
                <NuxtLink
                  :to="link"
                  aria-label="Category"
                  class="inline-block line-clamp-3 my-3 mb-5 text-xl sm:text-2xl font-semibold transition-colors duration-200 group-hover:underline group-hover:text-indigo-500"
                >
                  {{ articles[0].title }}
                </NuxtLink>
              </div>
              <p class="mb-2 text-gray-500 line-clamp-3">
                {{ articles[0].desc }}
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

const title = ref("Bulabula AWAZI" + articles[4].title);

const meta = [
  // <meta name="viewport" content="width=device-width, initial-scale=1">
  {
    name: "description",
    content: articles[4].desc,
  },

  // Social
  { property: "og:title", content: "Bulabula AWAZI" + articles[4].title },
  {
    property: "og:description",
    content: articles[4].desc,
  },
  {
    property: "og:url",
    content: "https://bulabulaawazi.vercel.app/" + articles[4].link,
  },
  {
    property: "og:image",
    content: "https://bulabulaawazi.vercel.app" + articles[4].img,
  },
  { name: "twitter:title", content: "Bulabula AWAZI" + articles[4].title },
  {
    name: "twitter:description",
    content: articles[4].desc,
  },
  {
    name: "twitter:image",
    content: "https://bulabulaawazi.vercel.app" + articles[4].img,
  },
  { name: "twitter:card", content: "summary_large_image" },
];

useHead({
  title,
  meta,
});
</script>
