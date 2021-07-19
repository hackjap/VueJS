f

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(["fetchedItem"]),
  },

  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>