// mouse.js
import { ref, onMounted, onUnmounted, computed } from 'vue'

const chapters = [
  "1",
  "2"
]

const activeChapter = ref(chapters[0])

// by convention, composable function names start with "use"
export function useChapters () {
  // state encapsulated and managed by the composable

  const nextChapter = () => {
    const index = chapters.indexOf(activeChapter.value)
    activeChapter.value = chapters[index + 1]
  }

  const prevChapter = () => {
    const index = chapters.indexOf(activeChapter.value)
    activeChapter.value = chapters[index - 1]
  }

  const percentageComplete = computed(() => {
    return chapters.indexOf(activeChapter.value) / chapters.length
  });

  // a composable can update its managed state over time.
  // function update(event) {
  //   x.value = event.pageX
  //   y.value = event.pageY
  // }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  // onMounted(() => window.addEventListener('mousemove', update))
  // onUnmounted(() => window.removeEventListener('mousemove', update))

  // expose managed state as return value
  return { chapters, activeChapter, nextChapter, prevChapter, percentageComplete }
}