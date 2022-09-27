<template>
  <div class="flex justify-center">
    <div class="w-96">
      <!-- タイトル -->
      <h1 class="mt-4 text-2xl ml-2 sm:ml-0">ペット登録</h1>
      <!-- body -->
      <form @submit.prevent class="mx-8">
        <!-- 名前 -->
        <div>
          <label for="name" class="label">名前</label>
          <input id="name" v-model="store.name" type="text" class="input input-bordered w-full"/>
        </div>
        <!-- アイコン画像 -->
        <div>
          <label for="iconFiles" class="label">アイコン画像</label>
          <input id="iconFiles" @change="uploadIconFile" type="file"/>
        </div>
        <!-- 紹介文 -->
        <div>
          <label for="introduction" class="label">紹介文</label>
          <textarea id="introduction" v-model="store.introduction" type="text" class="textarea textarea-bordered w-full"></textarea>
        </div>
        <!-- 分類 -->
        <div>
          <legend for="classification" class="label">分類</legend>
          <div class="flex gap-4">
            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-2">
                <input type="radio" id="dog" name="classification" value="dog" class="radio" v-model="store.classification"/>
                <span class="label-text">犬</span> 
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-2">
                <input type="radio" id="cat" name="classification" value="cat" class="radio" v-model="store.classification"/>
                <span class="label-text">猫</span> 
              </label>
            </div>
          </div>
        </div>
        <!-- 犬種/猫種 -->
        <div>
          <label for="breed" class="label">猫種</label>
          <select v-model="store.breedId" class="select select-bordered w-full">
            <option disabled value="">選択してください</option>
            <option value="1">マンチカン</option>
            <option value="2">ノルウェージャンフォレストキャット</option>
            <option value="3">雑種</option>
          </select>
        </div>
        <!-- 誕生日 -->
        <div>
          <label for="birthday" class="label">誕生日</label>
          <!-- OPTIMIZE: borderを他のinputと統一したい(色、線の太さ、radiusなど) -->
          <input id="birthday" v-model="store.birthday" type="date" class="input input-bordered w-full"/>
        </div>
        <!-- 性別 -->
        <div>
          <legend for="sex" class="label">性別</legend>
          <div class="flex gap-4">
            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-2">
                <input type="radio" id="male" name="sex" value="male" class="radio checked:bg-blue-500" v-model="store.sex"/>
                <span class="label-text">オス</span> 
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-2">
                <input type="radio" id="female" name="sex" value="female" class="radio checked:bg-red-500" v-model="store.sex"/>
                <span class="label-text">メス</span> 
              </label>
            </div>
          </div>
        </div>
        <!-- 体重 -->
        <div>
          <label for="weightKg" class="label">体重(kg)</label>
          <input id="weightKg" v-model="store.weightKg" type="input-tel" class="input input-bordered w-full"/>
        </div>
        <!-- 毛の色 -->
        <div>
          <legend for="furColor" class="label">毛の色</legend>
          <span class="ml-1 text-xs">当てはまるものを複数選んでください</span>
          <div class="flex gap-4">
            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-2">
                <input type="checkbox" checked="checked" id="black" name="furColor" value="black" v-model="store.furColor" class="checkbox" />
                <span class="label-text">黒</span>
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-2">
                <input type="checkbox" checked="checked" id="white" name="furColor" value="white" v-model="store.furColor" class="checkbox" />
                <span class="label-text">白</span>
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-2">
                <input type="checkbox" checked="checked" id="brown" name="furColor" value="brown" v-model="store.furColor" class="checkbox" />
                <span class="label-text">茶</span>
              </label>
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
<style lang="css">
</style>
