<script setup>
import { useTestCasesStore } from '@/stores/testCases'
import TestCaseForm from '@/components/TestCaseForm.vue'
import TestCaseList from '@/components/TestCaseList.vue'

const store = useTestCasesStore()
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-2xl mx-auto">
      <header class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Test Case Tracker</h1>
        <p class="text-gray-500 text-sm mt-1">
          Gestor simple de casos de prueba
        </p>
      </header>

      <!-- Resumen de contadores -->
      <div class="grid grid-cols-4 gap-3 mb-6">
        <div class="bg-white rounded-lg shadow p-3 text-center">
          <p class="text-2xl font-bold text-gray-800">{{ store.totalCount }}</p>
          <p class="text-xs text-gray-500">Total</p>
        </div>
        <div class="bg-white rounded-lg shadow p-3 text-center">
          <p class="text-2xl font-bold text-yellow-600">{{ store.pendingCount }}</p>
          <p class="text-xs text-gray-500">Pendientes</p>
        </div>
        <div class="bg-white rounded-lg shadow p-3 text-center">
          <p class="text-2xl font-bold text-green-600">{{ store.passedCount }}</p>
          <p class="text-xs text-gray-500">Pasaron</p>
        </div>
        <div class="bg-white rounded-lg shadow p-3 text-center">
          <p class="text-2xl font-bold text-red-600">{{ store.failedCount }}</p>
          <p class="text-xs text-gray-500">Fallaron</p>
        </div>
      </div>

      <TestCaseForm />
      <TestCaseList />
    </div>
  </div>
</template>