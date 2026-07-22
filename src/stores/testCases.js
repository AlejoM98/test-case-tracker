import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'test-case-tracker:testCases'

export const useTestCasesStore = defineStore('testCases', () => {
  // --- STATE: intenta leer de localStorage; si no hay nada, empieza vacío ---
  const stored = localStorage.getItem(STORAGE_KEY)
  const testCases = ref(stored ? JSON.parse(stored) : [])

  // --- Cada vez que testCases cambie, lo guardamos en localStorage ---
  watch(
    testCases,
    (newValue) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue))
    },
    { deep: true } // 'deep' porque testCases es un array de objetos, no un valor simple
  )

  // --- ACTIONS ---
  function addTestCase(title, description) {
    testCases.value.push({
      id: crypto.randomUUID(),
      title,
      description,
      status: 'pending',
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

  // --- GETTERS ---
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