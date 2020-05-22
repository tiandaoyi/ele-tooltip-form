<template>
  <el-tooltip 
    :disabled="toolTipDisabled" 
    class="item" 
    effect="light" 
    :content="selectedString" 
    placement="top"
  >
    <el-select
      ref="select" 
      :value="value"
      :multiple="multiple"
      collapse-tags
      @change="($event) => $emit('input', $event)"
      :placeholder="placeholder"
      :disabled="disabled"
      >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </el-tooltip>
</template>
<script type="text/babel">

export default {
  name: 'EleTooltipSelect',
  data() {
    return {
      offsetWidth: 0,
      scrollWidth: 0,
    }
  },
  props: {
    options: {
      type: Array,
      default: []
    },
    multiple: {
      type: Boolean,
      default: true
    },
    value: Array,
    input: {
      type: [Array, String, Number, Boolean]
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    toolTipDisabled() {
      let formDisabled = false;
      if (this.$parent && this.$parent._vnode && this.$parent._vnode.tag && this.$parent._vnode.tag === 'form') {
        formDisabled = this.$parent && this.$parent.disabled;
      } else if (this.$parent && this.$parent.$parent && this.$parent.$parent._vnode.tag && this.$parent.$parent._vnode.tag === 'form') {
        formDisabled = this.$parent && this.$parent.$parent && this.$parent.$parent.disabled;
      }
      const hasMoreValue = this.value && this.value.length > 1;
      return this.disabled ? !hasMoreValue : formDisabled === true ? !hasMoreValue : true;
    },
    selectedString() {
      const selectedArray = this.value;
      const selectedStringArray = [];
      this.options.forEach(item => {
        if (selectedArray.includes(item.value)) {
          selectedStringArray.push(item.label);
        }
      });
      return selectedStringArray.toString()
    }
  }
}

</script>
<style>
  .el-select-dropdown__item {
    display: list-item;
  }
</style>