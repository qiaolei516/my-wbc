<?php
/**
 * Created by PhpStorm.
 * User: 乔雷
 * Date: 2016/9/18
 * Time: 9:37
 */

$username = $_GET['username'];
$age = $_GET['age'];

echo '{"name" : "' .$username. '" , "age":' . $age. '}';