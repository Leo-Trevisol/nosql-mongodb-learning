<template>
    <!-- Botão reutilizável de submit -->
    <input type="submit" :value="text">
</template>

<script>
export default {
    // Componente simples para padronizar botões de submit
    name: "InputSubmit",

    // Texto exibido no botão
    props: {
        text: ""
    }
}
</script>

<style scoped>
    /* Estilo padrão do botão de submit */
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
