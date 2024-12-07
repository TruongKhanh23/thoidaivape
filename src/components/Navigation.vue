<template>
  <nav class="bg-[#3c4043] text-white py-4 w-[100%] hidden md:block">
    <div class="mx-auto md:w-[100%] lg:w-[60%]">
      <ul class="flex justify-between items-center space-x-6">
        <li
          v-for="item in menuItems"
          :key="item.name"
          class="relative"
          @mouseover="item.isHovered = true"
          @mouseleave="item.isHovered = false"
        >
          <a
            @click="navigateTo(item)"
            :class="[
              'text-white hover:text-green-500 transition-colors duration-300 flex items-center uppercase font-semibold cursor-pointer',
              item.name === 'Sale' ? 'sale-item' : '',
            ]"
          >
            <!-- Hiển thị icon nếu item.name là "Sale" -->
            <font-awesome-icon v-if="item.name === 'Sale'" icon="tag" class="mr-2" />
            {{ item.name }}
            <font-awesome-icon
              v-if="item.subMenu"
              :icon="item.isHovered ? 'chevron-up' : 'chevron-down'"
              class="ml-1 transition-transform duration-300 text-xs"
            />
          </a>
          <ul
            v-if="item.subMenu && item.isHovered"
            class="absolute left-0 bg-[#3c4043] shadow-md rounded-md py-2 w-48 cursor-pointer z-10"
          >
            <li
              v-for="subItem in item.subMenu"
              :key="subItem"
              class="px-4 py-2 hover:text-green-500 transition-colors duration-300"
            >
              <a @click="navigateTo(subItem)">{{ subItem.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { computed, reactive, watch, onMounted } from 'vue'
import router from '../router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronUp, faTag } from '@fortawesome/free-solid-svg-icons'
import { useStore } from 'vuex'

library.add(faChevronDown, faChevronUp, faTag)

const store = useStore()

const menuItems = reactive([
  { name: 'Sale', path: 'sale', view: 'collection', order: 0 },
  { name: 'Bài viết', path: 'bai-viet', view: 'news', isHovered: false, order: 21 },
  { name: 'Thông Tin', path: 'thong-tin', view: 'about', isHovered: false, order: 22 },
])

const collections = computed(() => store.getters.getCollections)

const syncCollectionsToMenuItems = () => {
  // Xóa các mục cũ trước khi thêm mới (nếu cần)
  menuItems.splice(0, menuItems.length, ...menuItems.filter((item) => !item.isCollection))

  // Thêm mới các mục từ collections với thứ tự mặc định
  const collectionMenuItems = collections.value
    .filter((collection) => collection.type && collection.type.id == 'parrent')
    .map((collection) => {
      const item = {
        name: collection.name,
        path: collection.id,
        view: 'collection',
        isCollection: true, // Dùng để xác định các mục từ collections
        isHovered: false,
        order: collection.orderNumber,
      }
      if (collection.childrens) {
        item.subMenu = []
        for (const children of collection.childrens) {
          item.subMenu.push({
            name: children.name,
            path: children.id,
            view: 'collection',
            order: children.orderNumber,
          })
        }
      }
      return item
    })

  menuItems.push(...collectionMenuItems)

  // Sắp xếp menuItems theo thứ tự
  menuItems.sort((a, b) => a.order - b.order)
}

// Theo dõi thay đổi của collections và đồng bộ với menuItems
watch(collections, syncCollectionsToMenuItems, { immediate: true })

onMounted(() => {
  syncCollectionsToMenuItems()
})

function navigateTo(item) {
  router.push({ name: item.view, params: { id: item.path } }).then(() => {
    window.scrollTo(0, 0)
  })
}
</script>

<style scoped>
/* Tăng độ rộng submenu */
ul.w-48 {
  width: 200%;
}

/* Đổi màu cho các mục khi hover */
a {
  color: white;
  text-decoration: none;
}
a:hover {
  color: #87d068;
}

/* Giữ focus khi hover */
li.relative:hover > ul {
  display: block;
}
ul.absolute {
  display: none;
  position: absolute;
}

/* Phong cách đặc biệt cho mục Sale */
.sale-item {
  background: linear-gradient(to right, #ff7e5f, #f48220);
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: transform 0.3s ease-in-out;
}
.sale-item:hover {
  transform: scale(1.2);
}
</style>
