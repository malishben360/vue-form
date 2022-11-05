<template>
  <h1>Create an Event</h1>
  <form @submit.prevent="onSubmit">
    <BaseSelect
      label="Select a category"
      :options="categories"
      v-model="event.category"
    />

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
    <BaseCheckbox label="Catering" v-model="event.extras.catering" />
    <BaseCheckbox label="Live music" v-model="event.extras.music" />
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
