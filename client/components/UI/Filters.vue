<template>
    <v-card>
        <v-card-text>
            <small>Поиск по тегам</small>
            <v-chip-group 
                column 
                v-model="selectedTag"
                class="d-flex flex-wrap"
            >
                <v-chip 
                    small
                    active-class="purple--text lighten-5 text--accent-5"
                    mandatory 
                    dark
                    :color="colors[index%colors.length]"
                    v-for="(tag, index) in tags" :key="index"
                >
                    <div class="caption">
                        {{tag}}
                    </div>
                </v-chip>
            </v-chip-group>
            <small>Сортировать</small>
            <v-radio-group v-model="reverse">
                <v-radio
                    :label="'Сначала новые'"
                    :value="false"
                ></v-radio>
                <v-radio
                    :label="'Сначала старые'"
                    :value="true"
                >
                </v-radio>
            </v-radio-group>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="applyFilters" color="primary" small>
                найти
            </v-btn>
        </v-card-actions>
    </v-card>
</template>


<script>
export default {
    props:{
        tags: [],
    },
    data(){
        return{
            reverse: false,
            selectedTag: '',
            colors: [
                'primary',
                'success',
                'cyan',
                'red',
                'green',
                'indigo',
                'deep-purple'
            ]
        }
    },
    methods:{
        applyFilters(){
            let filters = {}
            filters.selectedTag=this.tags[this.selectedTag]
            if (!this.selectedTag && this.selectedTag!==0) filters.selectedTag = ''
            console.log('tag', filters.selectedTag)
            filters.reverse=this.reverse
            this.$emit('applyFilters', filters)
        }
        
    }
}
</script>
