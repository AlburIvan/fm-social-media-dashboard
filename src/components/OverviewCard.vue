<template>
    <div class="flex flex-row justify-between p-6 mb-8 mr-1 transition-colors duration-200 rounded-lg cursor-pointer bg-cardBackground hover:bg-cardHover">
        <div class="flex flex-col justify-between">
            <p class="font-bold text-text">{{ metric }}</p>
            <p class="mt-4 text-3xl font-bold leading-none text-cardText">{{ value }}</p>
        </div>
        <div class="flex flex-col items-end justify-between">
           <img :src="cardIcon" alt="Social media icon" />
            <div class="flex flex-row items-center">
                <img class="mr-1" :src="counterIcon" alt="statistic counter" />
                <p :class="[ 'font-bold', ' leading-none', 'text-sm' , counterColor ]">{{ countStatistic }}%</p>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'OverviewCard',
    data () { return {} },
    props: [ 'metric', 'platform', 'value', 'counter' ],
    computed: {
        cardIcon() {
            let iconName = `icon-${this.platform}.svg`
            return require(`../assets/icons/${iconName}`);
        },
        counterIcon() {
            let counterIcon = (this.counter > 0) ? 'icon-up.svg' : 'icon-down.svg';
            return require(`../assets/icons/${counterIcon}`);
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