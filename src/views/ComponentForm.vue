<template>
  <h1>Create an Event</h1>
  <form @submit.prevent="onSubmit">
    <BaseSelect
      label="Select a category"
      :options="categories"
      v-model="event.category"
    />

    <fieldset>
      <legend>Name & describe your event</legend>

      <BaseInput type="text" label="Title" v-model="event.title" />

      <BaseInput type="text" label="Description" v-model="event.description" />
    </fieldset>

    <fieldset>
      <legend>Where is your event?</legend>

      <BaseInput type="text" label="Location" v-model="event.location" />
    </fieldset>
    <fieldset>
      <legend>Are pets allowed?</legend>
      <BaseRadioGroup :options="petOptions" name="pets" v-model="event.pets" />
    </fieldset>
    <fieldset>
      <legend>Extras</legend>
      <div>
        <BaseCheckbox label="Catering" v-model="event.extras.catering" />
      </div>
      <div>
        <BaseCheckbox label="Live music" v-model="event.extras.music" />
      </div>
    </fieldset>
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
