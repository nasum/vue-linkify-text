import { h, defineComponent } from "vue";
import LinkifyIt from "linkify-it";

function escape(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export const VueLinkifyText = defineComponent({
  name: "LinkifyText",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    content(): string {
      const tmpText = escape(this.text);
      const matches = LinkifyIt().match(tmpText);
      const result = [];
      let last = 0;
      matches.forEach(match => {
        if (last < match.index) {
          result.push(
            escape(tmpText.slice(last, match.index)).replace(/\r?\n/g, "<br>")
          );
        }
        result.push('<a target="_blank" href="');
        result.push(escape(match.url));
        result.push('">');
        result.push(escape(match.text));
        result.push("</a>");
        last = match.lastIndex;
      });
      if (last < tmpText.length) {
        result.push(escape(tmpText.slice(last)).replace(/\r?\n/g, "<br>"));
      }
      return result.join("");
    }
  },
  render() {
    return h(this.tag, { innerHTML: this.content });
  }
});

export default {
  // eslint-disable-next-line
  install(Vue: any) {
    Vue.component(VueLinkifyText.name, VueLinkifyText);
  }
};
