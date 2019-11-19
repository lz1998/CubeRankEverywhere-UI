<template>
    <div class="rank">
        <v-data-table
                :disable-filtering="true"
                :disable-pagination="true"
                :disable-sort="false"
                :dark="true"
                :headers="headers"
                :items="records"
                class="elevation-1"
        ></v-data-table>
    </div>
</template>

<script type="text/ecmascript-6">
    // 这是排行榜页面
    import {test} from '@/api/test'
    import {login} from '@/api/group'
    export default {
        name: "Rank",
        data(){
            return{
                headers:[
                    { text: 'PUZZLE', value: 'puzzle' },
                    { text: 'TYPE', value: 'type' },
                    { text: 'WCA ID', value: 'wcaId' },
                    { text: 'NAME', value: 'name' },
                    { text: 'RESULT', value: 'result' },
                    { text: 'COMPETITION', value: 'competition' },
                    { text: 'TIME', value: 'time' },
                ],
                records:[
                    {
                        puzzle:'333',
                        type:'single',
                        wcaId:'2016LIZH03',
                        name: 'lizheng',
                        result:'24.15',
                        competition:'ShanghaiOpen',
                        time:'2016-11-07'
                    },
                    {
                        puzzle:'333',
                        type:'single',
                        wcaId:'2016LIZH03',
                        name: 'lizheng',
                        result:'24.15',
                        competition:'ShanghaiOpen',
                        time:'2016-11-07'
                    },
                    {
                        puzzle:'333',
                        type:'single',
                        wcaId:'2016LIZH03',
                        name: 'lizheng',
                        result:'24.15',
                        competition:'ShanghaiOpen',
                        time:'2016-11-07'
                    }
                ],
                schoolId:-1
            }
        },
        mounted() {
            // http://localhost:8080/home?schoolId=1
            // 从url读取schoolId (home?schoolId=123)
            // TODO 如果没读到，跳转到主页，提示先创建学校
            // TODO 获取后端学校名称，logo等基本信息，保存到localStorage
            // TODO 获取所有学生wcaId，入学时间，退学时间，保存到localStorage
            // TODO 获取wca数据，计算纪录，保存到localStorage

            this.schoolId=this.$route.query.schoolId
            console.log(this.schoolId)

            login("ecust","123").then(res=>{
                console.log(res)
            })
        }
    };
</script>

<style>

</style>
