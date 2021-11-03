<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="title" class="form-label">Titulo</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Titulo"
              v-model="form.title"
            />
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Descripcion</label>
            <textarea
              class="form-control"
              id="description"
              rows="3"
              v-model="form.description"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="url" class="form-label">Url</label>
            <input
              type="text"
              class="form-control"
              id="url"
              placeholder="url de la imagen"
              v-model="form.url"
            />
          </div>
          <button
            v-if="condicion.updt == 1"
            class="btn btn-success btn-lg"
            type="submit"
          >
            <i class="bi bi-check-circle"></i>
          </button>
        </form>
        <button
          v-if="condicion.updt == 2"
          @click="update"
          class="btn btn-primary btn-lg"
        >
          <i class="bi-pencil"></i>
        </button>
      </div>
        <!-- Spinner loading -->
      <div class="col-lg-8 mt-4">
        <div v-if="mostrarSpinner.cond" id="contenedor_carga">
          <div id="carga" class="d-flex justify-content-center">
            <div
              class="spinner-border text-warning"
              style="width: 5rem; height: 5rem"
              role="status"
            ></div>
          </div>
        </div>
        <!-- Tabla con items de la base de datos firebase -->
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titulo</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="card in cards" :key="card.id">
              <th v-on="ocultarSpinner()" scope="row">{{ card.id }}</th>
              <td>{{ card.title }}</td>
              <td>{{ card.description }}</td>
              <td class="btn-group">
                <button class="btn btn-secondary" @click="loadData(card.id)">
                  <i class="bi-pencil"></i>
                </button>
                <button class="btn btn-danger" @click="eliminar(card.id)">
                  <i class="bi bi-x-circle-fill"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  createCard,
  cargarCards,
  deleteCard,
  getCard,
  updateCard,
} from "@/services/serviceCard.js";
import { reactive } from "vue";

export default {
  name: "Crud",
  components: {},
  setup() {
    const condicion = reactive({ updt: 1 });

    const form = reactive({ title: "", description: "", url: "" });

    const mostrarSpinner = reactive({ cond: true });

    let idCard = "";
    const loadData = async (cardId) => {
      idCard = cardId;
      const card = await getCard(cardId);
      form.title = card.title;
      form.description = card.description;
      form.url = card.url;
      condicion.updt = 2;
    };

    const update = async () => {
      let respuesta = confirm("Estás seguro de modificar el registro?");
      if (respuesta) {
        await updateCard(idCard, { ...form });
        form.title = "";
        form.description = "";
        form.url = "";
        condicion.updt = 1;
      }
    };

    const eliminar = async (idCard) => {
      let respuesta = confirm("Estás seguro de eliminar el registro?");
      if (respuesta) {
        await deleteCard(idCard);
      }
    };

    const onSubmit = async () => {
      await createCard({ ...form });
      form.title = "";
      form.description = "";
      form.url = "";
    };

    const ocultarSpinner = ()=> {
      mostrarSpinner.cond = false;
    }

    const cards = cargarCards();

    return {
      form,
      onSubmit,
      cards,
      eliminar,
      condicion,
      loadData,
      update,
      mostrarSpinner,
      ocultarSpinner
    };
  },
};
</script>
<style scoped>
</style>