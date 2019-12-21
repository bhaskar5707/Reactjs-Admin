<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes with
| underscores in the controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'ReactApi';

$route['add-brand'] = 'ReactApi/createBrand';
$route['get-brand'] = 'ReactApi/getBrand';
$route['delete-brand'] = 'ReactApi/deleteBrand';
$route['edit-brand/(:num)'] = 'ReactApi/getBrandById/$1';
$route['update-brand/(:num)'] = 'ReactApi/editBrand/$1';

$route['add_category'] = 'ReactApi/createCategory';
$route['categories'] = 'ReactApi/category';
$route['delete-category'] = 'ReactApi/deleteCategory';
$route['edit-category'] = 'ReactApi/getCategory';
$route['update-category'] = 'ReactApi/editCategory';

$route['add-subcategory'] = 'ReactApi/createSubCategory';
$route['subcategory'] = 'ReactApi/subcategory';
$route['delete-subcategory'] = 'ReactApi/deleteSubCategory';
$route['edit-subcategory'] = 'ReactApi/getSubCategory';
$route['update-subcategory'] = 'ReactApi/editSubCategory';

$route['total-category'] = 'ReactApi/totalCategory';
$route['total-subcategory'] = 'ReactApi/totalSubCategory';
$route['total-childcategory'] = 'ReactApi/totalChildCategory';
$route['total-user'] = 'ReactApi/totalUser';
$route['total-active-user'] = 'ReactApi/totalActiveUser';

$route['sub-subcategory'] = 'ReactApi/getSubCategoryByCategoryId';
$route['get-childcategory-by-subcategory'] = 'ReactApi/getChildCategoryByCategoryId';


$route['add-sub_child_category'] = 'ReactApi/createSubChildCategory';
$route['childcategory'] = 'ReactApi/getChildCategory';
$route['delete-childcategory'] = 'ReactApi/deleteChildCategory';
$route['edit-childcategory'] = 'ReactApi/getChildCategoryById';
$route['update-childcategory'] = 'ReactApi/editChildCategory';

$route['add-product'] = 'ReactApi/createProduct';
$route['products'] = 'ReactApi/getAllProducts';
$route['delete-product'] = 'ReactApi/deleteProduct';
$route['edit-product'] = 'ReactApi/getProductById';
$route['add-product-with-image'] = 'ReactApi/createProductWithImage';
$route['edit-product-with-image'] = 'ReactApi/editProductWithImage';

$route['add-single-image'] = 'ReactApi/uploadSingleImage';
$route['add-single-image-with-data'] = 'ReactApi/uploadSingleImageWithData';
$route['add-multiple-image'] = 'ReactApi/uploadMultipleImage';


$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
