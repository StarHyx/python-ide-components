<template>
  <div class="editor-container">
    <ToolBar></ToolBar>
    <div
      class="editor"
      ref="editor"
      v-bind:style="editorStyle">
    </div>
    <button @click='getEditor'>打印Editor信息</button>
    <OutputPanel :editor='editor'></OutputPanel>
  </div>
</template>

<script>
/* eslint-disable */
import * as monaco from 'monaco-editor'
import OutputPanel from '../../OutputPanel/index.js'
import ToolBar from '../../ToolBar/index.js'
export default {
  name: "IdeEditor",
  components: {
    OutputPanel: OutputPanel,
    ToolBar: ToolBar
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'vs'
    },
    language: {
      type: String,
      default: 'python'
    },
    options: Object,
    width: {
      type: String,
      default: '500px'
    },
    height: {
      type: String,
      default: '200px'
    },
    showOutput: {
      type: Boolean,
      default: true
    }

  },
  data() {
    return {
      editor: {},
      editorStyle: {
        width: this.width,
        height: this.height
      },
    }
  },
  watch: {
    options: {
      deep: true,
      handler(options) {
        if (this.editor) {
          this.editor.updateOptions(options)
        }
      }
    },

    value(newValue) {
      if (this.editor) {
        if (newValue !== this.editor.getValue()) {
          this.editor.setValue(newValue)
        }
      }
    },

    language(newVal) {
      if (this.editor) {
        this.editor.setModelLanguage(this.editor.getModel(), newVal)
      }
    },

    theme(newVal) {
      if (this.editor) {
        this.editor.setTheme(newVal)
      }
    }
  },
  mounted() {
    this.init(monaco)
  },
  beforeDestroy() {
    this.editor && this.editor.dispose()
  },

  methods: {
    init(monaco) {
      // 初始化操作，主要进行相关设置和绑定
      const options =  {
          value: this.value,
          theme: this.theme,
          language: this.language
      }
      this.editor = monaco.editor.create(this.$refs.editor, options)
      this.$emit('editorDidMount', this.editor)
      this.editor.onContextMenu(event => this.$emit('contextMenu', event))
      this.editor.onDidBlurEditorText(() => this.$emit('blurText'))
      this.editor.onDidChangeConfiguration(event =>
        this.$emit('configuration', event)
      )
      this.editor.onDidChangeCursorPosition(event =>
        this.$emit('position', event)
      )
      this.editor.onDidChangeCursorSelection(event =>
        this.$emit('selection', event)
      )
      this.editor.onDidChangeModel(event => this.$emit('model', event))
      this.editor.onDidChangeModelContent(event => {
        const value = this.editor.getValue()
        if (this.value !== value) {
          this.$emit('change', value, event)
        }
      })
      this.editor.onDidChangeModelDecorations(event =>
        this.$emit('modelDecorations', event)
      )
      this.editor.onDidChangeModelLanguage(event =>
        this.$emit('modelLanguage', event)
      )
      this.editor.onDidChangeModelOptions(event =>
        this.$emit('modelOptions', event)
      )
      this.editor.onDidDispose(event => this.$emit('afterDispose', event))
      this.editor.onDidFocusEditorText(() => this.$emit('focusText'))
      this.editor.onDidLayoutChange(event => this.$emit('layout', event))
      this.editor.onDidScrollChange(event => this.$emit('scroll', event))
      this.editor.onKeyDown(event => this.$emit('keydown', event))
      this.editor.onKeyUp(event => this.$emit('keyup', event))
      this.editor.onMouseDown(event => this.$emit('mouseDown', event))
      this.editor.onMouseLeave(event => this.$emit('mouseLeave', event))
      this.editor.onMouseMove(event => this.$emit('mouseMove', event))
      this.editor.onMouseUp(event => this.$emit('mouseUp', event))
    },

    getEditor() {
      console.log(this.editor)
    },

    focus() {
      this.editor.focus()
    }
  },
}
</script>

<style scoped>
.editor-container {
  margin-bottom: 200px;
}
</style>