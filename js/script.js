console.log("Vue OK", Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: "#root",
    data: {
        currentIndex: 0,
        images: [
            "./img/image1.jpg",
            "./img/image2.jpg",
            "./img/image3.jpg",
            "./img/image4.jpg",
        ],
    },
    methods: {
        active(index) {
            if (this.currentIndex === index) {
                return 'active';
            } else {
                return '';
            }
        },
        increase() {
            return this.currentIndex++;
        },
        decrease() {
            return this.currentIndex--;
        },
        changeCurrentIndex(newIndex) {
            this.currentIndex = newIndex;
        }
    },
})

