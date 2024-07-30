<template>
  <el-form  style=" margin-top: 20px">
    <el-form-item label="徒步公司">
      <el-radio-group v-model="timeRange" aria-label="size control">
        <el-select
            v-model="value"
            filterable
            remote
            reserve-keyword
            placeholder="输入俱乐部名称"
            :remote-method="remoteMethod"
            :loading="loading"
            style="width: 240px"
        >
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="活动时间">
      <el-radio-group v-model="timeRange" aria-label="size control">
        <el-radio-button value="1week">一周之内</el-radio-button>
        <el-radio-button value="2week">一周到两周</el-radio-button>
        <el-radio-button value="3week">两周到三周</el-radio-button>
        <el-radio-button value="1month">三周到一个月</el-radio-button>
        <el-radio-button value="future">一个月以上</el-radio-button>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="徒步地点" style=" margin-top: 20px">
      <el-select
          v-model="values"
          placeholder="Select"
          style="width: 240px"
      >
        <el-option
            v-for="item in optiones"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-select v-model="value" placeholder="Select" style="width: 240px">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-select
          v-model="value"
          placeholder="Select"
          style="width: 240px"
      >
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </el-form-item>
  </el-form>



  <div class="container">
    <div class="video-list">
      <div class="video-item">
        <img crossorigin="anonymous"    src="https://images.pexels.com/photos/19138372/pexels-photo-19138372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Video Thumbnail">
        <div class="info">
          <h4>水里有毒</h4>
          <p> 丈量者户外 | 宁波,宁波,海曙区横街镇 </p>
        </div>
      </div>
      <div class="video-item">
        <a href="https://mp.weixin.qq.com/s?__biz=MzkxNTQ4NTkyOQ==&mid=2247485636&idx=1&sn=c4deb5244f40cb8067456bbc306b00a7&chksm=c15f2d42f628a454f12c81cb1865751a8578f6fd023990c00e71974991b131145be065ba51dd#rd"
           target="_blank">
          <img
              src="https://images.pexels.com/photos/19138372/pexels-photo-19138372.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Video Thumbnail">
          <div class="info">
            <h4>【漂流+溯溪】7月6-7日 夏享清凉 大野洼溯溪+将军关漂流两日活动</h4>
            <p> 丈量者户外 | 湖南省,郴州</p>
          </div>
        </a>
      </div>
      <div class="video-item">
        <a href="https://mp.weixin.qq.com/s?__biz=MzkxNTQ4NTkyOQ==&mid=2247485692&idx=1&sn=b65059e6a87a56d02ba90f07586729a6&chksm=c15f2d7af628a46c91553c93a2d2e836d785fac6755955dff74cc35c57618fddac4e3fd0d8eb#rd" target="_blank">
          <img src="https://images.pexels.com/photos/6226658/pexels-photo-6226658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Video Thumbnail">
          <div class="info">
            <h4>7月27日浙东大竹海刺激漂流＋大竹海景区，飞流险滩、千倾碧竹……送速干衣【大竹海+漂流】</h4>
            <p> 丈量者户外 | 新疆,乌鲁木齐,乌鲁木齐市,乌鲁木齐市</p>
          </div>
        </a>
      </div>
      <div class="video-item">
        <img src="https://images.pexels.com/photos/11532473/pexels-photo-11532473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Video Thumbnail">
        <div class="info">
          <h4>凯旋门附近不文明行为</h4>
          <p> 丈量者户外 | 上海市,上海,浦东新区,世纪大道200号</p>
        </div>
      </div>
      <div class="video-item">
        <img src="https://www.ah.chinanews.com/cr/2022/0809/1471245043.png" alt="Video Thumbnail">
        <div class="info">
          <h4>最新版本心之钥老司机</h4>
          <p> 丈量者户外 | 湖南省,郴州,资兴市,高椅岭</p>
        </div>
      </div>
      <div class="video-item">
        <a href="https://mp.weixin.qq.com/s?__biz=MzkxNTQ4NTkyOQ==&mid=2247485692&idx=1&sn=b65059e6a87a56d02ba90f07586729a6&chksm=c15f2d7af628a46c91553c93a2d2e836d785fac6755955dff74cc35c57618fddac4e3fd0d8eb#rd" target="_blank">
          <img src="https://images.pexels.com/photos/6226658/pexels-photo-6226658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Video Thumbnail">
          <div class="info">
            <h4>7月27日浙东大竹海刺激漂流＋大竹海景区，飞流险滩、千倾碧竹……送速干衣【大竹海+漂流】</h4>
            <p> 丈量者户外 | 新疆,乌鲁木齐,乌鲁木齐市,乌鲁木齐市</p>
          </div>
        </a>
      </div>

      <div class="paging" style="margin: 0 auto;">

        <el-pagination
            :page-size="20"
            :pager-count="11"
            layout="prev, pager, next"
            :total="1000"
        />
      </div>
    </div>


  </div>


</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";

const timeRange = ref('');
const values = ref('')

interface ListItem {
  value: string
  label: string
}

const list = ref<ListItem[]>([])
const options = ref<ListItem[]>([])
const value = ref<string[]>([])
const loading = ref(false)

onMounted(() => {
  list.value = states.map((item) => {
    return { value: `value:${item}`, label: `label:${item}` }
  })
})

const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      options.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase())
      })
    }, 200)
  } else {
    options.value = []
  }
}

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const optiones = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

</script>

<style scoped lang="scss">
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
.navbar {
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.navbar a {
  margin: 5px;
  padding: 8px 16px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
}
.navbar a:hover {
  background-color: #f0f0f0;
}
.container {
  padding: 20px;
}
.banner {
  position: relative;
  margin-bottom: 20px;
}
.banner img {
  width: 100%;
  border-radius: 8px;
}
.video-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.video-item {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
  width: calc(33.333% - 10px);
  margin-bottom: 20px;
}
.video-item img {
  width: 100%;
  height: auto;
}
.video-item .info {
  padding: 10px;
}
.video-item .info h4 {
  margin: 0;
  font-size: 16px;
  color: #333;
}
.video-item .info p {
  margin: 5px 0;
  font-size: 14px;
  color: #777;
}
</style>