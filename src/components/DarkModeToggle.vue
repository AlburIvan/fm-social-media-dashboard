<template>
    <div class="flex flex-row justify-between lg:justify-end">
        <p class="p-0 m-0 font-bold text-text lg:mr-6">Dark Mode</p>
        <label class="dark-mode-toggle">
            <input type="checkbox" v-model="toggle" />
            <span></span>
        </label>
    </div>
</template>


<script>
export default {
    name: 'DarkModeToggle',
    data () {
        return {
            toggle: false
        }
    },
    watch: {
        toggle: function (isChecked) {

            let body = document.querySelector('body');

            if(isChecked) {
                body.classList.add('dark-theme');
            } else {
                body.classList.remove('dark-theme');
            }
        }
    }
}
</script>