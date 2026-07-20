<script setup>
import { useTestCasesStore } from '@/stores/testCases'

const store = useTestCasesStore()

// Mapeo de estado -> clases de color de Tailwind
const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-800',
  passed: 'bg-green-100 text-green-800',
  failed: 'bg-red-100 text-red-800',
}

const statusLabels = {
  pending: 'Pendiente',
  passed: 'Pasó',
  failed: 'Falló',
}
</script>

<template>
  <div class="space-y-3">
    <!-- Mensaje cuando no hay casos de prueba -->
    <p v-if="store.testCases.length === 0" class="text-gray-500 text-sm text-center py-8">
      Todavía no agregaste ningún caso de prueba.
    </p>

    <!-- v-for recorre el array y crea una tarjeta por cada caso -->
    <div
      v-for="testCase in store.testCases"
      :key="testCase.id"
      class="bg-white rounded-lg shadow p-4 flex items-start justify-between gap-4"
    >
      <div class="flex-1">
        <div class="flex items-center gap-2 mb-1">
          <h3 class="font-medium text-gray-800">{{ testCase.title }}</h3>
          <span
            class="text-xs font-semibold px-2 py-0.5 rounded-full"
            :class="statusStyles[testCase.status]"
          >
            {{ statusLabels[testCase.status] }}
          </span>
        </div>
        <p v-if="testCase.description" class="text-sm text-gray-500">
          {{ testCase.description }}
        </p>
      </div>

      <div class="flex gap-2 shrink-0">
        <button
          @click="store.updateStatus(testCase.id, 'passed')"
          class="text-xs px-2 py-1 rounded bg-green-50 text-green-700 hover:bg-green-100"
        >
          Pasó
        </button>
        <button
          @click="store.updateStatus(testCase.id, 'failed')"
          class="text-xs px-2 py-1 rounded bg-red-50 text-red-700 hover:bg-red-100"
        >
          Falló
        </button>
        <button
          @click="store.removeTestCase(testCase.id)"
          class="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200"
        >
          Borrar
        </button>
      </div>
    </div>
  </div>
</template>