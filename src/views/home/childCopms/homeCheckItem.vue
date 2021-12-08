<template>
    <div class="grid-content">
        <el-card shadow="hover" :style="{backgroundColor:color}" class="jello-vertical tracking-in-expand">
          {{type}}
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'homeCheckItem',

  data() {
    return {
    };
  },

  props:{
    type:{
      type:String,
      default:null
    },
    color:{
      type:String,
      default:""
    }
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>

</style>

<style>
  .homecheck .grid-content {
    min-height: 200px;
    min-width: 200px;
    height: 200px;
    border-radius: 20px;
    line-height: 160px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
  }
  .homecheck .el-card{
    height: 200px;
    border-radius: 20px;
  }

  .homecheck .jello-vertical:hover {
	  animation: jello-vertical .9s both;
  }
  @keyframes jello-vertical {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      transform: scale3d(1.05, 0.75, 1);
    }
    50% {
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }

 .homecheck .tracking-in-expand {
	animation: tracking-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}


</style>