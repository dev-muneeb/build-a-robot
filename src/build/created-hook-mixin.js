export default {
  created() {
    this.$store.dispatch('getParts');
  },
};
