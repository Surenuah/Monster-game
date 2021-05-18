<template>
  <div>
    <h4 @click="toggleFavourite">{{contactName}}
      <span v-if="isFavourite">favourite</span>
    </h4>
    <button @click="toggleInfo">Show info</button>
    <div v-if="showInfo">
      <p>{{contactNumber}}</p>
      <p>{{contactEmail}}</p>
    </div>
  </div>
</template>

<script>
export default {
name: "ContactList",
  props: {
    contactId: {
      type: Number,
      required: true,
    },
    contactName: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },

    isFavourite: {
      type: Boolean,
      required: true,
    },
    contactEmail: {
      type: String,
      required: false,
      default: "i have no email yet",
    },
  },
  data:() => ({
    showInfo: false,
  }),
  methods: {
    toggleInfo() {
      this.showInfo = !this.showInfo;
    },
    toggleFavourite() {
      this.$emit('changeFavourite', this.contactId);
    }
  },
}
</script>

<style scoped>
.p {
  font-weight: bold;
}
span {
  padding: 12px 10px;
  background-color: gray;
}
</style><template>
  <div>
    <h4 @click="toggleFavourite">{{contactName}}
      <span v-if="isFavourite">favourite</span>
    </h4>
    <button @click="toggleInfo">Show info</button>
    <div v-if="showInfo">
      <p>{{contactNumber}}</p>
      <p>{{contactEmail}}</p>
    </div>
  </div>
</template>

<script>
export default {
name: "ContactList",
  props: {
    contactId: {
      type: Number,
      required: true,
    },
    contactName: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },

    isFavourite: {
      type: Boolean,
      required: true,
    },
    contactEmail: {
      type: String,
      required: false,
      default: "i have no email yet",
    },
  },
  data:() => ({
    showInfo: false,
  }),
  methods: {
    toggleInfo() {
      this.showInfo = !this.showInfo;
    },
    toggleFavourite() {
      this.$emit('changeFavourite', this.contactId);
    }
  },
}
</script>

<style scoped>
.p {
  font-weight: bold;
}
span {
  padding: 12px 10px;
  background-color: gray;
}
</style>