

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Product', [
      {
        product_name: 'Áo Thun Cổ Tròn Ngắn Tay',
        description: 'Chất liệu vải có trọng lượng tương đối sẽ khiến bạn yêu thích và sử dụng nhiều hơn. Kiểu dáng rộng rãi.',
        price: 293000,
        stock_quantity: 50,
        SubCategory_id: 1,
        Store_id: 1,
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
        size: '["S","M","L","XL"]',
        image: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/422992/item/goods_52_422992.jpg?width=750',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Thun Dáng Rộng Ngắn Tay',
        description: 'Áo thun 100% cotton, đã giặt trước để có vẻ ngoài giản dị. Thiết kế khối màu tương phản.',
        price:391000,
        stock_quantity: 100,
         SubCategory_id: 2, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457833/item/vngoods_12_457833.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Thun Dáng Rộng Kẻ Sọc Tay Lỡ',
        description: 'Áo thun cotton 100% bền đẹp. Thiết kế và kiểu dáng đẹp mắt.',
        price: 391000,
        stock_quantity: 100,
         SubCategory_id: 3, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455414/item/vngoods_44_455414.jpg?width=750',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'AIRism Cotton Áo Thun Cổ Tròn Dáng Rộng',
        description: 'AIRismmịn màng với vẻ ngoài như cotton. Thiết kế sọc bản nhỏ tinh tế.',
        price:391000,
        stock_quantity: 100,
         SubCategory_id: 1, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/463164/item/vngoods_00_463164.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'KAWS Áo Nỉ Dài Tay',
        description: 'Nghệ sĩ đương đại KAWS. Ra mắt BST áo thun UT độc quyền tại UNIQLO nhân sự kiện ra mắt của ấn bản sách nghệ thuật mới từ KAWS.',
        price:784000,
        stock_quantity: 100,
         SubCategory_id: 2, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467773/item/vngoods_09_467773.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
          product_name: 'PEANUTS Áo Nỉ Dài Tay',
          description: 'Bộ sưu tập lấy cảm hứng từ bóng chày, môn thể thao yêu thích của những người bạn Peanuts..',
          price:784000,
          stock_quantity: 100,
           SubCategory_id: 2, // Thay thế bằng  SubCategory_id thực tế
          Store_id: 3, // Thay thế bằng Store_id thực tế
          color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
         size: '["S","M","L","XL"]',
          image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/464509/sub/vngoods_464509_sub7.jpg?width=750',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
        product_name: 'HEATTECH Áo Nỉ Lót Lông Có Mũ Kéo Khóa',
        description: 'Dựa trên phản hồi của khách hàng, chúng tôi đã sử dụng sản phẩm HEATTECH để có được sự ấm áp và thoải mái.',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 2, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/450189/item/vngoods_02_450189.jpg?width=750',
      
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo  Bomber Nam',
        description: 'Áo  Bomber Nam Da Lộn Trơn Dây Kéo Form Regular - 10F23JAC001 là mẫu áo khoác bomber trơn đơn giản luôn nhận được sự săn đón của các chàng trai trẻ, yêu thích phong cách cá tính, năng động:',
        price:1178000,
        stock_quantity: 100,
         SubCategory_id: 3, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://routine.vn/media/amasty/amoptmobile/catalog/product/cache/5b5632a96492396f42c72e22fdd64763/a/o/ao-khoac-nam-10f23jac006_black_1__1_jpg.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo  Chần Bông Nam Cổ Trụ',
        description: 'Chất liệu Polyester có nhiều ưu điểm nổi trội như chống nhăn, chống thấm tốt và độ bền cao',
        price:1374000,
        stock_quantity: 100,
         SubCategory_id: 3, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQKrf-Cvad99Tana0NDllpCXR21TmuGyHoBUFUfneFaDVMmVUCbnfFJK6Wz297Ik0QCWXRO5NR6WKX9l6S7dBIiLDWmTjyaJkA5L64ysm_HzykS3ELgVRtgENwnhV6dguCyd9QwleFvPA&usqp=CAc',
      
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo  Nam Tay Dài Nylon',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 2, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://contents.mediadecathlon.com/p1554129/874ae57ea18eeccdb72af068ce931ee4/p1554129.jpg?f=650x650&format=auto',
       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Gi-Lê Đan Len Cổ V',
        description: 'Kết cấu mềm mại và thoáng mát. Thích hợp cho phong cách tinh tế hoặc giản dị.',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 4, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 3, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://maydongphuc.vn/upload/i/pd/dong%20phuc%20ao%20ghi%20le%20nam%20cao%20cap%20tai%20tphcm%20mon%20amie%2005%20376.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Len Vải Sợi Souffle Cổ Tròn Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 4, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/460950/item/vngoods_01_460950.jpg?width=320',
        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Cardigan Vải Souffle Cổ Đứng',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 4, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 4, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/461407/item/vngoods_01_461407.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Sơ Mi Không Cần Ủi Slim Fit Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 5, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 3, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462335/item/goods_62_462335.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Áo Sơ Mi Extra Fine Cotton Dài Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 5, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 2, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467494/item/vngoods_62_467494.jpg?width=320',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Studio Ghibli Áo Sơ Mi Cổ Mở Ngắn Tay',
        description: 'Với chất vải nylon nhẹ, rất mát tay khi sờ, còn có khả năng chống nước tốt',
        price:980000,
        stock_quantity: 100,
         SubCategory_id: 5, // Thay thế bằng  SubCategory_id thực tế
        Store_id: 1, // Thay thế bằng Store_id thực tế
        color: '["Trắng","Đen","Vàng","Hồng","Đỏ"]',
       size: '["S","M","L","XL"]',
        image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/466530/item/vngoods_09_466530.jpg?width=320',
      
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product', null, {});
  },
};