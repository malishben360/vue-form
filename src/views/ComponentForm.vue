<template>
  <h1>Create an Event</h1>
  <form @submit.prevent="onSubmit">
    <label>Select a category</label>
    <select v-model="event.category">
      <option
        v-for="(category, index) in categories"
        :key="index"
        :value="category"
      >
        {{ category }}
      </option>
    </select>

    <h3>Name & describe your event</h3>

    <BaseInput type="text" label="Title" v-model="event.title" />

    <BaseInput type="text" label="Description" v-model="event.description" />

    <h3>Where is your event?</h3>

    <BaseInput type="text" label="Location" v-model="event.location" />

    <h3>Are pets allowed?</h3>
    <div>
      <input type="radio" v-model="event.pets" value="1" name="pets" />
      <label>Yes</label>
    </div>
    <div>
      <input type="radio" v-model="event.pets" value="0" name="pets" />
      <label>No</label>
    </div>

    <h3>Extras</h3>
    <div>
      <input type="checkbox" v-model="event.extras.catering" class="field" />
      <label>Catering</label>
    </div>
    <div>
      <input type="checkbox" v-model="event.extras.music" class="field" />
      <label>Live music</label>
    </div>

    <button type="submit" class="button badge -fill-gradient">Submit</button>
  </form>
</template>

<script>
export default {
  name: "ComponentForm",

  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.event);
    },
  },
};
</script>

<style></style>
