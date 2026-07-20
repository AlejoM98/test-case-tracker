<script setup>
import { ref } from 'vue'
import { useTestCasesStore } from '@/stores/testCases'

const store = useTestCasesStore()

// Estado local del formulario (solo vive aquí, no en el store)
const title = ref('')
const description = ref('')

function handleSubmit() {
  // No permitir enviar si el título está vacío
  if (!title.value.trim()) return

  store.addTestCase(title.value, description.value)

  // Limpiar el formulario después de agregar
  title.value = ''
  description.value = ''
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="bg-white rounded-lg shadow p-6 mb-6">
    <h2 class="text-lg font-semibold text-gray-800 mb-4">Nuevo caso de prueba</h2>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">
        Título
      </label>
      <input
        v-model="title"
        type="text"
        placeholder="Ej: Login con credenciales válidas"
        class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">
        Descripción
      </label>
      <textarea
        v-model="description"
        rows="2"
        placeholder="Pasos o criterio de aceptación..."
        class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    <button
      type="submit"
      class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm transition-colors"
    >
      Agregar caso de prueba
    </button>
  </form>
</template>