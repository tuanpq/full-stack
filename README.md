# Full-Stack
- Implement simple Product List, Product Detail functions with full-stack technologies

## Back-end

### Technical Stack
- Java 16
- Spring Boot 2.5.2
- MongoDB 5.0.2
- Apache Maven 3.8.2

### Steps to run
```
$mvn spring-boot:run
```

## Front-end (CMS)

### Technical Stack
- ReactJS 17.0.2
- Material UI Core 4.12.3
- Axios 0.21.1

### Steps to run
```
$npm install
$npm start
```
- Open browser with url localhost:8081.

### Screenshots
#### Search Product (List)
![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_fe_product_list.png "Search Product (List)")

#### Add Product
![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_fe_add_product.png "Add Product")

#### Update Product
![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_fe_update_product.png "Update Product")

## iOS

### Technical Stack
- Swift 5.4
- Alamofire 5.4.4
- SDWebImage 5.12.0
- UICollectionView
- UIPageViewController

### Steps to run
```
$pod install
```
- Start application from Simulator.
  - Use localhost as Server, change request URL in source code if needs

### Screenshots

#### Product List
![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_ios_product_list.png "Product List")

#### Product Detail (Vertically scrolling with 3 images)
![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_ios_product_detail_1.png "Product Detail 1") ![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_ios_product_detail_2.png "Product Detail 2") ![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_ios_product_detail_3.png "Product Detail 3")

## Android

### Technical Stack
- Fast Android Networking 1.0.2
- Glide 4.12.0
- RecycleView 1.2.0
- ViewPager2
- Fragment

### Steps to run
- Start application from Emulator.
  - Use localhost as Server, change request URL in source code if needs

### Screenshots

#### Product List
![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_android_product_list.png "Product List")

#### Product Detail (Vertically scrolling with 3 images)
![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_android_product_detail_1.png "Product Detail 1") ![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_android_product_detail_2.png "Product Detail 2") ![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_android_product_detail_3.png "Product Detail 3")

## React Native

### Technical Stack
- React Native 0.66 or later
- React Navigation 6.0 or later
- React Native Pager View 5.4.8 or later

### Steps to run

#### iOS
```
$npm install
$cd ios
$pod install
```
- Start application from Simulator.
  - Use localhost as Server, change request URL in source code if needs

#### Android
```
$npm install
$npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```
- Start application from Emulator.
  - Use localhost as Server, change request URL in source code if needs

### Screenshots - iOS

#### Product List
![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_rn_ios_product_list.png "Product List")

#### Product Detail (Vertically scrolling with 3 images)
![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_rn_ios_product_detail_1.png "Product Detail 1") ![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_rn_ios_product_detail_2.png "Product Detail 2") ![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_rn_ios_product_detail_3.png "Product Detail 3")

### Screenshots - Android

#### Product List
![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_rn_android_product_list.png "Product List")

#### Product Detail (Vertically scrolling with 3 images)
![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_rn_android_product_detail_1.png "Product Detail 1") ![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_rn_android_product_detail_2.png "Product Detail 2") ![alt text](https://github.com/tuanpq/static/blob/master/full-stack/images/fs_rn_android_product_detail_3.png "Product Detail 3")