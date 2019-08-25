<?php

header('Content-Type: application/json');

$file = file_get_contents('php://input');
$decoded = json_decode($file);
$piece = $decoded->name;
$piece = $piece . "\n";

//this part works, which means the regular $piece is not working
// $piece3 = "hellothere";

$myfile = fopen('list.txt', 'a');
fwrite($myfile, $piece);

$pieceEncoded = json_encode($piece);

var_dump($piece);

if( strpos(file_get_contents("list.txt"),$_GET['bo']) !== false) {
    echo "hello";
}
//echo $piece;

// $needle = '/go(\w+)/';
// echo $needle;
//$needle = '/' . $piece . '(\w+)/';
// $needle = "/$piece(\w+)/";
// echo $needle;
// $haystack = ['arg', 'goo', 'go', 'goo'];
//$haystack = ['bob', 'larry', 'sam', 'sammy'];

// $result = preg_grep ($needle, $haystack);
// print_r($result);
// foreach($result as $key=>$value){
//     $value = $value . "\n";
//     echo $value;
// }
// print_r($result);
// print_r($pieceEncoded);
// echo $pieceEncoded;
fclose($myfile);
