import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      
      <HorizontalCardProduct category={"thoitrang"} heading={"Thời Trang"}/>
      <HorizontalCardProduct category={"dochoi"} heading={"Đồ Chơi"}/>

      <VerticalCardProduct category={"mtlaptop"} heading={"Máy Tính & LapTop"}/>
      <VerticalCardProduct category={"giaydep"} heading={"Giày Dép"}/>
      <VerticalCardProduct category={"mypham"} heading={"Mỹ Phẩm"}/>
      <VerticalCardProduct category={"tbdiengiadung"} heading={"Thiết Bị Gia Dụng"}/>
      <VerticalCardProduct category={"tbdientu"} heading={"Thiết Bị Điện Tử"}/>
      <VerticalCardProduct category={"dtpk"} heading={"Điện Thoại & Phụ Kiện"}/>
      <VerticalCardProduct category={"nhasach"} heading={"Nhà Sách Online"}/>
      <VerticalCardProduct category={"televisions"} heading={"Thể Thao & Du Lịch"}/>
    </div>
  )
}

export default Home