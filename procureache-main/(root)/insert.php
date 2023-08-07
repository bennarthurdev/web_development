<?php 
//declaring statments <- receive vars from form trought post method
$firstName = $_POST["Name"];
$secondName = $_POST["secondName"];
$password = $_POST["password"];
$email = $_POST["email"];
$phoneNumber = $_POST["phone"];
print_r($_POST);
//validate data

if(!empty($firstName) || !empty($secondName) || !empty($password) || !empty($email) || !empty($phoneNumber)){
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "procure_ache";

    //create connection  
    $conn = new mysqli($host,$dbUsername,$dbPassword,$dbname);
    if(mysqli_connect_error()){ //SEARCH FOR ERRORS IN CONECTION
        die('Connect Error('. mysqli_connect_errno().')'.mysqli_connect_error());
    }else{
        $SELECT = "SELECT email From register Where email = ? Limit 1";
        $INSERT = "INSERT Into register (firstName, secondName, password , email , phoneNumber) values (?, ?, ?, ?, ?)";

        //Prepare statment
        $stmt = $conn -> prepare($SELECT);
        $stmt -> bind_param("s", $email);
        $stmt -> execute();
        $stmt -> bind_result($email);
        $stmt -> store_result();
        $rnum = $stmt -> num_rows;

        if($rnum == 0){
            $stmt ->close();
            
            $stmt = $conn -> prepare($INSERT);
            $stmt -> bind_param("ssssi", $firstName, $secondName, $password, $email, $phoneNumber);
        }else{
            echo "Someone already register using this email";
        }
        $stmt -> close();
        $conn -> close();
    }
}else{
    echo "All field are required!";
    die();
}

?>