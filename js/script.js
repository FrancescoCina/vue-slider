console.log("Vue OK", Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: "#root",
    data: {
        images: [
            "./img/image1.jpg",
            "./img/image2.jpg",
            "./img/image3.jpg",
            "./img/image4.jpg",
        ],
        currentIndex: 0,

    },
    methods: {
        showImg(index) {
            if (this.currentIndex === index) {
                return 'active';
            } else {
                return '';
            }
        }
    },
})