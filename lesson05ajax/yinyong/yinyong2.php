<?php
/**
 * Created by PhpStorm.
 * User: 乔雷
 * Date: 2016/9/18
 * Time: 9:58
 */
$callback= $_GET['callback'];
$username = $_GET['username'];
$age = $_GET['age'];

echo $callback . '({"name" : "' .$username. '" , "age":' . $age. '})';