export default function stripHtml(str) {
  return str.replace(/(<([^>]+)>)/gi, '')
}
