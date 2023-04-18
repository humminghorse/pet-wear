<template>
  <div class="">
    <div class="">
      <!-- タイトル -->
      <h1 class="mt-4 text-2xl ml-2 sm:ml-0">ペット登録</h1>
      <!-- body -->
      <form @submit.prevent class="mx-8 sm:mt-4">
        <div>
          <!-- 名前 -->
          <div class="form-item">
            <label for="name" class="label sm:w-1/4">名前</label>
            <input id="name" v-model="store.name" type="text" class="input input-bordered w-full sm:w-3/4"/>
          </div>
          <!-- アイコン画像 -->
          <div class="form-item">
            <label for="iconFiles" class="label sm:w-1/4">アイコン画像</label>
            <input id="iconFiles" @change="uploadIconFile" type="file" class="w-full sm:w-3/4" />
          </div>
          <!-- 紹介文 -->
          <div class="form-item">
            <label for="introduction" class="label sm:w-1/4">紹介文</label>
            <textarea id="introduction" v-model="store.introduction" type="text" class="textarea textarea-bordered w-full sm:w-3/4"></textarea>
          </div>
          <!-- 分類 -->
          <div class="form-item">
            <legend for="classification" class="label sm:w-1/4">分類</legend>
            <div class="flex gap-4">
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="radio" id="dog" name="classification" value="dog" class="radio" v-model="store.classification"/>
                  <span class="label sm:w-1/3-text">犬</span> 
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="radio" id="cat" name="classification" value="cat" class="radio" v-model="store.classification"/>
                  <span class="label">猫</span> 
                </label>
              </div>
            </div>
          </div>
          <!-- 犬種/猫種 -->
          <div class="form-item">
            <label for="breed" class="label sm:w-1/4">猫種</label>
            <select v-model="store.breedId" class="select select-bordered w-full sm:w-3/4">
              <option disabled value="">選択してください</option>
              <option value="1">マンチカン</option>
              <option value="2">ノルウェージャンフォレストキャット</option>
              <option value="3">雑種</option>
            </select>
          </div>
          <!-- 誕生日 -->
          <div class="form-item">
            <label for="birthday" class="label sm:w-1/4">誕生日</label>
            <!-- OPTIMIZE: borderを他のinputと統一したい(色、線の太さ、radiusなど) -->
            <input id="birthday" v-model="store.birthday" type="date" class="input input-bordered w-full sm:w-3/4"/>
          </div>
          <!-- 性別 -->
          <div class="form-item">
            <legend for="sex" class="label sm:w-1/4">性別</legend>
            <div class="flex gap-4">
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="radio" id="male" name="sex" value="male" class="radio checked:bg-blue-500" v-model="store.sex"/>
                  <span class="label">オス</span> 
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-2">
                  <input type="radio" id="female" name="sex" value="female" class="radio checked:bg-red-500" v-model="store.sex"/>
                  <span class="label">メス</span> 
                </label>
              </div>
            </div>
          </div>
          <!-- 体重 -->
          <div class="form-item">
            <label for="weightKg" class="label sm:w-1/4">体重(kg)</label>
            <input id="weightKg" v-model="store.weightKg" type="input-tel" class="input input-bordered w-full sm:w-1/4"/>
          </div>
          <!-- 毛の色 -->
          <div class="form-item">
            <legend for="furColor" class="label sm:w-1/4">毛の色</legend>
            <div>
              <span class="ml-1 text-xs">当てはまるものを複数選んでください</span>
              <div class="flex gap-4">
                <div class="form-control">
                  <label class="label cursor-pointer justify-start gap-2">
                    <input type="checkbox" checked="checked" id="black" name="furColor" value="black" v-model="store.furColor" class="checkbox" />
                    <span class="label">黒</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer justify-start gap-2">
                    <input type="checkbox" checked="checked" id="white" name="furColor" value="white" v-model="store.furColor" class="checkbox" />
                    <span class="label">白</span>
                  </label>
                </div>
                <div class="form-control">
                  <label class="label cursor-pointer justify-start gap-2">
                    <input type="checkbox" checked="checked" id="brown" name="furColor" value="brown" v-model="store.furColor" class="checkbox" />
                    <span class="label">茶</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-8 mx-4 grid place-items-center">
          <!-- TODO: バリデーション -->
          <button
            type="button"
            class="btn bg-black text-white w-72"
            @click="registerPet()"
          >
            登録
          </button>
        </div>
      </form>
      <div class="mt-2 text-center">
        <a href="/" class="text-accent color">トップへ戻る</a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue"
// import CoordinateListJson from '@/assets/json/coordinateList.json'

type Pet = {
  name: string,
  iconFiles: File[],
  introduction: string,
  classification: string,
  breedId: string,
  birthday: string,
  sex: string,
  weightKg: number,
  furColor: string[]
}

const store = reactive<Pet>({
  name: '',
  iconFiles: [],
  introduction: '',
  classification: '',
  breedId: '',
  birthday: '',
  sex: '',
  weightKg: 0,
  furColor: []
})

const uploadIconFile = (event) => {
  console.log(event.target.files[0])
  store.iconFiles.push(event.target.files[0])
}

const registerPet = () => {
  alert(JSON.stringify(store))
}
</script>
<style lang="sass">
  .form-item
    @apply sm:flex sm:p-4 sm:border-t sm:items-center
    &:last-child
      @apply sm:border-b

</style>
