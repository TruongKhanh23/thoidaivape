<template>
  <Header />
  <Navigation />
  <CLayout>
    <RouterView />
  </CLayout>
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import { RouterView } from 'vue-router'

import Header from './components/Header/Header.vue'
import Navigation from './components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import CLayout from './components/core/CLayout.vue'

const store = useStore()

const collections = [
  {
    id: 'freebase',
    name: 'Tinh dầu freebase (Freebase E-liquids)',
    description:
      'Tinh dầu freebase là tinh dầu có chứa nicotine dạng freebase hương liệu và chất tạo nền sử dụng trong thuốc lá điện tử (vape), thích hợp cho các dòng tank subohm. Tinh dầu hút vape có tính kiềm cao với nicotine chứa trong đó là dạng tinh khiết nhất. Thành phần chứa trong tinh dầu freebase bao gồm: VG (Vegetable Glycerin), PG (Propylene Glycol), hương vị, nicotine. Dung tích cơ bản của 1 chai freebase thường từ 30ml đổ lên. Hàm lượng nicotine trong chai khoảng từ 3mg đến 6mg.\n\nKhi hút freebase bạn sẽ nhanh chóng cảm nhận được cảm giác sảng khoái dù nồng độ nicotine của tinh dầu thường khá thấp. Tinh dầu freebase được yêu thích vì chúng mang lại nhiều mùi vị cho người sử dụng. Có thể nhận thấy độ ngọt và độ đậm hương vị của các chai là khác nhau.\n\nTinh dầu freebase hiện được rất nhiều các quốc gia phát triển và sản xuất như Mỹ, Anh, Pháp,... và có rất nhiều loại hương vị cho các bạn tham khảo như: vị hoa quả, vị hoa quả lạnh, vị thuốc lá, vị ngậy, vị đồ uống.',
    sysId: '7puNyRWGDSu8F36Wc85yZ3',
  },
  {
    id: 'saltnic',
    name: 'Tinh dầu salt nicotine (Salt nicotine E-liquids)',
    description:
      'Tinh dầu salt-nicotine là tinh dầu vape (thuốc lá điện tử) có chứa salt-nicotine. Salt-nicotine là dạng nicotine chiết xuất được cho thêm benzoic acid để giảm tính kiềm (độ pH) của nicotine khiến tinh dầu salt-nicotine được hoá hơi tốt hơn ở nhiệt độ thấp làm người dùng bớt khé cổ khi sử dụng nicotine muối liều cao. Nồng độ salt nicotine thông thường hay sử dụng là từ 20mg đến 50mg.\n\nVì hàm lượng nicotine cao nên salt-nicotine rất thích hợp cho người cần cai thuốc và muốn thay thế thuốc lá.\n\nTinh dầu salt-nicotine hiện được rất nhiều các quốc gia phát triển và sản xuất như Mỹ, Anh, Pháp,... và có rất nhiều loại hương vị cho các bạn tham khảo như: vị hoa quả, vị hoa quả lạnh, vị thuốc lá, vị ngậy, vị đồ uống.',
    sysId: 'r5Mx6PQd77N9SSjsGpRkq',
  },
  {
    id: 'vape-box',
    name: 'Vape & Box',
    description:
      'Vape chính là thiết bị điện tử có hệ thống vi mạch kích 1 dòng điện lớn để đốt tinh dầu từ dạng nước lỏng sang dạng hơi nước. Do đó mà Vape được xem là một công cụ để thay thế cho thuốc lá truyền thống vì có độ an toàn cao, ít nguy cơ dẫn đến các bệnh như ung thư, tim mạch, phổi hay thậm chí còn mang lại một số công dụng tốt cho sức khỏe.',
    sysId: '7FpzbTZWp1WJFVEodIdtTO',
  },
  {
    id: 'podsystem',
    name: 'Podsystem',
    description:
      'Pod System là loại thiết bị dùng để hút thuốc lá điện tử được thiết kế nhỏ gọn và đơn giản để sử dụng. Đây là một hệ thống bao gồm hai phần chính: một pin và một đầu pod chứa chất lỏng nicotine (e-liquid) hoặc chất lỏng không chứa nicotine.\n\nPod System được thiết kế dành cho những người mới bắt đầu hút thuốc lá điện tử hoặc những người muốn có một thiết bị chơi khói nhỏ gọn và tiện lợi để mang theo. Các thiết bị Pod System thường sử dụng chất lỏng có hàm lượng nicotine cao (thường là nicotine muối) để cung cấp nồng độ nicotine tương tự như thuốc lá truyền thống, giúp giảm cơn thèm thuốc lá và hỗ trợ người dùng cai thuốc lá.\n\nPod System có thể là thiết bị có sạc lại (rechargeable) hoặc dùng một lần (disposable). Thiết bị có sạc lại thường có thể châm thêm khi chất lỏng (tinh dầu) bên trong đã hết, trong khi thiết bị dùng một lần sẽ được thay đầu Pod mới hoặc bỏ đi sau khi hết tinh dầu.',
    sysId: '5c0suwKNigKTUSshZsjmlM',
  },
]

onMounted(async () => {
  store.dispatch('setCollections', collections)
})
</script>

<style scoped></style>
