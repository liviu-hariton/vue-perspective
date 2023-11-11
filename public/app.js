const vm = Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    },
    methods: {
        reset() {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;

            document.getElementById('the-box').style.backgroundColor = "#8d81f3";
        },
        async copyToClipboard() {
            let text = `transform:${this.box.transform};`

            await navigator.clipboard.writeText(text)

            alert('Copied to clipboard!')

            this.changeBackground();
        },
        changeBackground() {
            document.getElementById('the-box').style.backgroundColor = "#ffffff";
        }
    },
    computed: {
        box() {
            return {
                transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`
            }
        }
    }
}).mount("#app");