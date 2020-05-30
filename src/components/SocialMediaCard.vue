<template>

    <div class="flex flex-col items-center justify-around transition-colors duration-200 rounded-lg cursor-pointer bg-cardBackground hover:bg-cardHover">
        <span :class="[ 'w-full', 'h-1', 'rounded-t-full', cardRibbonColor ]"></span>
        <div class="flex flex-row items-center mt-6 mb-4">
            <img class="mr-2" :src="cardIcon" alt="Social media icon" />
            <p class="font-bold text-text">{{ nameHandle }}</p>
        </div>
        <p class="p-0 m-0 text-6xl font-bold leading-none text-cardText">{{ displayFollowers }}</p>
        <p class="m-0 uppercase tracking-wideful p-y text-text">followers</p>
        <div class="flex flex-row items-center m-4">
            <img class="mr-1" :src="counterIcon" alt="statistic counter" />
            <p :class="[ 'font-bold', counterColor ]">{{ countStatistic }} Today</p>
        </div>
    </div>

</template>


<script>

export default {
    name: 'SocialMediaCard',
    data () { return {} },
    props: [ 'icon', 'nameHandle', 'followerCount', 'counter' ],
    computed: {
        cardRibbonColor() {

            // refactored to make them non purgable by PurgeCSS
            switch (this.icon) {
                case 'facebook':
                    return 'bg-facebook'
                
                case 'twitter':
                    return 'bg-twitter'
                
                case 'instagram':
                    return 'bg-instagram'
                
                case 'youtube':
                    return 'bg-youtube'
            
                default:
                    return 'bg-facebook';
            }
        },
        cardIcon() {
            let iconName = `icon-${this.icon}.svg`
            return require(`../assets/icons/${iconName}`);
        },

        counterIcon() {
            let counterIcon = (this.counter > 0) ? 'icon-up.svg' : 'icon-down.svg';
            return require(`../assets/icons/${counterIcon}`);
        },
        displayFollowers() {

            let followers = this.followerCount || 0;

            if(this.followerCount >= 10000) {
                followers = this.followerCount / 1000;
            }

            return `${followers}${(this.followerCount >= 10000) ? 'K' : ''}`;
        },
        countStatistic() {
            return Math.abs(this.counter);
        },
        counterColor() {
            return { 
                'text-limeGreen': this.counter > 0,
                'text-brightRed': this.counter < 0
            }
        }
    }
}
</script>