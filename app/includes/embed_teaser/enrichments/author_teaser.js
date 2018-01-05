const liSDK = require('@livingdocs/sdk')

module.exports = async function handleAuthorTeaser (liClient, component, content) {
  const design = require('../../../../design/dist/design.json')
  const articleLivingdoc = liSDK.document.create({design, content})
  const tree = articleLivingdoc.componentTree

  const authorEmbeds = tree.find('embed-teaser-author')
  if (!authorEmbeds.length) return

  const authorEmbed = authorEmbeds[0]
  const embedIncludeDirective = authorEmbed.directives.get('embed')
  const {params} = embedIncludeDirective.getContent()

  const [{metadata}] = await liClient.getPublication({documentId: params.mediaId})

  return {
    title: metadata.title,
    image: metadata.teaserImage
  }
}
