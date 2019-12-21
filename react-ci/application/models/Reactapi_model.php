
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ReactApi_model extends CI_model {
  
  public function get_data($table)
  {
    $this->db->order_by('id','DESC');
    $query = $this->db->get($table);
    return $query->result();
  }

  public function getDataBy_id($Id,$table)
  {
    $this->db->where('id', $Id);
    $query = $this->db->get($table);
    return $query->row();
  }

  public function insert_data($table,$data)
  {
    $this->db->insert($table, $data);
    return $this->db->insert_id();
  }

  public function update_data($id, $Data,$table)
  {
    $this->db->where('id', $id);
    $this->db->update($table, $Data);
  }

  public function delete_record($Id,$table)
  {
    $this->db->where('id', $Id);
    $this->db->delete($table);
  }

  public function getBrandById($Id)
  {
    //print_r($Id);
    $this->db->where('id', $Id);
    $query = $this->db->get('brand');
    return $query->row();
  }

  public function getSubCategory()
  {
    $this->db->select("category.id,category.category_name,sub_category.id,sub_category.sub_category_name,,sub_category.status,sub_category.category_id");
    $this->db->from('sub_category');
    $this->db->join('category', 'category.id = sub_category.category_id');
    $query = $this->db->get();
    return $query->result();
  }
  public function getSubCategoryById($Id)
  {
    $this->db->select("category.id,category.category_name,sub_category.id,sub_category.sub_category_name,,sub_category.status,sub_category.category_id");
    $this->db->from('sub_category');
    $this->db->join('category', 'category.id = sub_category.category_id');
    $this->db->where('sub_category.id', $Id);
    $query = $this->db->get();
    return $query->row();
  }

  public function getSubCategoryByCategory($Id)
  {
    $this->db->where('category_id', $Id);
    $query = $this->db->get('sub_category');
    return $query->result();
  }
  public function getChildCategoryBySubCategory($Id)
  {
    $this->db->where('sub_category_id', $Id);
    $query = $this->db->get('sub_child_category');
    return $query->result();
  }
  public function getChildCategory()
  {
    $this->db->select("category.id,category.category_name,sub_category.id,sub_category.sub_category_name,sub_category.category_id,sub_child_category.id,sub_child_category.child_category_name,sub_child_category.status");
    $this->db->from('sub_child_category');
    $this->db->join('category', 'category.id = sub_child_category.category_id');
    $this->db->join('sub_category', 'sub_category.id = sub_child_category.sub_category_id');
    $query = $this->db->get();
    return $query->result();
  }
  public function getChildCategoryById($Id)
  {
    $this->db->select("category.id,category.category_name,sub_category.id,sub_category.sub_category_name,sub_category.category_id,sub_child_category.id,sub_child_category.child_category_name,sub_child_category.status,sub_child_category.sub_category_id,sub_child_category.category_id");
    $this->db->from('sub_child_category');
    $this->db->join('category', 'category.id = sub_child_category.category_id');
    $this->db->join('sub_category', 'sub_category.id = sub_child_category.sub_category_id');
    $this->db->where('sub_child_category.id', $Id);
    $query = $this->db->get();
    return $query->row();
  }
  public function getAllProducts()
  {
    $this->db->select("product.id as productId,product.title,product.product_image,product.buyer_price,product.seller_price,product.status,product.product_availability,product.stock,product.category,product.sub_category,product.child_category,
    category.id,category.category_name,
    sub_category.id,sub_category.sub_category_name,
    sub_child_category.id,sub_child_category.category_id,sub_child_category.sub_category_id,sub_child_category.child_category_name");
    $this->db->from('product');
    $this->db->join('category', 'category.id = product.category');
    $this->db->join('sub_category', 'sub_category.id = product.sub_category');
    $this->db->join('sub_child_category', 'sub_child_category.id = product.child_category');
    //$this->db->order_by('product.id','DESC');
    $query = $this->db->get();
    return $query->result();
  }

  public function getProductById($Id)
  {
    $this->db->select("product.id as productId,
                      product.title,
                      product.sku,
                      product.product_image,
                      product.buyer_price,
                      product.seller_price,
                      product.status,
                      product.product_availability,
                      product.stock,
                      product.category,
                      product.sub_category,
                      product.child_category,
                      product.discount_type,
                      product.discount,
                      product.description,
    category.id,category.category_name,
    sub_category.id,sub_category.sub_category_name,
    sub_child_category.id,sub_child_category.category_id,sub_child_category.sub_category_id,sub_child_category.child_category_name");
    $this->db->from('product');
    $this->db->join('category', 'category.id = product.category');
    $this->db->join('sub_category', 'sub_category.id = product.sub_category');
    $this->db->join('sub_child_category', 'sub_child_category.id = product.child_category');
    $this->db->where('product.id', $Id);
    $query = $this->db->get();
    return $query->row();
  }

  public function getProductById1($Id,$table)
  {
    $this->db->where('id', $Id);
    $query = $this->db->get($table);
    return $query->row();
  }
}
?>
