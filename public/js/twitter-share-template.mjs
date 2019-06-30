export default props => {
  const { text, url, hashtags, via, related } = props;

  const query = [
    text && `text=${encodeURIComponent(text)}`,
    url && `url=${encodeURIComponent(url)}`,
    hashtags && `hashtags=${hashtags}`,
    via && `via=${encodeURIComponent(via)}`,
    related && `related=${encodeURIComponent(related)}`
  ]
    .filter(Boolean)
    .join('&');

  const href = `https://twitter.com/intent/tweet?${query}`;

  return `
    <a target="_blank" noreferrer href="${href}">
      Tweet this
    </a>
  `;
};
