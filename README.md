# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Apparel Web page

The website where you be able to shop for clothes and checkout

# Goals
#
a user can select a product on the web app view it, edit, add  and purchase a product
view items by selected category
# User story
* As a buyer I would like to be able to update my cart
* As a buyer I would like to know if a item is in stock
* As a buyer I would like to look at a variety of items

## Task
* [✔] Wireframe the frontend
* [✔] Create a Reate Application
* [✔] Create DataBase
* [] Create a landing/homepage
* [] Create a clothing list
    * [] Create item card
    * [] include add to cart button
* [] Create a checkout page
* [] Create a NavBar
* [] user should be able to search, edit and add items




Update products SET size = 'S,M,L' WHERE id= 2,
Update products SET  = 'https://img1.cfcdn.club/73/25/73ea0d9a32b267c3a3c16827e5362125_350x350.jpg' WHERE id= 2,
Update products SET imgurl = 'https://i.pinimg.com/originals/73/f8/57/73f857050959990f6af9f2a9175b765e.png' WHERE id= 15,
Update products SET imgurl = 'https://i.pinimg.com/originals/b5/b3/fc/b5b3fcbdb8205e22ea4e6a8b2380608f.png' WHERE id= 6,
Update products SET imgurl = 'https://www.bootonclub.com/wp-content/uploads/2018/04/IMG_3944.jpg' WHERE id= 5;

INSERT INTO products (name, type, category, price, count, imgurl, size)VALUES ('jeans', 'pants', 'women', 30, 3, 'https://img.ltwebstatic.com/images2_pi/2018/07/16/15317328311538785945_thumbnail_600x799.webp', 'S,M,L');

INSERT INTO products (name, type, category, price, count, imgurl, size)VALUES ('jacket', 'Outerwear', 'men', 40, 5, 'https://1860388937.rsc.cdn77.org/1135873-thickbox_default/nasa-insignia-metallic-puffer-jacket-blue.jpg', 'M,L,XL');

INSERT INTO products (name, type, category, price, count, imgurl, size)VALUES ('sweater', 'tops', 'women', 25, 2, 'https://cdni.llbean.net/is/image/wim/297466_0_44?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2', 'S,M' );

INSERT INTO products (name, type, category, price, count, imgurl, size)VALUES ('long sleeve shirt', 'tops', 'men', 25, 4, 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/abqpg5g5qlhfkuo4gt9g/sportswear-nyc-mens-long-sleeve-t-shirt-Wb0DbJ.jpg', 'M,L');

INSERT INTO products (name, type, category, price, count, imgurl, size)VALUES ('sweater', 'tops', 'women', 25, 2, 'https://images.boardriders.com/global/rvca-products/all/default/medium-large2/avjft00105_rvca,wg_pne_frt1.jpg', 'XS,S');

INSERT INTO products (name, type, category, price, count, imgurl, size)VALUES ('backpack', 'accessories' , 'all' , 60, 1, 'https://images.boardriders.com/global/rvca-products/all/default/medium-large2/mabk2rcb_rvca,fg_mul_frt1.jpg', '1SZ');


INSERT INTO products (name, type, category, price, count, imgurl, size)VALUES ('face mask', 'accessories', 'all', 10, 1, 'https://images.boardriders.com/global/rvca-products/all/default/medium-large2/avyaa00119_rvca,fg_blk_frt1.jpg', '1SZ');

INSERT INTO products (name, type, category, price, count, imgurl, size)VALUES ('face mask', 'accessories' , 'all', 10, 2, 'https://images.boardriders.com/global/rvca-products/all/default/medium-large2/avyaa00148_rvca,fg_utd_frt1.jpg', '1SZ');

INSERT INTO products (name, type, category, price, count, imgurl, size)VALUES ('jacket', 'Outerwear', 'women', 45, 1, 'images.boardriders.com/global/rvca-products/all/default/medium-large2/avjjk00104_rvca,l_oxr_frt1.jpg', 'XS,S');
INSERT INTO products (name, type, category, price, count, imgurl, size)VALUES ('hat', 'accessories', 'all', 10, 2, 'https://cdn.shopify.com/s/files/1/0505/0793/9999/products/New-York-Yankees-2000-World-Series-Gray-Brim-New-Era-Fitted-Hat-3_580x.jpg?v=1604779160', '7 1/4, 7 3/4');


ALTER TABLE products ADD COLUMN size VARCHAR(55);


routes

https://github.com/LeaskN/SE2InstructorNotes/tree/master/PSQL_FrontEnd_Practice
