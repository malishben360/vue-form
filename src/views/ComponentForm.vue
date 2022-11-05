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
    <BaseRadioGroup :options="petOptions" name="pets" v-model="event.pets" />

    <h3>Extras</h3>
    <div>
      <BaseCheckbox label="Catering" v-model="event.extras.catering" />
    </div>
    <div>
      <BaseCheckbox label="Live music" v-model="event.extras.music" />
    </div>
    <button type="submit" class="button badge -fill-gradient">Submit</button>
  </form>
</template>

<script>
import AxiosService from "@/services/AxiosService";

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
      petOptions: [
        { label: "Yes", value: 1 },
        { label: "No", value: 0 },
      ],
    };
  },
  methods: {
    onSubmit() {
      AxiosService.postEvent(this.event)
        .then((response) => {
          console.table(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
