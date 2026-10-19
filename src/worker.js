export default { async fetch(request, env) {
  const url = new URL(request.url);
  if (url.protocol !== 'https:' || url.hostname === 'www.littleindiakl.com') {
    url.protocol = 'https:';
    if (url.hostname === 'www.littleindiakl.com') url.hostname = 'littleindiakl.com';
    return Response.redirect(url.href, 301);
  }
  return env.ASSETS.fetch(request);
}};
