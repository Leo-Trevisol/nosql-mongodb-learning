<template>
    <!-- Botão reutilizável de submit com texto dinâmico -->
    <input type="submit" :value="text">
</template>

<script>
export default {
    // Nome do componente para debug e reutilização
    name: "InputSubmit",

    // Propriedades recebidas do componente pai
    props: {
        // Texto exibido no botão
        text: ""
    }
}
</script>

<style scoped>
    /* Estilo exclusivo do botão de submit */
    input[type='submit'] {
        width: 200px;
        margin: 0 auto;
        text-transform: uppercase;
        color: #fff;
        background-color: #25282e;
        transition: .5s;
        border: 0;
        padding: 12px;
        cursor: pointer;
    }

    /* Efeito visual ao passar o mouse */
    input[type='submit']:hover {
        background-color: #141619;
    }
</style>
