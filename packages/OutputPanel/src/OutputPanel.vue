<template>
<div class="output">
		<el-row>
			<i class="el-icon-info output-btn" @click='getEditor'></i>
			<i class="el-icon-caret-right output-btn" @click='run(editor)'></i>
		</el-row>
    <div id="textOutput">{{textOutput}}</div>
    <div id="graphOutput" ></div>
</div>
</template>

<script>
import * as Sk from "skulpt";
export default {
  name: 'OutputPanel',
  props: ['editor'],
  data() {
    return {
      textOutput: ''
    }
  },
	methods: {
		outf(text) {
			this.textOutput += '\n' + text;
		},
		builtinRead(x) {
			if (
				Sk.builtinFiles === undefined ||
				Sk.builtinFiles["files"][x] === undefined
			)
				throw "File not found: '" + x + "'";
			return Sk.builtinFiles["files"][x];
		},
		run() {
      let prog = this.editor.getValue();
      console.log(prog);
			this.textOutput = "";
      Sk.div = "textOutput";
      Sk.python3 = true;
			Sk.configure({ output: this.outf, read: this.builtinRead });
			(Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = "graphOutput";
			let myPromise = Sk.misceval.asyncToPromise(function() {
				return Sk.importMainWithBody("<stdin>", false, prog, true);
			});
			myPromise.then(
        // eslint-disable-next-line
				function(mod) {
					console.log("success");
				},
				function(err) {
					console.log(err.toString());
				}
			);
		},
		getEditor() {
			console.log(this.editor);
		}
	}
};
</script>

<style scoped>
.output-btn {
	font-size: 30px;
	margin-right: 40px;
}
</style>
