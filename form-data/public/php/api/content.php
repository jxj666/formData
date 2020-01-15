<?php
/*
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2020-01-14 16:38:40
 * @LastEditTime : 2020-01-15 14:25:34
 * @LastEditors  : 靳肖健
 */
header("Access-Control-Allow-Origin: *");
// 连主库
session_start();
if (!$_SESSION && !$_SESSION['code']) {
	exit('{"code":0,"msg":"非法操作!","$_SESSION":"1814"}');
}
//$conn = mysqli_connect('路径'.':'.'端口','账号','密码','库名');
include 'conn_sql.php';

// Check connection
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
 
class Content {
    public $code  = '00';
    public $content = '00';
}
$content =new Content();
$sql = "SELECT * 
FROM  `form_data_code` 
ORDER BY  `id` DESC 
LIMIT 0 , 300";
$result = $conn->query($sql);
$data = array();
if ($result) {
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}
$content->code='1';
$content->content=$data; 
} else {
 $content->code='0';   
}
echo json_encode($content);
$conn->close();
?>