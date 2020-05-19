<template>
  <div>
    <el-tooltip :disabled="!toolTipDisabled" class="item" effect="dark" :content="temp_input" placement="top">
      <el-input 
        ref="input" 
        v-model="temp_input"
        :placeholder="placeholder"
        :disabled="disabled"
      >
      </el-input>
    </el-tooltip>
  </div>
</template>
<script>

export default {
  data() {
    return {
      toolTipDisabled: false,
      temp_input: this.input
    }
  },
  model: {
    prop: 'input',
    event: 'change'
  },
  props: {
    input: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setToolTipDisabled() {
      let toolTipDisabled = this.toolTipDisabled;
      if (this.$refs.input) {
        const offsetWidth = this.$refs['input'].$refs.input.offsetWidth;
        const scrollWidth = this.$refs['input'].$refs.input.scrollWidth;
        toolTipDisabled = this.disabled && (scrollWidth > offsetWidth);
      }
      this.toolTipDisabled = toolTipDisabled;
    }
  },
  mounted() {
    this.setToolTipDisabled();
  },
  watch: {
    temp_input(val) {
      this.$emit('change', val);
      this.setToolTipDisabled();

    },
    disabled() {
      this.setToolTipDisabled();
    }
  },
}

</script>
<style>
  .el-tooltip > .el-input__inner[disabled] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
</style>