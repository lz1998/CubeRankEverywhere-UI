<template>
    <div class="layout">
        <v-app-bar
                app
                color="primary"
                dark
        >
            <v-toolbar-title>
                Cube Rank Every Where
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "Layout"
    };
</script>

<style>

</style>
