
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ReactApi extends CI_Controller {

  public function __construct()
  {
    parent::__construct();
    $this->load->model('Reactapi_model');
    $this->load->database();
  }
  
  ############# Brand ###########


  public function createBrand()
  { 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    if( ! empty($_POST)) {

      $brand_name = $_POST['brand_name'];
      
      $Data = array(
        'name' => $brand_name
      );

      $id = $this->Reactapi_model->insert_data('brand',$Data);

      $response = array(
        'status' => 'success',
        'message' => 'Brand added successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }
  public function getBrand()
  { 
    header("Access-Control-Allow-Origin: *");

    $brand = $this->Reactapi_model->get_data('brand');

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($brand));

  }
  public function deleteBrand()
  { 
    header("Access-Control-Allow-Origin: *");

    $brandId = $this->input->post('brandId');

    $category = $this->Reactapi_model->delete_record($brandId,'brand');

    $response = array(
      'message' => 'Brand deleted successfully.'
    );

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }


  public function getBrandById($id)
  { 
    header("Access-Control-Allow-Origin: *");
    //print_r($id);die;

    $brand = $this->Reactapi_model->getBrandById($id);

    $Data = array(
      'id' => $brand->id,
      'name' => $brand->name,
      'status' => $brand->status
    );

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($Data));
  }
  public function editBrand($id)
  { 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");


    if( ! empty($_POST)) {
      $brand_name = $_POST['brand_name'];
      
      $Data = array(
        'name' => $brand_name
      );

      $id = $this->Reactapi_model->update_data($id, $Data,'brand');

      $response = array(
        'status' => 'success',
        'message' => 'Brand update successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  ############ Brand ###########

  ############# Start Category Module ############
  public function category()
  { 
    header("Access-Control-Allow-Origin: *");

    $category = $this->Reactapi_model->get_data('category');

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($category));
  }

  public function getCategory()
  { 
    header("Access-Control-Allow-Origin: *");

    $categoryId = $this->input->post('categoryId');

    $category = $this->Reactapi_model->getDataBy_id($categoryId,'category');

    $Data = array(
      'id' => $category->id,
      'category_name' => $category->category_name,
      'status' => $category->status
    );

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($Data));
  }

  public function createCategory()
  { 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    $formdata = json_decode(file_get_contents('php://input'), true);

    if( ! empty($formdata)) {

      $category_name = $formdata['category_name'];
      
      $Data = array(
        'category_name' => $category_name,
        'status' => 1
      );

      $id = $this->Reactapi_model->insert_data('category',$Data);

      $response = array(
        'status' => 'success',
        'message' => 'Category added successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  public function editCategory()
  { 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    $formdata = json_decode(file_get_contents('php://input'), true);

    if( ! empty($formdata)) {

      $categoryId = $formdata['categoryId'];
      $category_name = $formdata['category_name'];
      
      $Data = array(
        'category_name' => $category_name
      );

      $id = $this->Reactapi_model->update_data($categoryId, $Data,'category');

      $response = array(
        'status' => 'success',
        'message' => 'Category update successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  public function deleteCategory()
  { 
    header("Access-Control-Allow-Origin: *");

    $categoryId = $this->input->post('categoryId');

    $category = $this->Reactapi_model->delete_record($categoryId,'category');

    $response = array(
      'message' => 'Category deleted successfully.'
    );

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  ############# End Category Module ############


  ############# Start Sub Category Module ############

  public function createSubCategory()
  { 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    $formdata = json_decode(file_get_contents('php://input'), true);

    if( ! empty($formdata)) {

      $category_name = $formdata['category_name'];
      $sub_category_name = $formdata['sub_category_name'];
      
      $Data = array(
        'category_id' => $category_name,
        'sub_category_name' => $sub_category_name,
        'status' => 1
      );

      $id = $this->Reactapi_model->insert_data('sub_category',$Data);

      $response = array(
        'status' => 'success',
        'message' => 'Sub category added successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  public function subcategory()
  { 
    header("Access-Control-Allow-Origin: *");

    $category = $this->Reactapi_model->getSubCategory();

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($category));
  }

  public function deleteSubCategory()
  { 
    header("Access-Control-Allow-Origin: *");

    $SubcategoryId = $this->input->post('SubcategoryId');

    $category = $this->Reactapi_model->delete_record($SubcategoryId,'sub_category');

    $response = array(
      'message' => 'Category deleted successfully.'
    );

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }
  public function getSubCategory()
  { 
    header("Access-Control-Allow-Origin: *");

    $subcategoryId = $this->input->post('subcategoryId');

    $category = $this->Reactapi_model->getSubCategoryById($subcategoryId);

    $Data = array(
      'id' => $category->id,
      'sub_category_name' => $category->sub_category_name,
      'category_name' => $category->category_name,
      'category_id' => $category->category_id,
      'status' => $category->status
    );

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($Data));
  }
  public function editSubCategory()
  { 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    $formdata = json_decode(file_get_contents('php://input'), true);

    if( ! empty($formdata)) {

      $subcategoryId = $formdata['subcategoryId'];
      $category_name = $formdata['category_name'];
      $sub_category_name = $formdata['sub_category_name'];
      
      $Data = array(
        'category_id' => $category_name,
        'sub_category_name' => $sub_category_name
      );

      $id = $this->Reactapi_model->update_data($subcategoryId, $Data,'sub_category');

      $response = array(
        'status' => 'success',
        'message' => 'Subcategory update successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }
  ############# End Sub Category Module ############

  
  

  public function totalCategory()
  {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    $query = $this->db->query("SELECT * FROM category");
    $totalCategory = $query->num_rows();
    $response = array(
      'status' => $totalCategory
    );
    $this->output
    ->set_content_type('application/json')
    ->set_output(json_encode($response));
  }

  public function totalSubCategory()
  {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    $query = $this->db->query("SELECT * FROM sub_category");
    $totalSubCategory = $query->num_rows();
    $response = array(
      'status' => $totalSubCategory
    );
    $this->output
    ->set_content_type('application/json')
    ->set_output(json_encode($response));
  }

  public function totalChildCategory()
  {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    $query = $this->db->query("SELECT * FROM sub_child_category");
    $totalChildCategory = $query->num_rows();
    $response = array(
      'status' => $totalChildCategory
    );
    $this->output
    ->set_content_type('application/json')
    ->set_output(json_encode($response));
  }

  public function totalUser()
  {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    $query = $this->db->query("SELECT * FROM users");
    $totalSubCategory = $query->num_rows();
    $response = array(
      'status' => $totalSubCategory
    );
    $this->output
    ->set_content_type('application/json')
    ->set_output(json_encode($response));
  }

  public function totalActiveUser()
  {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    $query = $this->db->query("SELECT * FROM users where status=1");
    $totalActiveUser = $query->num_rows();
    $response = array(
      'status' => $totalActiveUser
    );
    $this->output
    ->set_content_type('application/json')
    ->set_output(json_encode($response));
  }

  public function getSubCategoryByCategoryId()
  { 
    header("Access-Control-Allow-Origin: *");

    $categoryId = $this->input->post('categoryId');

    $category = $this->Reactapi_model->getSubCategoryByCategory($categoryId);

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($category));
  }

  public function getChildCategoryByCategoryId()
  { 
    header("Access-Control-Allow-Origin: *");

    $subcategoryId = $this->input->post('subcategoryId');

    $category = $this->Reactapi_model->getChildCategoryBySubCategory($subcategoryId);

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($category));
  }

  public function createSubChildCategory()
  { 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    $formdata = json_decode(file_get_contents('php://input'), true);

    if( ! empty($formdata)) {

      $category_name = $formdata['category_name'];
      $sub_category_id = $formdata['sub_category_name'];
      $child_category_name = $formdata['child_category_name'];
      
      $Data = array(
        'category_id' => $category_name,
        'sub_category_id' => $sub_category_id,
        'child_category_name' => $child_category_name,
        'status' => 1
      );

      $id = $this->Reactapi_model->insert_data('sub_child_category',$Data);

      $response = array(
        'status' => 'success',
        'message' => 'Sub child category added successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  public function getChildCategory()
  { 
    header("Access-Control-Allow-Origin: *");

    $category = $this->Reactapi_model->getChildCategory();

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($category));
  }
  public function deleteChildCategory()
  { 
    header("Access-Control-Allow-Origin: *");

    $categoryId = $this->input->post('categoryId');

    $category = $this->Reactapi_model->delete_record($categoryId,'sub_child_category');

    $response = array(
      'message' => 'Category deleted successfully.'
    );

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  public function getChildCategoryById()
  { 
    header("Access-Control-Allow-Origin: *");

    $categoryId = $this->input->post('categoryId');

    $category = $this->Reactapi_model->getChildCategoryById($categoryId);

    $Data = array(
      'id' => $category->id,
      'sub_category_name' => $category->sub_category_name,
      'category_name' => $category->category_name,
      'category_id' => $category->category_id,
      'sub_category_id' => $category->sub_category_id,
      'child_category_name' => $category->child_category_name,
      'status' => $category->status
    );

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($Data));
  }



  public function editChildCategory()
  { 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

    $formdata = json_decode(file_get_contents('php://input'), true);

    if( ! empty($formdata)) {

      $childcategoryId = $formdata['childcategoryId'];
      $category_name = $formdata['category_name'];
      $sub_category_name = $formdata['sub_category_name'];
      $child_category_name = $formdata['child_category_name'];
      
      $Data = array(
        'category_id' => $category_name,
        'sub_category_id' => $sub_category_name,
        'child_category_name' => $child_category_name
      );

      $id = $this->Reactapi_model->update_data($childcategoryId, $Data,'sub_child_category');

      $response = array(
        'status' => 'success',
        'message' => 'Child category update successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  ############# Product Module #############
  public function createProduct()
  { 
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");



    $formdata = json_decode(file_get_contents('php://input'), true);
    if( ! empty($formdata)) {

      $title = $formdata['title'];
      $sku = $formdata['sku'];
      $buyer_price = $formdata['buyer_price'];
      $seller_price = $formdata['seller_price'];
      $discount_type = $formdata['discount_type'];
      $discount = $formdata['discount'];
      $description = $formdata['description'];
      $category = $formdata['category_name'];
      $sub_category = $formdata['sub_category_name'];
      $child_category = $formdata['child_category_name'];
      $product_availability = $formdata['product_availability'];
      $stock = $formdata['stock'];
      
      $Data = array(
        'title' => $title,
        'sku' => $sku,
        'buyer_price' => $buyer_price,
        'seller_price' => $seller_price,
        'discount_type' => $discount_type,
        'discount' => $discount,
        'description' => $description,
        'category' => $category,
        'sub_category' => $sub_category,
        'child_category' => $child_category,
        'product_availability' => $product_availability,
        'stock' => $stock,
        'status' => 1
      );

      $id = $this->Reactapi_model->insert_data('product',$Data);

      $response = array(
        'status' => 'success',
        'message' => 'Product created successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  public function createProductWithImage()
  { 
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
    
    //print_r($_POST);die;
    move_uploaded_file($_FILES["image"]["tmp_name"], "image/" . $_FILES["image"]["name"]);
    //echo $_FILES["image"]["name"];die;

    if( ! empty($_POST)) {

      $myImage = $_FILES["image"]["name"];
      
      /*$Data = array(
        'product_image' => $myImage,
        'title' => $_POST['title']
      );*/
      $Data = array(
        'product_image' => $myImage,
        'title' => $_POST['title'],
        'sku' => $_POST['sku'],
        'buyer_price' => $_POST['buyer_price'],
        'seller_price' => $_POST['seller_price'],
        'discount_type' => $_POST['discount_type'],
        'discount' => $_POST['discount'],
        'description' => $_POST['description'],
        'category' => $_POST['category'],
        'sub_category' => $_POST['sub_category'],
        'child_category' => $_POST['child_category'],
        'product_availability' => $_POST['product_availability'],
        'stock' => $_POST['stock'],
        'status' => 1
      );

      $id = $this->Reactapi_model->insert_data('product',$Data);

      $response = array(
        'status' => 'success',
        'message' => 'Image save successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  public function editProductWithImage()
  { 
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
    
    //print_r($_POST);die;
    move_uploaded_file($_FILES["image"]["tmp_name"], "image/" . $_FILES["image"]["name"]);
    //echo $_FILES["image"]["name"];die;

    if( ! empty($_POST)) {

      $myImage  = $_FILES["image"]["name"];
      if(!empty($myImage)){
        $myImage1 = $_FILES["image"]["name"];
      }else{
        $myImage1 = $_POST['oldimage'];
      }
      
      /*$Data = array(
        'product_image' => $myImage,
        'title' => $_POST['title']
      );*/
      $Data = array(
        'product_image' => $myImage1,
        'title' => $_POST['title'],
        'sku' => $_POST['sku'],
        'buyer_price' => $_POST['buyer_price'],
        'seller_price' => $_POST['seller_price'],
        'discount_type' => $_POST['discount_type'],
        'discount' => $_POST['discount'],
        'description' => $_POST['description'],
        'category' => $_POST['category'],
        'sub_category' => $_POST['sub_category'],
        'child_category' => $_POST['child_category'],
        'product_availability' => $_POST['product_availability'],
        'stock' => $_POST['stock'],
        'status' => 1
      );
      $productId = $_POST['productId'];
      $id = $this->Reactapi_model->update_data($productId, $Data,'product');

      $response = array(
        'status' => 'success',
        'message' => 'Image save successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  public function getAllProducts()
  { 
    header("Access-Control-Allow-Origin: *");

    $products = $this->Reactapi_model->getAllProducts();

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($products));
  }
  public function deleteProduct()
  { 
    header("Access-Control-Allow-Origin: *");

    $productId = $this->input->post('productId');

    $product = $this->Reactapi_model->delete_record($productId,'product');

    $response = array(
      'message' => 'Product deleted successfully.'
    );

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }
  

  public function getProductById()
  { 
    header("Access-Control-Allow-Origin: *");

    $productId = $this->input->post('productId');

    $product = $this->Reactapi_model->getProductById($productId);

    $Data = array(
      'productId' => $product->productId,
      'title' => $product->title,
      'sku' => $product->sku,
      'buyer_price' => $product->buyer_price,
      'seller_price' => $product->seller_price,
      'discount_type' => $product->discount_type,
      'discount' => $product->discount,
      'description' => $product->description,
      'category' => $product->category,
      'sub_category' => $product->sub_category,
      'child_category' => $product->child_category,
      'product_availability' => $product->product_availability,
      'product_image' => $product->product_image,
      'stock' => $product->stock,
      'status' => $product->status
    );
    //print_r($Data);die;
    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($Data));
  }

  ############# Product Module #############

  public function uploadSingleImage()
  { 
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
    
    move_uploaded_file($_FILES["image"]["tmp_name"], "image/" . $_FILES["image"]["name"]);die;
    //echo $_FILES["image"]["name"];die;

    if( ! empty($formdata)) {

      $myImage = $formdata['myImage'];
      
      $Data = array(
        'image' => $myImage
      );

      $id = $this->Reactapi_model->insert_data('single_image',$Data);

      $response = array(
        'status' => 'success',
        'message' => 'Product created successfully'
      );
    }
    else {
      $response = array(
        'status' => $_POST['myImage']
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }

  public function uploadMultipleImage()
  { 

    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
    
    //print_r($_FILES["image"]["name"]);die;
    $renameImage = rand().'_'.$_FILES["image"]["name"];
    move_uploaded_file($_FILES["image"]["tmp_name"], "image/" . $renameImage);

    $Data = array(
      'image' => $renameImage
    );

    $id = $this->Reactapi_model->insert_data('multiple_image',$Data);

    $response = array(
      'status' => 'success',
      'message' => 'Image save successfully'
    );

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
    
  }

  public function uploadSingleImageWithData()
  { 
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
    
    //print_r($_POST);die;
    move_uploaded_file($_FILES["image"]["tmp_name"], "image/" . $_FILES["image"]["name"]);
    //echo $_FILES["image"]["name"];die;

    if( ! empty($_POST)) {

      $myImage = $_FILES["image"]["name"];
      
      $Data = array(
        'image' => $myImage,
        'title' => $_POST['title']
      );

      $id = $this->Reactapi_model->insert_data('single_image',$Data);

      $response = array(
        'status' => 'success',
        'message' => 'Image save successfully'
      );
    }
    else {
      $response = array(
        'status' => 'error'
      );
    }

    $this->output
      ->set_content_type('application/json')
      ->set_output(json_encode($response));
  }


}
?>
