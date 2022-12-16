<template>
  <div class="about-view">
    <section class="app-wrapper">
      <div
        class="app-container pt-36 sm:pt-40 sm:pb-0 pb-0 border-l border-r border-gray-300"
      >
        <div class="max-w-4xl text-center mx-auto">
          <div class="mb-6">
            <span class="text-indigo-600 font-semibold"> {{ articles[2].cat }} </span>
          </div>
          <h1 class="text-center text-2xl sm:text-4xl font-bold">
            {{ articles[2].title }}
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
            :src="articles[2].img"
            :alt="articles[2].title"
          />
        </div>
        <div class="app-blog-content max-w-4xl text-left mx-auto mt-8 sm:mt-12">
          <p>
            Peng follows a simple phenomenon in which there is the ordering of the food
            which moves to the counter and then the food is delivered from the counter to
            the consumers. However the management intends to move from the traditional
            processes.
          </p>

          <p>
            SWOT analyses the internal environment of the business. It discusses the
            strengths, weaknesses, opportunities, and threats of the business. The main
            objective of SWOT analysis is to establish a structure that creates an
            assessment of the environment of the business and also helps in the
            development of a strategic direction for the business
            <NuxtLink href="#ref1">(Peterdy, 2022)</NuxtLink>.
          </p>

          <p class="img">
            <img src="/img/articles/blog3.png" alt="" />
            <span class="underline text-gray-500 text-xs"
              >Figure 1: Illustration of SWOT analysis
              <NuxtLink href="#ref1">(Peterdy, 2022)</NuxtLink>
            </span>
          </p>

          <p>The strength analysis of Peng's fast food analysis s is stated below</p>

          <h2>Strengths</h2>

          <p>
            The strengths of the company lie in the well-established channel of
            distribution in the UK that gives accessibility to larger and a strong client
            base. There is a strong presence of the brand in the market which is sustained
            for more than ten years. There is the offering of several ordering options
            from physical ordering to digital. The business has maintained a strong
            presence in the market as digital ordering platforms are available through
            third-party platforms.
          </p>

          <h2>Weaknesses</h2>

          <p>
            In the modern time when there is increasing competition in the market, Peng
            restaurant faces immense challenges from competitors who are not only good in
            quality but also providing quality services in delivering the food at the
            desired time. In this position, Peng is facing financial troubles in opening
            more units of the business. Moreover, the restaurant also faces troubles in
            hiring more staff which will eventually affect the performance of the
            restaurant as the reduced staff will not let the orders be delivered on time
            <NuxtLink href="#ref2">(Shashati, 2022)</NuxtLink>. <br /><br />
            It seems that the management of the restaurant is also not performing at full
            capacity as the lower affordability of the staff might be overburdening the
            existing staff with increased responsibilities. There are turbulences in the
            delivery services of the food which also question the quality of service of
            the restaurant.
          </p>

          <h2>Opportunities</h2>

          <p>
            Modern time is the greatest time for the digital transformation of the
            business. The database of the client can effectively be used for the
            application of several strategies that will help in forming a strong customer
            base. These customers can be offered some deals or benefits at a reduced cost
            as the brand can reduce its price to give tough competition to the
            competitors. Fast foods are very common and desirable among teenagers and kids
            so there can be deals or goods along with the food that can amuse the kids so
            they tend to repeat the visits. Moreover, Pend can also allow a few discounts
            at big festivals to gain the attention of the consumers.
          </p>

          <p>
            There can be a transition in the functioning by making three departments. The
            first one will be dealing with orders; the second department will be
            considering the taking of delivery and the third one will be dealing with all
            the cash or cheque transactions and other administrative jobs. In this way, it
            is believed that the functioning of the business will be smooth and there will
            be a minimum level of loopholes in the business.
          </p>

          <h2>Threats</h2>

          <p>
            The threats of the company include the competitors that are invading the
            market through digital platforms. Since the company performs the process
            through manual procedures therefore the costs of the company get greater than
            the revenue growth of the business. in the manual processes, stock management
            can also lead to the wastage of the stock if there is no appropriate stock
            management in the company.
          </p>

          <p class="img">
            <img src="/img/articles/blog31.png" alt="" />
            <span class="underline text-gray-500 text-xs"
              >Current BPMN diagram showing the deviation from traditional business
              process <NuxtLink href="#ref1">(Haitham, 2021)</NuxtLink>
            </span>
          </p>
          <p>
            Peng seems to be highly engaged in the traditional pattern of working but the
            business intends to transform its processes to digitalization. However, the
            digitalization process must not affect the quality of services and quality
            food <NuxtLink href="#ref1">(Haitham, 2021)</NuxtLink>. Moreover, the business
            should also take into count the strategies being adopted by the competitors of
            the business to make be proactive in dealing with the competition.
          </p>
        </div>
      </div>
    </section>

    <section class="app-wrapper">
      <div class="app-container py-16 sm:py-24 pb-0 border-l border-r border-gray-300">
        <div class="flex justify-between item-center h-auto">
          <h2 class="text-xl sm:text-3xl font-bold mb-12">
            Next Blog
            <span class="text-gray-400">
              <span class="mx-2">-</span> {{ articles[3].cat }}</span
            >
          </h2>
          <div>
            <NuxtLink to="./" class="text-indigo-600 font-semibold"> ./Home </NuxtLink>
          </div>
        </div>

        <NuxtLink
          :to="articles[3].link"
          class="group overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
        >
          <div
            class="lg:flex lg:justify-between sm:border-t border border-t-0 border-gray-300"
          >
            <img :src="articles[3].img" class="object-cover w-full h-64" alt="" />
            <div class="px-3 py-4 sm:p-5">
              <div class="">
                <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <NuxtLink
                    :to="articles[3].link"
                    class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  >
                    {{ articles[3].cat }}
                  </NuxtLink>
                  <span class="text-gray-600"> — {{ articles[3].date }}</span>
                </p>
                <NuxtLink
                  :to="link"
                  aria-label="Category"
                  class="inline-block line-clamp-3 my-3 mb-5 text-xl sm:text-2xl font-semibold transition-colors duration-200 group-hover:underline group-hover:text-indigo-500"
                >
                  {{ articles[3].title }}
                </NuxtLink>
              </div>
              <p class="mb-2 text-gray-500 line-clamp-3">
                {{ articles[3].desc }}
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

const title = ref(articles[2].title);

useHead({
  title,
});
</script>
