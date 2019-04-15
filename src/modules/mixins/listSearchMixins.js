export default {
    data() {
        return {
            hasTag: true,
            tagList: [],
            tagModel: '',
            hasHot: true,
            hotModel: '',
            hasType: true,
            typeModel: '',
            dateModel: [],
            markModel: ''
        }
    },
    methods: {
        serTagClick(val) { //类型切换事件
            this.tagModel = val
            this.getList()
        },
        serHotChange(val) {
            this.hotModel = val
        },
        serTypeChange(val) {
            this.typeModel = val
        },
        serDateChange (val) { // 日期
            this.dateModel = val
            this.getList()
        },
        serReset() { //重置
            this.tagModel = ''
            this.hotModel = ''
            this.typeModel = ''
            this.dateModel = []
            this.markModel = ''
            this.getList()

        },
        serEnter(val){ //输入框搜索
            this.markModel = val
            this.getList()
        },
        getList() { //获取列表初始化

        }
    }
}