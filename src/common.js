var state = {
    assignmentState() {
        var val = this.$store.getters.getCityFn;
        if (!val) {
            var num = localStorage.getItem("state");
            this.$store.dispatch("setCityName", num)
        }
    }
}

export default state;