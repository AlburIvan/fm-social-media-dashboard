
<template>
  <div id="app" class="flex flex-col min-h-screen p-6 px-8 lg:px-32 bg-app lg:bg-app">
    <header>
        <h1 class="text-xl font-bold text-left lg:text-3xl text-cardText">Social Media Dashboard</h1>

        <div class="flex flex-col justify-between lg:flex-row">
            <h6 class="text-sm font-bold text-text">Total Followers: 23,004</h6>
            <hr class="my-4 border-gray-600 lg:hidden">
            <DarkModeToggle />
        </div>
        
    </header>

    <div class="flex flex-col my-8 mt-12 space-y-8 lg:space-x-4 lg:space-y-0 lg:justify-between md:flex-row lg:flex-row ">
        <template v-for="socialCard in socialCards" >
            <SocialMediaCard :key="socialCard.icon" 
                :icon="socialCard.icon" 
                :nameHandle="socialCard.handle" 
                :followerCount="socialCard.followers" 
                :counter="socialCard.count" 
            />
        </template>
    </div>

    <h2 class="text-xl font-bold text-left lg:text-2xl text-cardText md:text-center lg:mt-10">Overview - Today</h2>
    
    <div class="flex flex-col flex-wrap justify-between my-8 lg:flex-row">

        <template v-for="overviewCard in overviewCards">
            <OverviewCard :key="overviewCard.value * new Date().getTime()"
                :metric="overviewCard.metric" 
                :platform="overviewCard.platform" 
                :value="overviewCard.value" 
                :counter="overviewCard.counter" />

        </template>
    </div>

  </div>
</template>





<script>
import SocialMediaCard from "./components/SocialMediaCard";
import DarkModeToggle from "./components/DarkModeToggle";
import OverviewCard from "./components/OverviewCard";

export default {
  name: 'App',
  components: {
      SocialMediaCard,
      DarkModeToggle,
      OverviewCard
  },
  data() {
    return {
        socialCards: [
            {
                icon: 'facebook',
                handle: '@nathanf',
                followers: 1987,
                count: 12
            },
            {
                icon: 'twitter',
                handle: '@nathanf',
                followers: 1044,
                count: 99
            },
            {
                icon: 'instagram',
                handle: '@nathanf',
                followers: 11000,
                count: 1099
            },
            {
                icon: 'youtube',
                handle: '@nathanf',
                followers: 8239,
                count: -144
            },
        ],
        overviewCards: [
            {
                metric: 'Page Views',
                platform: 'facebook',
                value: 87,
                counter: 18
            },
            {
                metric: 'Likes',
                platform: 'facebook',
                value: 52,
                counter: -2
            },  
            {
                metric: 'Likes',
                platform: 'instagram',
                value: 5462,
                counter: 2257
            },    
            {
                metric: 'Profile Views',
                platform: 'instagram',
                value: 87,
                counter: 18
            },
            {
                metric: 'Retweets',
                platform: 'twitter',
                value: 117,
                counter: 303
            },
            {
                metric: 'Likes',
                platform: 'twitter',
                value: 507,
                counter: 553
            },
            {
                metric: 'Likes',
                platform: 'youtube',
                value: 107,
                counter: -19
            },
            {
                metric: 'Total Views',
                platform: 'youtube',
                value: 1407,
                counter: -12
            },                                                                             
        ]
    }
  }
}
</script>