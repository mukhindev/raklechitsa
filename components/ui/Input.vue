<template>
  <label class="input">
    {{ label }}
    <input
      class="input__area"
      :placeholder="placeholder"
      :name="name"
      :type="type"
      :value="value"
      :required="required ? true : false"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: String,
    type: String,
    name: String,
    required: Boolean,
    value: String,
  },
};
</script>

<style scoped>
.input {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
}

.input__area {
  margin: 32px 0 0;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 1.33;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid #e7e7e7;
  transition: 0.25s;
}
.input__area:focus {
  outline: none;
  border-bottom: 1px solid #613a93;
}
</style>
