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

//echo $piece;

$needle = '/go(\w+)/';
$haystack = ['arg', 'goo', 'go', 'goo'];
$result = preg_grep ($needle, $haystack);

foreach($result as $key=>$value){
    $value = $value . "\n";
    echo $value;
}
// print_r($result);
// print_r($pieceEncoded);
// echo $pieceEncoded;
fclose($myfile);
