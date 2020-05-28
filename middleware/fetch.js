export default async function({ route, store }) {
  await store.dispatch('blocks/fetchBlocks');

  if (route.name == 'index') {
    await store.dispatch('stories/fetchStories');
    await store.dispatch('videos/fetchVideos');
    await store.dispatch('instagram/fetchInstagram');
    await store.dispatch('statistics/fetchStatistics');
  }

  if (route.name === 'stories' || 'stories-id') {
    await store.dispatch('stories/fetchStories');
  }
}
