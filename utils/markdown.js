import showdown from 'showdown';

export default function convertMarkdownToHtml(markdown) {
    var converter = new showdown.Converter();
    return converter.makeHtml(markdown);
}