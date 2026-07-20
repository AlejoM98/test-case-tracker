import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTestCasesStore = defineStore('testCases', () => {
  // --- STATE: los datos que vive en la "caja" ---
  const testCases = ref([])

  // --- ACTIONS: funciones que modifican el state ---
  function addTestCase(title, description) {
    testCases.value.push({
      id: crypto.randomUUID(),
      title,
      description,
      status: 'pending', // 'pending' | 'passed' | 'failed'
      createdAt: new Date().toISOString(),
    })
  }

  function updateStatus(id, newStatus) {
    const testCase = testCases.value.find((tc) => tc.id === id)
    if (testCase) {
      testCase.status = newStatus
    }
  }

  function removeTestCase(id) {
    testCases.value = testCases.value.filter((tc) => tc.id !== id)
  }

  // --- GETTERS: datos calculados a partir del state ---
  const totalCount = computed(() => testCases.value.length)
  const passedCount = computed(
    () => testCases.value.filter((tc) => tc.status === 'passed').length
  )
  const failedCount = computed(
    () => testCases.value.filter((tc) => tc.status === 'failed').length
  )
  const pendingCount = computed(
    () => testCases.value.filter((tc) => tc.status === 'pending').length
  )

  return {
    testCases,
    addTestCase,
    updateStatus,
    removeTestCase,
    totalCount,
    passedCount,
    failedCount,
    pendingCount,
  }
})