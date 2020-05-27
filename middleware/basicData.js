export default async function({ store }) {
  await store.dispatch('blocks/fetchBlocks');
  await store.dispatch('videos/fetchVideos');
  await store.dispatch('stories/fetchStories');
  await store.dispatch('instagram/fetchInstagram');
  await store.dispatch('statistics/fetchStatistics');
}
