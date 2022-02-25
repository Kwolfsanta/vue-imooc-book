<template>
  <div class="detail">
    <el-form ref="postForm" :model="postForm" label-width="80px">
      <sticky :class-name="'sub-navbar ' + postForm.status">
        <el-button
          v-if="!isEdit"
          type="primary"
          @click="showGuide"
        >
          显示帮助
        </el-button>
        <el-button
          v-loading="loading"
          type="success"
          @click="submitForm"
        >
          {{ isEdit ? '编辑电子书' : '新增电子书' }}
        </el-button>
      </sticky>
      <div class="detail-container">
        <el-row>
          <Warning />
          <el-col :span="24">
            <Upload
              :disabled="isEdit"
              @onSuccess="onUploadSuccess"
              @onRemove="onUploadRemove"
              @onExceed="onUploadExceed"
            />
          </el-col>
          <el-col :span="24" />
        </el-row>
        <el-col :span="24">
          <el-form-item style="margin-bottom: 40px;" prop="title" class="file-name-formItem">
            <MDinput v-model="postForm.title" placeholder="书名" name="name">
              书名
            </MDinput>
          </el-form-item>
          <div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="作者： " :label-width="labelWidth">
                  <el-input
                    v-model="postForm.author"
                    placeholder="作者"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="出版社： " :label-width="labelWidth">
                  <el-input
                    v-model="postForm.publisher"
                    placeholder="出版社"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="语言： " :label-width="labelWidth">
                  <el-input
                    v-model="postForm.language"
                    placeholder="语言"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="源文件： " :label-width="labelWidth">
                  <el-input
                    v-model="postForm.rootFile"
                    placeholder="源文件"
                    disabled
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="文件路径： " :label-width="labelWidth">
                  <el-input
                    v-model="postForm.filePath"
                    placeholder="文件路径"
                    disabled
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="解压路径： " :label-width="labelWidth">
                  <el-input
                    v-model="postForm.unzipPath"
                    placeholder="解压路径"
                    disabled
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="封面路径： " :label-width="labelWidth">
                  <el-input
                    v-model="postForm.coverPath"
                    placeholder="封面路径"
                    disabled
                  />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="文件名称： " :label-width="labelWidth">
                  <el-input
                    v-model="postForm.fileName"
                    placeholder="文件名称"
                    disabled
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item :label-width="labelWidth" label="封面：">
                  <a v-if="postForm.cover" :href="postForm.cover" target="_blank">
                    <img :src="postForm.cover" class="preview-img">
                  </a>
                  <span v-else>无</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item :label-width="labelWidth" label="目录：">
                  <div
                    v-if="postForm.contents && postForm.contents.length > 0"
                    class="contents-wrapper"
                  >
                    <el-tree :data="contentsTree" @node-click="onContentClick" />
                  </div>
                  <span v-else>无</span>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </div>
    </el-form>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import Warning from '@/views/book/components/Warning'
import Upload from '@/components/EbookUpload'
import MDinput from '@/components/MDinput'
export default {
  components: {
    Sticky,
    Warning,
    Upload,
    MDinput
  },
  props: {
    isEdit: {
      type: Boolean
    }
  },
  data() {
    return {
      loading: false,
      postForm: {
        status: 'draft'
      },
      labelWidth: '120px'
    }
  },
  methods: {
    showGuide() {
      console.log('show guide')
    },
    submitForm() {
      console.log('submit form')
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1000)
    },
    onUploadSuccess() {
      console.log('UploadSuccess')
    },
    onUploadRemove() {
      console.log('UploadRemove')
      this.$message({
        message: '移除电子书成功！',
        type: 'success'
      })
    },
    onUploadExceed() {
      this.$message({
        message: '每次只能上传一本电子书',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
  .detail-container{
    padding: 40px 20px 12px;
  }
</style>
<style>
  .file-name-formItem > .el-form-item__content {
    margin-left: 8px !important;
  }
</style>
