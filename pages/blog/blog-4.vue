<template>
  <div class="about-view">
    <section class="app-wrapper">
      <div
        class="app-container pt-36 sm:pt-40 sm:pb-0 pb-0 border-l border-r border-gray-300"
      >
        <div class="max-w-4xl text-center mx-auto">
          <div class="mb-6">
            <span class="text-indigo-600 font-semibold"> {{ articles[3].cat }} </span>
          </div>
          <h1 class="text-center text-2xl sm:text-4xl font-bold">
            {{ articles[3].title }}
          </h1>
          <div class="flex justify-center items-center text-base text-gray-500 mt-4">
            Bulabula AWAZI
            <div class="h-2 w-2 bg-indigo-700 rounded-full mx-4"></div>
            <span class="text-gray-400">{{ articles[3].date }}</span>
          </div>
        </div>
        <div class="w-full mt-12">
          <img
            class="w-full max-h-[500px] object-cover"
            :src="articles[3].img"
            :alt="articles[3].title"
          />
        </div>
        <div class="app-blog-content max-w-4xl text-left mx-auto mt-8 sm:mt-12">
          <p>
            The fast-food restaurant business is growing g in the UK. The market has grown
            from 9% in the year 2021 from $18.9 billion to $20.61 billion in the year 2022
            <NuxtLink href="#ref1">(Aviko, 2022)</NuxtLink>.
          </p>
          <p class="img">
            <img src="/img/articles/blog41.png" alt="" />
            <span class="underline text-gray-500 text-xs"
              >Figure 1: Market size of the fast food and takeaway industry in the United
              Kingdom from 2012 to 2021, with a forecast for 2022
            </span>
          </p>

          <h2>Building up digital presence to take orders</h2>

          <p>
            In today's dynamic and fast-changing world technology is becoming excessively
            handy and almost all business are increasing their presence among consumers by
            setting up their websites. As the current model is highly traditional that
            requires more employees involved in the business thus increasing the labor
            cost of the business. Therefore it is suggested that mobile applications can
            be exploited on smartphones or direct ordering through the website the
            restaurant will minimize the hassle of customers having to call the employees
            for placing orders.
          </p>
          <p>
            However, in this system, Peng will be required to place a robust system of
            delivery of the food to the consumers. There will be no rush on the counters
            of the restaurants yet Peng needs to employ resources like cars and delivery
            vehicles.
          </p>
          <p>
            The other risk in the method is that the company needs to make an expenditure
            on the maintenance of the website, application of smartphones, and also the
            office-based vehicles that are employed for delivery purposes. Apart from the
            risks, there are probable chances of exponential growth of the business if
            Peng continues to provide excellent quality of good and timely delivery of
            food.
          </p>

          <h2>Virtual Counters</h2>

          <p>
            One of the new technologies in fast food restaurants are the virtual counters
            that reduce the need for employees to take orders from customers. It is like a
            self-service in which the consumers make and change the orders of their own
            choices. It is done with the help of Smart Automated Ordering Service which is
            simply a depiction of Artificial intelligence in fast food restaurants. Many
            the restaurants like Mcdonald's have already implemented the mechanism which
            has further reduced the reliance on labor.
          </p>

          <p class="img">
            <img src="/img/articles/blog4.png" alt="" />
            <span class="underline text-gray-500 text-xs"
              >Figure 1: Virtual Counters at fast food restaurants
            </span>
          </p>

          <p>
            Automated technology has further minimized the level of mistakes in taking
            orders. As the orders are automated and then with the help of a computerized
            POS system the orders are automatically recorded in the system which makes the
            whole procedure so smooth that there are minimal chances of mistakes.
          </p>

          <h2>Drone Food delivery</h2>

          <p>
            The delivery of food with third-party delivery services is costly as it
            requires smooth software that will assure timely delivery of the food to the
            consumers ordering the food. Therefore Peng can introduce drone services for
            the delivery of goods. In recent times, it is one of the most innovative ways
            of replacing delivery vehicles and providing food to customers at the theory
            doorstep of the customers. In drone services, customers place orders on online
            platforms. The fast food restaurant will be packaging the food in the box and
            will fix it on the carriers on the drone. After the fixing speed, location and
            time the drone will be delivering the food parcel at the specified location.
          </p>

          <p class="img">
            <img src="/img/articles/blog42.png" alt="" />
            <span class="underline text-gray-500 text-xs"
              >Figure 2: Figure showing rapid delivery of food without packaging
            </span>
          </p>

          <p>
            The drone services of food eliminate the costs of hiring restaurant staff and
            riders for the delivery of food. Moreover, it is an environmentally friendly
            idea as there will be a reduced impact of carbon footprints in society
            eventually creating sustainability in the business. It will also get rid of
            the business from the expensive third-party associations of the business. Many
            the businesses like Uber Eats and Amazon have already introduced drone
            services in their businesses which are being executed effectively and
            contributing well to the business.
          </p>

          <p>
            The introduction of new technologies will be costly for the business but there
            are evident prospects in the future. It will be investment in the business as
            investing money in the revolutionizing the system will enhance productivity
            and profitability in the business.
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
              <span class="mx-2">-</span> {{ articles[4].cat }}</span
            >
          </h2>
          <NuxtLink to="/" class="text-indigo-600 font-semibold"> ./Home </NuxtLink>
        </div>

        <NuxtLink
          :to="articles[4].link"
          class="group overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
        >
          <div
            class="lg:flex lg:justify-between sm:border-t border border-t-0 border-gray-300"
          >
            <img :src="articles[4].img" class="object-cover w-full h-64" alt="" />
            <div class="px-3 py-4 sm:p-5">
              <div class="">
                <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <NuxtLink
                    :to="articles[4].link"
                    class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  >
                    {{ articles[4].cat }}
                  </NuxtLink>
                  <span class="text-gray-600"> — {{ articles[4].date }}</span>
                </p>
                <NuxtLink
                  :to="link"
                  aria-label="Category"
                  class="inline-block line-clamp-3 my-3 mb-5 text-xl sm:text-2xl font-semibold transition-colors duration-200 group-hover:underline group-hover:text-indigo-500"
                >
                  {{ articles[4].title }}
                </NuxtLink>
              </div>
              <p class="mb-2 text-gray-500 line-clamp-3">
                {{ articles[4].desc }}
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

const title = ref(articles[3].title);

useHead({
  title,
});
</script>
