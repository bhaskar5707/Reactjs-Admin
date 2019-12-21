<?php
    
    $db = mysqli_connect('localhost', 'root', 'root', 'sunil_reactjs');
    
    /*$getUser = "select * from users where email='a@gmail.com'";
    $result=mysqli_query($db,$getUser);
    $userData = mysqli_fetch_all($result,MYSQLI_ASSOC);

    $userData=json_encode($userData);
    //$userData = $userData[0]['name'];
    echo '{'.$userData.'}';die;*/
    
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");

   
    //header("Access-Control-Allow-Credentials" : true );
    $type = $_GET['tp'];
    $userId = $_GET['userId'];
   
    if($type == 'post' )
    {
        $formdata = json_decode(file_get_contents('php://input'), true);

        $username = $formdata['username'];
        $name = $formdata['name'];
        $email = $formdata['email'];
        $password = $formdata['password'];
        mysqli_query($db, "INSERT INTO users (username , password , name , email) VALUES ('$username','$password','$name','$email')") or die(mysqli_error('Error'));   
        $userData=$formdata['email'];
        //echo json_encode(array('success'=>'gjk'));
        if($userData){
          $userData = json_encode($userData);
          //echo '{"userData": ' .$userData . '}';
          echo '{"userData":"Enter valid data"}';
        } else {
            echo '{"userData":"Enter valid data"}';
        }
    }
    
    if($type == 'adduser' )
    {
        $formdata = json_decode(file_get_contents('php://input'), true);

        $username = $formdata['username'];
        $name = $formdata['name'];
        $email = $formdata['email'];
        $password = $formdata['password'];
        $country = $formdata['country'];
        $state = $formdata['state'];
        $city = $formdata['city'];
        $gender = $formdata['gender'];
        $mobile = $formdata['mobile'];

        $countUser = "select * from users where username='$username' or email='$email'";
        $result=mysqli_query($db,$countUser);
        $rowcount=mysqli_num_rows($result);
        if($rowcount == 0){
            mysqli_query($db, "INSERT INTO users (username , password , name , email , country , state , city , gender , mobile)  VALUES ('$username','$password','$name','$email','$country','$state','$city','$gender' ,'$mobile')") or die(mysqli_error('Error'));   
            $userData=$formdata['email'];
            //echo json_encode(array('success'=>'gjk'));
            if($userData){
              $userData = json_encode($userData);
              //echo '{"error": ' .$userData . '}';
              echo '{"success":"New user added successfully"}';
            } else {
                  echo '{"error":{"text":"Enter valid data"}}';
            }
        }else{
            echo '{"error":"Username or email exists"}';
        }
        
    }

    if($type == 'edituser' )
    {
        $formdata = json_decode(file_get_contents('php://input'), true);

        $username = $formdata['username'];
        $name = $formdata['name'];
        $email = $formdata['email'];
        $country = $formdata['country'];
        $state = $formdata['state'];
        $city = $formdata['city'];
        $gender = $formdata['gender'];
        $mobile = $formdata['mobile'];
        $user_id = $formdata['user_id'];
        
            mysqli_query($db, "UPDATE users set username = '".$username."' ,name = '".$name."' ,email = '".$email."',country = '".$country."' ,state = '".$state."' ,city = '".$city."' ,gender = '".$gender."' ,mobile = '".$mobile."' where user_id = '".$user_id."'") or die(mysqli_error('Error'));   
            $userData=$formdata['email'];
            //echo json_encode(array('success'=>'gjk'));
            if($userData){
              $userData = json_encode($userData);
              //echo '{"error": ' .$userData . '}';
              echo '{"success":"User profile updated successfully"}';
            } else {
                  echo '{"error":{"text":"Enter valid data"}}';
            }
       
        
    }
    
    
    if($type == 'GET_USER' )
    {
        header("Access-Control-Allow-Origin: *");
        $host="localhost";
        $user="root";
        $pass="root";
        $db1="sunil_reactjs";

        

        //connect with database demo
        $connect= new mysqli($host,$user,$pass,$db1) or die("ERROR:could not connect to the database!!!");

        //select all data from json table
        $query="select * from users";
        $result=$connect->query($query);

        //fetech all data from json table in associative array format and store in $result variable
        //$array=[$result->fetch_assoc()];

        $dbdata = array();

        //Fetch into associative array
        while ( $row = $result->fetch_assoc())  {
            $dbdata[]=$row;
        }

        //Now encode PHP array in JSON string 
        $json=json_encode($dbdata);//echo '<pre>';print_r($json);
        echo '{"UserList": '.$json.'}';

    }

    if($type == 'GET_USERBYID' )
    {
        header("Access-Control-Allow-Origin: *");
        $host="localhost";
        $user="root";
        $pass="root";
        $db1="sunil_reactjs";
        header("Access-Control-Allow-Origin: *");
        $formdata = json_decode(file_get_contents('php://input'), true);

        $userId = $_POST['userId'];

        $connect= new mysqli($host,$user,$pass,$db1) or die("ERROR:could not connect to the database!!!");

        $query="select * from users  where user_id= $userId";
        $result=$connect->query($query);

        $dbdata = array();
        while ( $row = $result->fetch_assoc())  {
            $dbdata[]=$row;
        }
        $json=json_encode($dbdata);//echo '<pre>';print_r($json);
        echo '{"UserData": '.$json.'}';

    }

    if($type == 'USER_DELETE' )
    {
        $host="localhost";
        $user="root";
        $pass="root";
        $db1="sunil_reactjs";
        header("Access-Control-Allow-Origin: *");
        $formdata = json_decode(file_get_contents('php://input'), true);

        $userId = $_POST['userId']; //echo '{"UserId":"'.$userId.'"}';die;
        $delete = mysqli_query($db,"DELETE FROM users where user_id = $userId"); 

        //connect with database demo
        $connect= new mysqli($host,$user,$pass,$db1) or die("ERROR:could not connect to the database!!!");

        //select all data from json table
        $query="select * from users";
        $result=$connect->query($query);

        //fetech all data from json table in associative array format and store in $result variable
        //$array=[$result->fetch_assoc()];

        $dbdata = array();

        //Fetch into associative array
        while ( $row = $result->fetch_assoc())  {
            $dbdata[]=$row;
        }

        //Now encode PHP array in JSON string 
        $json=json_encode($dbdata);//echo '<pre>';print_r($json);
        echo '{"UserList": '.$json.'}';

    }
    
    if($type == 'login' )
    {
        //echo '{"error":"Username or email exists"}';die;
        $formdata = json_decode(file_get_contents('php://input'), true);

        $username = $formdata['username'];
        $password = $formdata['password'];
        $countUser = "select * from users where email='$username' and password='$password'";
        $result=mysqli_query($db,$countUser);
        $userData = mysqli_fetch_object($result);
        $rowcount=mysqli_num_rows($result);
        //$userData=$formdata['username'];
        if($rowcount == 1)
        {
            if($userData){
                $userData = json_encode($userData);
                echo '{"userData": ' .$userData . '}';
                //echo '{"userData":"Login successfully"}';
            } else {
                echo '{"error":"Enter valid data"}';
            }
        }else{
            echo '{"error":"Username or password is incorrect"}';
        }
        
    }

    if($type == 'GetLoginDetail' )
    {   
        $json = json_decode(file_get_contents('php://input'), true);
        $user_id=$json['user_id'];

        $getUser = "select * from users where email='$user_id'";
        $result=mysqli_query($db,$getUser);
        $userData = mysqli_fetch_all($result,MYSQLI_ASSOC);

        $userData=json_encode($userData);
        //$userData = $userData[0]['name'];
        echo '{"userData":'.$userData.'}';
        //echo '{"userData":"Enter valid data"}';
    }

    

    