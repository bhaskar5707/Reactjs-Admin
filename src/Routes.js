import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Error from './components/Error';
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Footer from './components/layout/Footer';

import Dashboard from './components/Dashboard';
import AddUser from './components/user/AddUser';
import UserList from './components/user/UserList';
import EditUser from './components/user/EditUser';
import NotFound from './components/NotFound';
import Post from './components/Post';
import AddContact from './components/AddContact';

import Brand from './components/brand/brand';
import AddBrand from './components/brand/AddBrand';
import EditBrand from './components/brand/EditBrand';

import AddCategory from './components/category/AddCategory';
import ViewCategory from './components/category/ViewCategory';
import EditCategory from './components/category/EditCategory';

import AddSubCategory from './components/subcategory/AddSubCategory';
import ViewSubCategory from './components/subcategory/ViewSubCategory';
import EditSubCategory from './components/subcategory/EditSubCategory';

import AddChildCategory from './components/childcategory/AddChildCategory';
import ViewChildCategory from './components/childcategory/ViewChildCategory';
import EditChildCategory from './components/childcategory/EditChildCategory';

import AddProduct from './components/product/AddProduct';
import Listproduct from './components/product/Listproduct';
import EditProduct from './components/product/EditProduct';


import AddMore from './components/demopage/AddMore';
import SingleUpload from './components/demopage/SingleUpload';
import SingleUploadWithData from './components/demopage/SingleUploadWithData';
import MultipleUpload from './components/demopage/MultipleUpload';

const Routes = () => (
	<BrowserRouter>
	    <div>
		    <Header />
		    <SideBar />
		    <Switch>
		    
		        <Route path="/dashboard" component={Dashboard}/>
		        <Route path="/adduser" component={AddUser}/>
		        <Route path="/user-list" component={UserList}/>
		        <Route path='/edit/:id' component={ EditUser } />
		        <Route path="/contact" component={AddContact}/>
		        <Route path="/post" component={Post}/>

		        <Route path="/brand" component={Brand} />
		        <Route path="/add-brand" component={AddBrand} />
		        <Route path='/edit-brand/:id' component={ EditBrand } />

		        <Route path="/category" component={ViewCategory} />
		        <Route path="/add-category" component={AddCategory} />
		        <Route path='/edit-category/:id' component={ EditCategory } />

		        <Route path="/subcategory" component={ViewSubCategory} />
		        <Route path="/add-subcategory" component={AddSubCategory} />
		        <Route path='/edit-sub-category/:id' component={ EditSubCategory } />

		        <Route path="/childcategory" component={ViewChildCategory} />
		        <Route path="/add-childcategory" component={AddChildCategory} />
		        <Route path='/edit-child-category/:id' component={ EditChildCategory } />

		        <Route path="/add-product" component={AddProduct} />
		        <Route path="/products" component={Listproduct} />
		        <Route path='/edit-product/:id' component={ EditProduct } />

		        <Route path="/add-more" component={AddMore}/>
		        <Route path="/single-upload" component={SingleUpload}/>
		        <Route path="/single-upload-data" component={SingleUploadWithData}/>
		        <Route path="/multiple-upload" component={MultipleUpload}/>
		        
		        <Route component={Error}/>

		    </Switch>
		    <Footer />
	    </div> 
	</BrowserRouter>
);

export default Routes;