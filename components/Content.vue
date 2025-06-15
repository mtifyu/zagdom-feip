<template>
    <div class="content">
        <Slider />
        <MainInfo />
    </div>
</template>

<style scoped>
    .content {
        display: flex;
        flex-direction: column;
        padding: 0 80px 0;
    }
    @media (max-width: 1150px) {
        .content {
            padding: 18px 40px;
        }
    }
    @media (max-width: 768px) {
        .content {
            padding: 5px 5px;
        }
    }

</style>
<script>
import Slider from './Slider.vue';
import MainInfo from './MainInfo.vue';
</script>