<?php
/*
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2020-01-15 11:25:15
 * @LastEditTime : 2020-01-15 14:36:55
 * @LastEditors  : 靳肖健
 */

header("Access-Control-Allow-Origin: *"); 
// $type = isset($_POST["type"]) ? $_POST["type"] : '';
// $model = isset($_POST["model"]) ? $_POST["model"]: '';
// $textarea = isset($_POST["textarea"]) ? $_POST["textarea"] : '';
 $tmpData = strval(file_get_contents("php://input"));
 $DataObj = json_decode($tmpData, true);

session_start();
if (!$_SESSION && !$_SESSION['code']) {
	exit('{"code":0,"msg":"非法操作!"}');
}
 
// 连主库
//$conn = mysqli_connect('路径'.':'.'端口','账号','密码','库名');
include 'conn_sql.php';

// Check connection
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
 

$sql="INSERT INTO `form_data_code` (`id`, `type`, `model`, `textarea`) VALUES (NULL, '".$DataObj['type']."',  '".$DataObj['model']."', '".$DataObj['textarea']."')";


// echo ($sql);
$result = $conn->query($sql);

class Verify {
    public $code  = '00';
}
$verify = new Verify();

// var_dump($result);
if ($result){
    $verify->code = 1;
}else{
$verify->code = 0;
}
echo json_encode($verify);
mysqli_close($conn);

?>
