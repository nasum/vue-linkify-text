declare module "linkify-it" {
  type LinkifyMatch = {
    schema: string;
    index: number;
    lastIndex: number;
    raw: string;
    text: string;
    url: string;
  };

  interface LinkifyIt {
    match(text: string): Array<LinkifyMatch>;
  }

  declare function LinkifyIt(): LinkifyIt;

  export default LinkifyIt;
}
