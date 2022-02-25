<template>
  <div class="singleImageUpload2 upload-container">
    <el-upload
      :action="actions"
      :headers="headers"
      :multiple="false"
      :limit="1"
      :before-upload="beforeUpload"
      :on-success="onSuccess"
      :on-error="onError"
      :on-remove="onRemove"
      :file-list="fileList"
      :on-exceed="onExceed"
      :disabled="disabled"
      drag
      show-file-list
      accept="application/epub+zip"
    >
      <i class="el-icon-upload" />
      <div class="el-upload__text">
        请点击上传或将电子书拖入上传
      </div>
    </el-upload>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
export default {
  name: 'EbookUpload',
  props: {
    fileList: {
      type: Array,
      default() {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      actions: `${process.env.VUE_APP_BASE_API}/book/upload`
    }
  },
  computed: {
    headers() {
      return {
        Authorization: `Bearer ${getToken()}`
      }
    }
  },
  methods: {
    beforeUpload(file) {
      console.log(file)
      this.$emit('beforeUpload', file)
    },
    onSuccess(response, file) {
      console.log(response)
      console.log(file)
      const { code, msg } = response
      if (code !== 0) {
        this.$message({
          messsage: (msg && msg.err && `上传失败！失败原因：${msg.err}`) || '上传失败',
          type: 'error'
        })
        this.$emit('onError', { msg, file })
      } else {
        this.$message({
          message: '上传成功',
          type: 'success'
        })
        this.$emit('onSuccess')
      }
    },
    onRemove() {
      this.$message({
        message: '删除电子书成功',
        type: 'success'
      })
      this.$emit('onRemove')
    },
    onExceed() {
      this.$emit('onExceed')
    },
    onError(err) {
      console.log(err)
      console.log({ err })
      const errMsg = (err.message && JSON.parse(err.message)) || '上传失败'
      this.$message({
        message: (errMsg.msg && `上传失败：失败原因：${errMsg.msg}`) || '上传失败',
        type: 'error'
      })
      this.$emit('onError', err)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.detail {
  position: relative;
  .detail-container {
    padding: 40px 45px 20px 50px;
  }
}
</style>
